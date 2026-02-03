# Repository Guidelines

## Project Structure & Module Organization
This repository currently stores campaign materials and map assets rather than application source code. Key files:
- `Campaign.md`: campaign notes and narrative.
- `HexCrawl_AdventureBook.v1.0.1.pdf`: reference adventure book.
- `map.png` and `HexCrawl map 0.8 inksafe*.jpg`: map artwork.
- `CLAUDE.md`: core rules and tech stack notes for future development.

If code is added later, document it here (for example, `src/` for app code, `tests/` for automated tests, and `assets/` for static media).

## Build, Test, and Development Commands
No build, test, or local dev commands are defined in this repository at this time. If a Next.js app is added, list the exact commands (for example, `npm run dev`, `npm run build`, `npm test`) and briefly describe their purpose.

## Project structure
- `.` of project holds basing ai files
- `assets` - folder that holds assets used in vibecoding regading shadows of brimstone
- `web` - folder that holds the Next.js client application 


## Coding Style & Naming Conventions
Follow `CLAUDE.md`:
- Keep solutions simple and avoid overengineering.
- Prefer minimal, targeted changes.
- Target a Next.js frontend with Supabase for persistence and campaign login.

If source code is added, document indentation, naming patterns (for example, `PascalCase` components, `camelCase` functions), and formatting or linting tools (for example, Prettier, ESLint).

## Testing Guidelines
There are no tests or frameworks in the repository currently. If tests are introduced, specify the framework, naming pattern (for example, `*.test.ts`), coverage goals, and the command to run them.

## Commit & Pull Request Guidelines
No Git history is available in this workspace, so commit conventions cannot be inferred. If you initialize Git, adopt a clear convention (for example, Conventional Commits) and document PR requirements such as linked issues and screenshots for map or UI changes.

## Security & Configuration Tips
No runtime configuration is present. If Supabase or other credentials are introduced, store them in environment files (for example, `.env.local`) and never commit secrets.
