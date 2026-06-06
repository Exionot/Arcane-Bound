---
type: character
category:
  - Characters
  - Characters with Thread
  - Gen 0 Characters
  - Virken
  - Feline
  - Magic
  - Flora
  - Vitalis
  - Caster
  - Evergreen
  - Convergence
  - Arcaena
  - Lenben Village
  - Synthspire
  - Fluxpoint City
  - Academy of Healers
  - Guild of Arcane Healers
location:
  nation: Verdthorne Kingdom
  city:
  town:
  village: Lenben Village
  poi:
  origin: Lenben Village
faction:
  active:
  Guild of Arcane Healers:
    status: Alumni
    rank: Master Healer
    alias:
systemUsed:
  - Mana
  - Arcaenian Magic
  - Healing Magic
  - Elemental Magic
abilityUsed:
  - Transient Bolt
itemUsed:
  - Arcaenian Band
  - Evergreen
profileImage: ᐳExternal Assets/Felling Relaxed Blank.png
galleryImage:
  - ᐳExternal Assets/Mint_Arcaena_Weapon_Drawn.png
  - ᐳExternal Assets/Mint_Synthspire_Glasses.png
  - ᐳExternal Assets/Mint_Arcaena_Outfit.png
posterImage:
  - Arcane-Bound/Archives/Staying Minty Final.png
  - Arcane-Bound/Archives/Arcane Origins Final.png
  - Arcane-Bound/Archives/Feeling Relaxed Final.png
  - Arcane-Bound/Archives/Mint n' Gold Final.png
aliases:
  - Mint
relations:
  - Aura Brillfer
  - Ion Kynne
manaPresence: Increased
magicAffinity: Caster
---

# Mint Evergreen

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> ---
>
> #### Profile
>
> | Information | Value |
> | --- | --- |
> | Name | Mint Evergreen |
> | Alias | Mint |
> | Sex | Female |
> | Height | 164cm (including ears) |
> | Age | Young Adult |
> | Species | [[Virken]] (Feline) |
> | Mana Presence | `=this.manaPresence` |
> | Magic Affinity | `=this.magicAffinity` |
> | Origin | [[Evergreen Household]], [[Lenben Village]], [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]] |
> | Factions | [[Guild of Arcane Healers]] (Former)<br>[[Wandering Traders of Arcaena]] (Honorary Member) |
> | Hobbies | Gardening |
> | Relations | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("<br>") : "")` |

> [!character]
> **"Your bed is so fluffy! I want to stay in it forever!"**
>
> *Mint Evergreen on Aura's bed*

> [!note]
> ## Character Thread
>
> [[Mint Evergreen Narratives Manuscript]]

---

# Overview

**Mint Evergreen** is a [[Virken]] mage from [[Lenben Village]]. A former healer of the [[Guild of Arcane Healers]], she left her traditional path to pursue a deeper understanding of magic across [[Arcaena]].

Known for her mastery of healing magic, exceptional mana control, and extensive magical knowledge, she later became one of the most traveled independent mages of her generation.

Following [[The Convergence]], Mint was transported to [[Fluxpoint City]] where she met [[Aura Brillfer]], fundamentally changing the course of her life.

---

# Biography

## Early Childhood

Mint was raised in [[Lenben Village]] where her parents discouraged her from learning offensive magic. Instead, she was enrolled in the [[Academy of Healers]] and later joined the [[Guild of Arcane Healers]].

Despite specializing in healing magic, Mint approached her studies with the dedication of a combat mage, developing exceptional mana control and casting speed.

## Guild Years

After spending years helping villagers and serving within the guild, Mint eventually rose to become one of its finest healers.

Although successful, she desired to learn magic beyond healing disciplines.

## Travels Across Arcaena

Determined to reach her full potential, Mint traveled throughout [[Arcaena]] collecting tomes, artifacts, and magical knowledge.

During this period she frequently interacted with [[Ion Kynne]] and the [[Wandering Traders of Arcaena]], though she repeatedly declined formal membership.

## During The Convergence

Mint was transported to [[Fluxpoint City]], where she encountered [[Aura Brillfer]].

To avoid capture by [[Protection Of Local Livelihood|P.O.L.L.]] agents searching for Arcaenians, she was sheltered by Aura.

---

# Appearance

## General Appearance

A feline-humanoid with mint-green hair, emerald eyes, feline ears, and a tail. She wears three ear piercings, two on the left ear and one on the right.

## Arcaena Outfit

A large braid, light-blue poncho with gold accents, black undershirt, and decorative gold accessories.

## Synthspire Outfit

A casual jacket-and-shorts outfit provided by [[Aura Brillfer]]. Her hair was dyed to help conceal her identity.

---

# Personality

Mint is kind, helpful, and disciplined. While capable of serious focus, she is usually playful and relaxed.

She enjoys teaching children, discovering new magic, and exploring unfamiliar places. Her curiosity frequently drives her adventures.

---

# Abilities

## Healing Mastery

Capable of healing severe wounds within seconds. Rumors suggest she can regenerate lost limbs.

## Magical Expertise

Years of travel and study have granted her access to a large collection of magical techniques.

## Mana Concealment

Able to suppress her magical signature to avoid detection.

## Feline Instincts

Possesses enhanced danger perception and reaction speed common among feline Virkens.

## Tail Mobility

Can use her tail similarly to an additional hand.

```dataview
TABLE abilityType as "Type"
WHERE contains(this.abilityUsed, file.name)
```

---

# Equipment

```dataview
TABLE itemType as "Type"
WHERE contains(this.itemUsed, file.name)
```

---

# Affiliations

## Guild of Arcane Healers

> **Full Note:** [[Guild of Arcane Healers]]

Mint spent much of her youth within the guild and graduated as one of its most talented healers.

---

# Relationships

## Aura Brillfer

> **Full Note:** [[Aura Brillfer]]

The person who eventually became more important to Mint than magic itself.

## Ion Kynne

> **Full Note:** [[Ion Kynne]]

A longtime acquaintance who repeatedly attempted to recruit her into the Wanderers.

---

# Systems

```dataview
TABLE systemType as "Type"
WHERE contains(this.systemUsed, file.name)
```

---

# Narratives

```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Character Thread"
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
```

---

# Gallery

## Character Archives Poster

```meta-bind
INPUT[imageListSuggester(optionQuery("Arcane-Bound/Archives"), class(gallery-img)):posterImage]
```

## Character Profile Image

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

## Other Images

```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```

---

# Categories

```dataviewjs
const categories = dv.current().category ?? [];

dv.paragraph(
  categories
    .map(c => `[[${c}]]`)
    .join(" • ")
);
```

---

# Meta Information

> [!note] Meta History
>
> ## First Appearance / Creation
> October 24, 2021
>
> ## Changes Over The Years
> - Originally named Mint Leafgreen
> - Previously used a choker
> - Multiple design revisions over time
>
> Created as Aura's counterpart from the beginning.

---

# Navigation

```dataviewjs
const baseFolder = "Arcane-Bound/Worlds Collide/01 Characters";
const pages = dv.pages(`"${baseFolder}"`);

let groups = pages.groupBy(p => p.faction?.active ?? null);

groups = groups.array().sort((a, b) => {
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

for (const group of groups) {
  const title = group.key ?? "No Faction";

  let lines = [];

  if (group.key === null) {
    lines.push(`> [!navigation]+ ${title}`);
  } else {
    lines.push(`> [!navigation]+ ${"[[" + title + "]]"}`);
  }

  lines.push(">```datacards");
  lines.push(">TABLE profileImage");
  lines.push(`>FROM "${baseFolder}"`);

  if (group.key === null) {
    lines.push(">WHERE faction.active = null");
  } else {
    lines.push(`>WHERE contains("${group.key}", faction.active)`);
  }

  lines.push(">SORT file.name ASC");
  lines.push(">");
  lines.push(">//Settings");
  lines.push(">preset: square");
  lines.push(">columns: 5");
  lines.push(">fontSize: smallest");
  lines.push(">```");

  dv.el("div", lines.join("\n"));
}
```
