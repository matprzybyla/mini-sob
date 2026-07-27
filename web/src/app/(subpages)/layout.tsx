"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "./layout.module.css";
import "./subpage-header.css";

const menuItems = ["Campaign", "Missions", "Map", "Reference", "About"];

export default function SubpagesLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <Link
            className={styles.brandHomeLink}
            href="/"
            onClick={closeMobileMenu}
            aria-label="Back to campaign home"
            title="Back to campaign home"
          >
            <h1 className={styles.brandTitle}>Sunset Over Badlands</h1>
          </Link>
          <button
            className={styles.menuToggle}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="subpage-menu-list"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuToggleIcon} aria-hidden="true" />
          </button>
          <p className={styles.brandTagline}>
            A mobile-first campaign console for legends, lore, and last rides.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Main menu" data-open={isMenuOpen}>
          <ul className={styles.navList} id="subpage-menu-list" data-open={isMenuOpen}>
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

              if (item === "Reference") {
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
                  <Link
                    className={styles.navLink}
                    href={`/#${item.toLowerCase()}`}
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
