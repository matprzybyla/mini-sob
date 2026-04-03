#!/usr/bin/env bash
set -euo pipefail

# Opens a GitHub PR for the current branch using the GitHub REST API.
# Required env vars:
#   GITHUB_TOKEN        - GitHub token with repo scope
#   GITHUB_REPO         - e.g. owner/repo
# Optional env vars:
#   GITHUB_BASE_BRANCH  - default: main
#   PR_TITLE            - default: "Automated PR from <branch>"
#   PR_BODY             - default: "Automated pull request"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: run this script inside a git repository." >&2
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Error: git remote 'origin' is not configured." >&2
  exit 1
fi

: "${GITHUB_TOKEN:?Error: GITHUB_TOKEN is required}"
: "${GITHUB_REPO:?Error: GITHUB_REPO is required (format: owner/repo)}"

BRANCH="$(git branch --show-current)"
BASE="${GITHUB_BASE_BRANCH:-main}"
TITLE="${PR_TITLE:-Automated PR from ${BRANCH}}"
BODY="${PR_BODY:-Automated pull request}"

if [[ -z "${BRANCH}" ]]; then
  echo "Error: could not determine current git branch." >&2
  exit 1
fi

echo "Pushing branch '${BRANCH}' to origin..."
git push -u origin "${BRANCH}"

PAYLOAD=$(python3 - <<'PY'
import json, os
print(json.dumps({
    "title": os.environ["TITLE"],
    "head": os.environ["BRANCH"],
    "base": os.environ["BASE"],
    "body": os.environ["BODY"],
}))
PY
)

echo "Creating pull request against '${BASE}'..."
RESPONSE=$(curl -sS -X POST "https://api.github.com/repos/${GITHUB_REPO}/pulls" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -d "${PAYLOAD}")

PR_URL=$(printf '%s' "${RESPONSE}" | python3 -c 'import json,sys; data=json.load(sys.stdin); print(data.get("html_url",""))')
API_MESSAGE=$(printf '%s' "${RESPONSE}" | python3 -c 'import json,sys; data=json.load(sys.stdin); print(data.get("message",""))')

if [[ -n "${PR_URL}" ]]; then
  echo "PR created: ${PR_URL}"
  exit 0
fi

echo "GitHub API response did not include a PR URL." >&2
if [[ -n "${API_MESSAGE}" ]]; then
  echo "Message: ${API_MESSAGE}" >&2
fi
exit 1
