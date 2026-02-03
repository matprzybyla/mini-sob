import Link from "next/link";
import styles from "./page.module.css";

const menuItems = ["Campaign", "Missions", "Rules", "About"];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <header className={styles.header}>
        <div className={styles.brand}>
          <p className={styles.brandOverline}>SOB Trail Ledger</p>
          <h1 className={styles.brandTitle}>Sunset Over Badlands</h1>
          <p className={styles.brandTagline}>
            A mobile-first campaign console for legends, lore, and last rides.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Main menu">
          <ul className={styles.navList}>
            {menuItems.map((item) => {
              if (item === "Missions") {
                return (
                  <li key={item}>
                    <Link className={styles.navLink} href="/missions">
                      {item}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item}>
                  <a className={styles.navLink} href={`#${item.toLowerCase()}`}>
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
            <h2 className={styles.heroTitle}>Story-driven adventures on the frontier.</h2>
            <p className={styles.heroText}>
              Track missions, update the campaign ledger, and keep your posse in sync. Built for
              quick glances on the trail and deep dives by the campfire.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#campaign">
                Open Campaign
              </a>
              <Link className={styles.secondaryButton} href="/missions">
                View Missions
              </Link>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>Live</span>
              <span className={styles.cardTitle}>Frontier Dispatch</span>
            </div>
            <p className={styles.cardText}>
              Today: Sandstorm along the Salt Flats. Keep your mounts watered and watch for
              smugglers.
            </p>
            <div className={styles.cardFooter}>
              <span>Next milestone</span>
              <strong>Silver Gulch rendezvous</strong>
            </div>
          </div>
        </section>

        <section className={styles.menuGrid}>
          {menuItems.map((item) => (
            <article className={styles.menuCard} id={item.toLowerCase()} key={item}>
              <h3>{item}</h3>
              <p>
                {item === "Campaign" &&
                  "Track your party, world state, and chapter beats in one place."}
                {item === "Missions" &&
                  "Review open jobs, bounties, and side trails before the posse rides."}
                {item === "Rules" &&
                  "Quick reference for core mechanics, travel, and frontier hazards."}
                {item === "About" &&
                  "Meet the setting, tone, and safety tools shaping the campaign."}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
