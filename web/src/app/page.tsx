"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const menuItems = ["Campaign", "Missions", "Map", "Rules", "About"];
const frontierTopics = [
  "Old West",
  "Cowboy",
  "American frontier",
  "Great Plains",
  "Trail",
  "Wagon train",
  "Stagecoach",
  "Cattle drive",
  "Frontier thesis",
  "Homestead Acts",
  "Gold rush",
  "Klondike Gold Rush",
  "Pony Express",
  "Outlaw",
  "Sheriff",
  "Bounty hunter",
  "Ghost town",
  "Western (genre)",
  "Western Gothic",
  "Dodge City, Kansas",
  "Deadwood, South Dakota",
  "O.K. Corral",
  "Wyatt Earp",
  "Doc Holliday",
  "Billy the Kid",
  "Jesse James",
  "Butch Cassidy",
  "Sundance Kid",
  "Belle Starr",
  "Bass Reeves",
  "Wild west shows",
  "Buffalo Soldiers",
  "Native Americans in the United States",
  "Navajo Nation",
  "Lakota people",
  "Comanche",
  "Apache",
  "Hopi",
  "Geronimo",
  "Sitting Bull",
  "Crazy Horse",
  "Chief Joseph",
  "Ghost Dance",
  "Battle of the Little Bighorn",
  "Thunderbird (mythology)",
  "Wendigo",
  "Skin-walker",
  "La Llorona",
  "Lost Dutchman's Gold Mine",
  "Superstition Mountains",
  "Wild Bill Hickok",
  "Calamity Jane",
  "Annie Oakley",
  "Buffalo Bill",
  "Tombstone, Arizona",
];
const fallbackDispatch =
  "Dust devils are rolling across the flats. Keep canteens full and post a lookout at dusk.";

function shortenDispatch(text: string) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 180) {
    return cleaned;
  }

  const firstSentence = cleaned.split(". ")[0]?.trim();
  if (firstSentence && firstSentence.length <= 180) {
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
  }

  return `${cleaned.slice(0, 177).trim()}...`;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(() =>
    Math.floor(Math.random() * frontierTopics.length)
  );
  const [isDispatchLoading, setIsDispatchLoading] = useState(false);
  const [dispatchText, setDispatchText] = useState(fallbackDispatch);
  const [dispatchSource, setDispatchSource] = useState("Trail bulletin");

  useEffect(() => {
    let isActive = true;
    const topic = frontierTopics[currentTopicIndex];

    async function fetchDispatch() {
      setIsDispatchLoading(true);
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`
        );

        if (!response.ok) {
          throw new Error("Could not load live dispatch text.");
        }

        const payload: { extract?: string; title?: string } = await response.json();
        if (!isActive || !payload.extract) {
          return;
        }

        setDispatchText(shortenDispatch(payload.extract));
        setDispatchSource(payload.title ?? topic);
      } catch {
        if (!isActive) {
          return;
        }
        setDispatchText(fallbackDispatch);
        setDispatchSource("Trail bulletin");
      } finally {
        if (isActive) {
          setIsDispatchLoading(false);
        }
      }
    }

    fetchDispatch();

    return () => {
      isActive = false;
    };
  }, [currentTopicIndex]);

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  function showPreviousDispatch() {
    setCurrentTopicIndex(
      (index) => (index - 1 + frontierTopics.length) % frontierTopics.length
    );
  }

  function showNextDispatch() {
    setCurrentTopicIndex((index) => (index + 1) % frontierTopics.length);
  }

  return (
    <div className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <div className={styles.brand}>
            <Link className={styles.brandHomeLink} href="/">
              <h1 className={styles.brandTitle}>Sunset Over Badlands</h1>
            </Link>
          </div>
          <button
            className={styles.menuToggle}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu-list"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuToggleIcon} aria-hidden="true" />
          </button>
          <p className={styles.brandTagline}>
            A mobile-first campaign console for legends, lore, and last rides.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Main menu" data-open={isMenuOpen}>
          <ul className={styles.navList} id="main-menu-list" data-open={isMenuOpen}>
            {menuItems.map((item) => {
              if (item === "Missions") {
                return (
                  <li key={item}>
                    <Link className={styles.navLink} href="/missions" onClick={closeMobileMenu}>
                      {item}
                    </Link>
                  </li>
                );
              }
              if (item === "Map") {
                return (
                  <li key={item}>
                    <Link className={styles.navLink} href="/map" onClick={closeMobileMenu}>
                      {item}
                    </Link>
                  </li>
                );
              }
              if (item === "Rules") {
                return (
                  <li key={item}>
                    <Link className={styles.navLink} href="/reference" onClick={closeMobileMenu}>
                      {item}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item}>
                  <a
                    className={styles.navLink}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Wanted</p>
            <h3 className={styles.heroTitle}>Adventures on the frontier.</h3>
            <p className={styles.heroText}>
              Track missions, update the campaign ledger, and keep your posse in sync. Built for
              quick glances on the trail and deep dives by the campfire.
            </p>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeading}>
                <span className={styles.cardBadge}>Live</span>
                <span className={styles.cardTitle}>Living Dispatch</span>
              </div>
              <div className={styles.dispatchControls} aria-label="Dispatch topic controls">
                <button
                  className={styles.dispatchButton}
                  type="button"
                  onClick={showPreviousDispatch}
                  disabled={isDispatchLoading}
                  aria-label="Previous dispatch topic"
                >
                  {"<"}
                </button>
                <button
                  className={styles.dispatchButton}
                  type="button"
                  onClick={showNextDispatch}
                  disabled={isDispatchLoading}
                  aria-label="Next dispatch topic"
                >
                  {">"}
                </button>
              </div>
            </div>
            <p className={styles.cardText}>{dispatchText}</p>
            <p className={styles.cardSource}>Source: {dispatchSource} (Wikipedia)</p>
          </div>
        </section>

        <section className={styles.menuGrid}>
          {menuItems.map((item) => {
            const content = (
              <>
                <h3>{item}</h3>
                <p>
                  {item === "Campaign" &&
                    "Track your party, world state, and chapter beats in one place."}
                  {item === "Missions" &&
                    "Review open jobs, bounties, and side trails before the posse rides."}
                  {item === "Map" &&
                    "Open the hex map for travel planning, touch panning, and quick zoom."}
                  {item === "Rules" &&
                    "Quick reference for core mechanics, travel, and frontier hazards."}
                  {item === "About" &&
                    "Meet the setting, tone, and safety tools shaping the campaign."}
                </p>
                {item === "Campaign" && (
                  <a className={styles.primaryButton} href="#campaign">
                    Open Campaign
                  </a>
                )}
                {item === "Missions" && (
                  <Link className={styles.secondaryButton} href="/missions">
                    View Missions
                  </Link>
                )}
                {item === "Map" && (
                  <Link className={styles.secondaryButton} href="/map">
                    Open Map
                  </Link>
                )}
                {item === "Rules" && (
                  <Link className={styles.secondaryButton} href="/reference">
                    Open Rules
                  </Link>
                )}
              </>
            );

            return (
              <article className={styles.menuCard} id={item.toLowerCase()} key={item}>
                {content}
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
