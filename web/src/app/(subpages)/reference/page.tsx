import Link from "next/link";
import styles from "./page.module.css";

type ReferenceItem = {
  title: string;
  icon: string;
  description: string;
};

const tokens: ReferenceItem[] = [
  {
    title: "Wound token",
    icon: "♥",
    description: "Tracks Health damage. When Health is reduced to 0, the Hero is KO’d.",
  },
  {
    title: "Sanity token",
    icon: "🧠",
    description: "Tracks Sanity damage from horrors and dark events.",
  },
  {
    title: "Grit token",
    icon: "✦",
    description: "A Hero resource spent to modify dice, trigger abilities, or negate hits.",
  },
  {
    title: "Dark Stone token",
    icon: "◆",
    description: "Represents raw Dark Stone carried by Heroes and used by some effects.",
  },
  {
    title: "Corruption token",
    icon: "☠",
    description: "Marks growing corruption from Dark Stone and forbidden effects.",
  },
  {
    title: "XP token",
    icon: "★",
    description: "Tracks earned experience for level-up progress and upgrades.",
  },
];

const heroIcons: ReferenceItem[] = [
  {
    title: "All Heroes",
    icon: "👥",
    description: "The effect applies to every Hero in the posse.",
  },
  {
    title: "Random Hero",
    icon: "🎲",
    description: "Randomly choose one Hero as the target.",
  },
  {
    title: "Chosen Hero",
    icon: "🎯",
    description: "The group chooses which Hero is affected.",
  },
  {
    title: "Nearest Hero",
    icon: "⇢",
    description: "Target the closest valid Hero to the source of the effect.",
  },
];

const statuses: ReferenceItem[] = [
  {
    title: "Poisoned",
    icon: "☣",
    description: "The Hero suffers ongoing damage until the status is removed.",
  },
  {
    title: "Bleeding",
    icon: "🩸",
    description: "The Hero risks taking extra damage as the wound worsens.",
  },
  {
    title: "Stunned",
    icon: "💫",
    description: "The Hero loses tempo and may be limited on actions.",
  },
  {
    title: "Frozen",
    icon: "❄",
    description: "Movement and reactions are hindered by extreme cold.",
  },
  {
    title: "Burning",
    icon: "🔥",
    description: "The Hero takes fire damage until the flames are put out.",
  },
  {
    title: "Cursed",
    icon: "🕯",
    description: "The Hero is afflicted by a supernatural penalty until resolved.",
  },
];

function ReferenceSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ReferenceItem[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li className={styles.card} key={item.title}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ReferencePage() {
  return (
    <div className={styles.page}>
      <header className="subpageTopRow">
        <div className="subpageHeaderMain">
          <p className={styles.eyebrow}>Rules Reference</p>
          <h2 className="subpageHeaderTitle">Tokens, hero icons, and statuses</h2>
          <p className="subpageHeaderSubtitle">
            Quick lookup during encounters, travel events, and town phases.
          </p>
        </div>
        <Link className="subpageBackLink" href="/" aria-label="Back to Camp" title="Back to Camp" />
      </header>

      <ReferenceSection
        title="Tokens"
        subtitle="Track the most common campaign resources and combat states."
        items={tokens}
      />

      <ReferenceSection
        title="Hero Icons"
        subtitle="Use these target markers when resolving mission and encounter effects."
        items={heroIcons}
      />

      <ReferenceSection
        title="Statuses"
        subtitle="Persistent effects that can alter a Hero’s turn and survivability."
        items={statuses}
      />
    </div>
  );
}
