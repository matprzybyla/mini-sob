import Link from "next/link";
import styles from "./page.module.css";

type ReferenceItem = {
  name: string;
  description: string;
};

const sideBagTokens: ReferenceItem[] = [
  { name: "Bandages", description: "Heal D6 Wounds." },
  {
    name: "Dynamite / Bomb",
    description:
      "Attack token. Throw/bounce at Range Strength+3. Models in the target and adjacent spaces take D6 Wounds, ignoring Defense.",
  },
  {
    name: "Dark Stone Shiv",
    description: "Performer only. Free Attack that deals D6 Wounds to an adjacent Enemy, ignoring Defense.",
  },
  { name: "Herbs", description: "Discard to Heal 2D6 Wounds." },
  {
    name: "Flash",
    description: "All Enemies are -2 Initiative until the end of the Turn.",
  },
  {
    name: "Shatter",
    description:
      "Attack token. Throw/bounce like Dynamite. Affected models take D3 Wounds, ignoring Defense, and gain Stunned.",
  },
  { name: "Anti Rad", description: "Remove D6 Corruption Points." },
  {
    name: "Holy Water",
    description:
      "Free Attack. Range 5. Deals D8 Wounds ignoring Defense and Armor to a single Undead or Demon Enemy, or heal 2D6 Wounds if Keyword Holy.",
  },
  {
    name: "Potion",
    description: "Add +2 to one basic Skill (Lore, Agility, etc.) until end of Turn.",
  },
  { name: "Lantern Oil", description: "Re-roll one die on a Hold Back the Darkness roll." },
  { name: "Fine Cigar", description: "Gain Armor 3+ until the end of the Turn." },
  { name: "Nectar", description: "Recover D3 Grit." },
  {
    name: "Magik Tonic",
    description:
      "Recover 1 Grit, and until end of Turn you may re-roll dice even if already re-rolled. Limit 1 per Turn.",
  },
  { name: "Tea", description: "Heal D6 Wounds/Sanity in any mix or recover 1 Ability Token. Limit 1 per Turn." },
  { name: "Void Sake", description: "Take 1 Corruption Hit and remove D3 Status Effect markers." },
  { name: "Tonic", description: "Recover 1 Grit." },
  { name: "Whiskey", description: "Heal D6 Sanity Damage." },
  { name: "Tequila", description: "Heal 2D6 Sanity Damage." },
];

const conditionMarkers: ReferenceItem[] = [
  {
    name: "Poison",
    description: "At start of Activation roll D6. On 1-2 take 1 Wound (ignoring Defense/Armor). On 6+ remove marker.",
  },
  {
    name: "Potent Poison",
    description: "At start of Activation roll D6. On 1-3 take that many Wounds (ignoring Defense/Armor). On 6+ remove marker.",
  },
  {
    name: "Burning",
    description: "At start of Activation remove 1 Burning marker and take 2 Wounds, ignoring Defense.",
  },
  {
    name: "Bleeding",
    description: "-3 Health. Hero may spend 1 Grit to remove a marker. Undead are immune.",
  },
  {
    name: "Stunned",
    description: "If model has 1+ marker, it is -1 Defense. At start of Activation roll D6; on 4+ remove 1 marker.",
  },
  {
    name: "Shaken",
    description: "-1 Max Grit and -1 Max Ability Token per marker (minimum 1). Spend 6 Move at once to remove 1 marker.",
  },
  {
    name: "Webbed",
    description: "-1 Move per marker (min 0), +1 Damage from Enemy Attacks. Strength 5+ tests remove markers.",
  },
  {
    name: "Ensnared",
    description: "Cannot Move and -1 Defense. At start of Activation make Strength 5+ test to remove. Limit 1 marker.",
  },
  {
    name: "Void Venom",
    description: "-1 To Hit rolls. Natural 6+ still crit. Discard all Void Venom at end of your next Activation.",
  },
  {
    name: "Death Mark",
    description: "All Enemies do +2 Damage to you on their Attacks. Limit 1 per Hero.",
  },
  {
    name: "Noise",
    description:
      "Gain from moving 3+ spaces, attacking/casting, free attacks, guns, side bag use, and skill/scavenge rolls. Remove D6 at start of Activation; remove extra D6 when explosives go off.",
  },
  {
    name: "Stone",
    description:
      "-1 Move (minimum 1) and -1 Initiative per marker. If Initiative reaches 0, model is turned to stone. Hero may spend 1 Grit to remove D3 markers.",
  },
];

const enemyAbilities: ReferenceItem[] = [
  {
    name: "Assault",
    description:
      "Enemy targets and moves as normal for Melee, then makes a free Ranged Attack at end of move using listed ranged profile.",
  },
  {
    name: "Formation",
    description:
      "Enemies are placed in every space (no checkerboard gaps), prefer ending adjacent to allies, and benefit while connected in chains of 3+ models.",
  },
  {
    name: "Shootout",
    description:
      "Enemies prioritize Ranged combat using Shootout markers: ambush far from heroes, retreat from adjacency on 4+, then target and fire after all movement.",
  },
  {
    name: "Snap Fire",
    description:
      "If no adjacent Hero at start of activation, make free ranged shot first, then charge and attack in Melee as normal; may make hit-and-run free move after.",
  },
];

function iconLabel(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function ReferenceGrid({ items }: { items: ReferenceItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article className={styles.card} key={item.name}>
          <div className={styles.icon} aria-hidden="true">
            {iconLabel(item.name)}
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ReferencePage() {
  return (
    <main className={styles.page}>
      <header className="subpageTopRow">
        <div className="subpageHeaderMain">
          <p className={styles.eyebrow}>Trail Handbook</p>
          <h2 className="subpageHeaderTitle">Reference</h2>
        </div>
        <Link className="subpageBackLink" href="/" aria-label="Back to Camp" title="Back to Camp" />
      </header>

      <section className={styles.section}>
        <h2>Side Bag Tokens</h2>
        <ReferenceGrid items={sideBagTokens} />
      </section>

      <section className={styles.section}>
        <h2>Condition Markers</h2>
        <ReferenceGrid items={conditionMarkers} />
      </section>

      <section className={styles.section}>
        <h2>Enemy Abilities</h2>
        <ReferenceGrid items={enemyAbilities} />
      </section>
    </main>
  );
}
