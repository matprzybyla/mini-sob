import Link from "next/link";
import styles from "./page.module.css";

type ReferenceItem = {
  name: string;
  icon: string;
  description: string;
};

type ReferenceSection = {
  title: string;
  intro: string;
  items: ReferenceItem[];
};

const referenceSections: ReferenceSection[] = [
  {
    title: "Tokens",
    intro: "Track temporary effects, mission progress, and map pressure with these common tokens.",
    items: [
      {
        name: "Dark Stone",
        icon: "⛏️",
        description:
          "Used as a key campaign resource for upgrades, town actions, and mission objectives.",
      },
      {
        name: "Corruption",
        icon: "☠️",
        description:
          "Represents growing supernatural taint. Gain too much and heroes risk major penalties.",
      },
      {
        name: "Grit",
        icon: "⭐",
        description:
          "Spend to modify dice rolls or trigger class abilities, depending on hero and gear effects.",
      },
      {
        name: "Wound",
        icon: "🩸",
        description:
          "Marks damage taken by heroes or enemies. Reaching maximum wounds causes a knockout or defeat.",
      },
      {
        name: "Mission",
        icon: "🎯",
        description:
          "Used to mark objective progress like discovered clues, sealed gates, or completed tasks.",
      },
      {
        name: "Threat",
        icon: "🔥",
        description:
          "Tracks mounting danger from encounters, time pressure, or escalating enemy behavior.",
      },
    ],
  },
  {
    title: "Hero Icons",
    intro: "Quick legend for hero role symbols used in campaign notes and mission planning.",
    items: [
      {
        name: "Marshal",
        icon: "🤠",
        description:
          "Frontline leader focused on command tools, ranged pressure, and controlling the battlefield.",
      },
      {
        name: "Gunslinger",
        icon: "🔫",
        description:
          "High-accuracy pistol specialist that thrives on burst turns and precision attacks.",
      },
      {
        name: "Saloon Girl",
        icon: "🎴",
        description:
          "Support-oriented hero with luck manipulation and party utility through event control.",
      },
      {
        name: "Lawman",
        icon: "🛡️",
        description:
          "Durable defender that mitigates incoming damage and protects weaker party members.",
      },
      {
        name: "Preacher",
        icon: "📖",
        description:
          "Faith-based support role with healing, cleansing, and morale-focused abilities.",
      },
      {
        name: "Bandido",
        icon: "🗡️",
        description:
          "Mobile skirmisher built around opportunistic strikes, steals, and high-risk plays.",
      },
    ],
  },
  {
    title: "Statuses",
    intro: "Use status markers to keep combat and travel effects visible for the whole table.",
    items: [
      {
        name: "Stunned",
        icon: "💫",
        description: "Model loses actions until recovered, usually after a test or start-of-turn check.",
      },
      {
        name: "Poisoned",
        icon: "🧪",
        description: "Takes recurring damage over time until treated or successfully resisted.",
      },
      {
        name: "Bleeding",
        icon: "🩹",
        description: "Suffers attrition each round and can worsen if left unresolved.",
      },
      {
        name: "Cursed",
        icon: "🔮",
        description:
          "Applies supernatural penalties that interfere with checks, defense, or item usage.",
      },
      {
        name: "Inspired",
        icon: "✨",
        description:
          "Temporary positive status that grants bonuses to checks, attacks, or movement.",
      },
      {
        name: "Downed",
        icon: "🪦",
        description:
          "Hero is incapacitated and requires support actions or recovery effects to rejoin combat.",
      },
    ],
  },
];

export default function ReferencePage() {
  return (
    <div className={styles.page}>
      <header className="subpageTopRow">
        <div className="subpageHeaderMain">
          <p className={styles.eyebrow}>Rules</p>
          <h2 className="subpageHeaderTitle">Tokens, Icons, and Statuses</h2>
        </div>
        <Link className="subpageBackLink" href="/" aria-label="Back to Camp" title="Back to Camp" />
      </header>

      {referenceSections.map((section) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>{section.title}</h3>
            <p>{section.intro}</p>
          </div>
          <div className={styles.grid}>
            {section.items.map((item) => (
              <article className={styles.card} key={item.name}>
                <div className={styles.icon} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
