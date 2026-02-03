"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

const adjustmentNotes = [
  "Exploration (Basic Mission 2): Destroy 1 random Town Location in the nearest Town. Roll a D8 twice for Wilderness Encounters each day until you visit another Town.",
  "Seal the Void Gate (Basic Mission 3): The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5) at the same Mine.",
  "City of the Ancients (Mission 4): Heroes each take D6 Wounds. Proceed directly to Escape (Basic Mission 5) at the same Mine.",
  "Frozen Expedition (Mission 6): The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5) at the same Mine.",
  "Night of the Dead (Swamps Mission 1): The nearest Town is Destroyed by the epidemic and roll a D8 twice each day until you visit another Town.",
  "Cursed Idol (Swamps Mission 5): The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5) at the same Mine.",
];

const missionSections = [
  {
    title: "Swamps of Death: Core Game — Basic Missions",
    items: [
      "For a Few Dark Stone More (Mine)",
      "Exploration (Mine)",
      "Seal the Void Gate (Mine)",
      "Search Party (Mine)",
      "Escape (Mine)",
      "Blow the Mine (Mine)",
    ],
  },
  {
    title: "Swamps of Death Missions",
    items: [
      "Night of the Dead (Mine)",
      "Seal the Hell Pit (Mine - Fixed Map)",
      "The Lost Journal (Mine - Fixed Map)",
      "Swamps of Death (Mine/Jargono)",
      "Cursed Idol (Mine/Jargono)",
      "Temple of Dread (Mine/Jargono)",
    ],
  },
  {
    title: "City of the Ancients: Core Game — Basic Missions",
    items: [
      "For a Few Dark Stone More (Mine)",
      "Exploration (Mine)",
      "Seal the Void Gate (Mine)",
      "Search Party (Mine)",
      "Escape (Mine)",
      "Blow the Mine (Mine)",
    ],
  },
  {
    title: "City of the Ancients Missions",
    items: [
      "Terror in the Night (Mine)",
      "Stop the Ritual (Mine - Fixed Map)",
      "Last Stand (Mine - Fixed Map)",
      "City of the Ancients (Mine/Targa)",
      "Overload (Targa)",
      "Frozen Expedition (Mine/Targa)",
    ],
  },
  {
    title: "Frontier Town: Expansion",
    items: [
      "Shootout in the Streets (Frontier Town)",
      "Hanging High (Frontier Town)",
      "Bank Robbery (Frontier Town)",
      "Jail Break (Frontier Town)",
      "Town Overrun (Frontier Town)",
      "High Noon Duel (Frontier Town - Solo)",
    ],
  },
  {
    title: "The Caverns of Cynder: Otherworld Expansion",
    items: [
      "Cracks in Reality (Mine)",
      "Defend the Bridge (Mine - Fixed Map)",
      "Dark Deal (Mine)",
      "Fire and Ash (Mine/Cynder)",
      "Hunt for The Dark Stone (Mine/Cynder)",
      "Broken Seals (Cynder)",
    ],
  },
  {
    title: "Werewolf Feral Kin Mission Pack",
    items: [
      "First Blood (Mines)",
      "Full Moon (Mines - or - Canyons)",
      "Cleansing Ritual (Mines)",
      "Hunting Ground (Mines)",
    ],
  },
  {
    title: "Masters of the Void: Deluxe Enemy Pack",
    items: ["Hunted (Mine)", "Call of the Void (Mine)"],
  },
  {
    title: "Undead Outlaws: Deluxe Enemy Pack",
    items: ["Wanted: Undead or Alive (Mine)", "Revenge of the Dead (Mine)"],
  },
];

const excludedRandomSectionTitles = new Set(["Frontier Town: Expansion"]);

export default function MissionsPage() {
  const [randomMission, setRandomMission] = useState<{
    title: string;
    packTitle: string;
    packCode: string;
    orderIndex: number;
  } | null>(null);

  const packCodeForTitle = (title: string) => {
    if (title.includes("Core Game")) {
      return "Core";
    }
    if (title.startsWith("Swamps of Death")) {
      return "SoD";
    }
    if (title.startsWith("City of the Ancients")) {
      return "CotA";
    }
    if (title.startsWith("Frontier Town")) {
      return "FT";
    }
    if (title.startsWith("The Caverns of Cynder")) {
      return "CoC";
    }
    if (title.startsWith("Werewolf Feral Kin")) {
      return "WFK";
    }
    if (title.startsWith("Masters of the Void")) {
      return "MotV";
    }
    if (title.startsWith("Undead Outlaws")) {
      return "UO";
    }
    return "Pack";
  };

  const randomPool = useMemo(() => {
    return missionSections
      .filter((section) => !excludedRandomSectionTitles.has(section.title))
      .flatMap((section) => section.items.map((item) => ({ section, item })));
  }, []);

  const pickRandomMission = () => {
    if (randomPool.length === 0) {
      setRandomMission(null);
      return;
    }

    const next = randomPool[Math.floor(Math.random() * randomPool.length)];
    const orderIndex = next.section.items.findIndex((item) => item === next.item);
    setRandomMission({
      title: next.item,
      packTitle: next.section.title,
      packCode: packCodeForTitle(next.section.title),
      orderIndex: orderIndex + 1,
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Campaign Ledger</p>
          <h1 className={styles.title}>Missions</h1>
          <p className={styles.subtitle}>
            A complete rundown of mission packs and special adjustments for the HexCrawl campaign.
          </p>
        </div>
        <Link className={styles.backLink} href="/">
          Back to Camp
        </Link>
      </header>

      <section className={styles.randomBlock}>
        <div>
          <h2>Random Mission</h2>
          <p>Draws from all mission packs except Frontier Town.</p>
        </div>
        <div className={styles.randomAction}>
          <div
            className={styles.randomButton}
            role="button"
            tabIndex={0}
            onClick={pickRandomMission}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                pickRandomMission();
              }
            }}
          >
            <span className={styles.diceInk} aria-hidden="true">
              <svg className={styles.diceIcon} viewBox="0 0 24 24" focusable="false">
                <path d="M5 6.5 12 3l7 3.5v11L12 21l-7-3.5z" />
                <path d="M5 6.5 12 10l7-3.5M12 10v11M9 8.5h.01M15 8.5h.01M12 13h.01M9 16h.01M15 16h.01" />
              </svg>
            </span>
            <div className={styles.randomButtonText}>
              <span className={styles.randomLabel}>Random mission</span>
              <span className={styles.randomHintText}>Tap to draw from the deck</span>
            </div>
          </div>
          {randomMission ? (
            <div className={styles.randomResult}>
              <p className={styles.randomNumber}>
                {randomMission.packCode}-{randomMission.orderIndex}
              </p>
              <p className={styles.randomTitle}>{randomMission.title}</p>
              <p className={styles.randomPack}>{randomMission.packTitle}</p>
            </div>
          ) : (
            <p className={styles.randomHint}>No draw yet. Tap the button to roll.</p>
          )}
        </div>
      </section>

      <section className={styles.notice}>
        <h2>Campaign Adjustments</h2>
        <ul>
          {adjustmentNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <div className={styles.grid}>
        {missionSections.map((section) => (
          <section className={styles.card} key={section.title}>
            <h2>{section.title}</h2>
            <ol>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
