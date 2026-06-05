---
type: character
category:
  - Characters
  - Characters with Thread
  - Gen 0 Characters
  - Virken
  - Feline
  - Caster
  - Fluxpoint City
  - Relayton Complex
  - Protection Of Local Livelihood
  - Ace Responders
location:
  nation:
    - NeoTech Union
  region:
  city:
    - Fluxpoint City
    - Shatterpoint City
  town:
  village:
  poi: Aura's Apartment
  origin: Shatterpoint City
faction:
  active:
  Protection Of Local Livelihood:
    status: Former
    rank: Commander
    alias: Agent AR-04
systemUsed:
  - 
abilityUsed:
  - 
itemUsed:
  - 
galleryImage: []
aliases:
  - Agent AR-04
  - Aura
posterImage:
  - Arcane-Bound/Archives/Golden Aura Final.png
  - Arcane-Bound/Archives/Mint n' Gold Final.png
relations:
  - Mint Evergreen
  - Renze Luna
  - Ruby Rossilia
profileImage: ᐳExternal Assets/Golden Aura Blank.png
manaPresence: None
magicAffinity: Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Aura Brillfer   |
> | --- | --- |
> |   Nickname  |  "Agent AR-04" (POLL Code name)   |
> |   Sex  |  Female   |
> |   Height  |  173cm (including ears)   |
> |   Birthday  |     |
> |   Age  |  Young Adult   |
> |   Species  |  [[Virken]] (Feline)   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Shatterpoint City]], [[NeoTech Union]], [[Synthspire]]   |
> |   Faction/s  |  [[Protection Of Local Livelihood]] (Former)  |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: [[Aura Brillfer Narratives Manuscript]]

---
# **History** 
## Background 
**Aura Brillfer** is a [[Virken]] born from [[Shatterpoint City]]. She was once part of [[Protection Of Local Livelihood]] with the code name "AR-04". She is an expert when it comes to technology and high stakes combat, often utilizing specialized equipment she herself made. **Aura** left [[Protection Of Local Livelihood|P.O.L.L.]] in the late period of [[The Convergence]] after learning about [[Neo-Technology Corporation|NeoTech Corp.]]'s illegal imprisonment and experimentation on the Arcaenians affected by The Convergence. She is currently living in [[Aura's Apartment|Relayton Complex, Room 204]] at [[Amphere Square]]of [[Fluxpoint City]].


## Young Adolescence 
%%She was attacked and cornered by gang members trying to take her tech? weapon? She was then saved by an unnamed person who introduced herself as a police officer%%

# **Appearance** 
## General Appearance 
A human with ears and tail like a feline. She has long blonde hair with gold-like accents.

## Outfits
### P.O.L.L. Uniform
She wears a long white coat with [[Protection Of Local Livelihood]]'s logo in the front.
### Casual
She wears a white crop top and white shorts.

# **Personality** 
## Before The Convergence
**Aura** is seen as a serious commander that is willing to do anything to track down criminals and give justice to the victims of their crimes. She is brave, unafraid of corrupt entities on higher positions.

**Aura** did not believe in magic, she always believed that everything had a scientific explanation.

## Meeting Mint Evergreen
**Aura** met [[Mint Evergreen]] during the early period of [[The Convergence]], she took her in seeking for answers about the phenomenon.^[[[Defying orders]]] Her first confrontation with Mint changed her worldview after becoming a firsthand witness to [[Arcaenian Magic]].^[[[Confrontation]]]

**Aura** became more open as she spent more time with Mint, allowing her to ease up in the comforts of her own home, showing Mint an unexpected vulnerable and affectionate side of hers.  


# **Skills and Abilities** 
## Tech mastery
**Aura** is very knowledgeable when it comes to technology, she is able intercept radio signals and access surveillance systems with ease. She is also capable of creating her own weaponry.
## Expertise in combat
Coming from government military, she is able to protect herself in tense situations.

```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Protection Of Local Livelihood
> **Full Note:** [[Protection Of Local Livelihood]]

**Aura** was a commanding officer for the [[Protection Of Local Livelihood]].

Agent AR-04 (Ace Responder - 04); She was one of the more reputable commanding officers of the [[Protection Of Local Livelihood]]. With her exceptional skills in technology and combat, people often look up to her, admiring her skill in taking down criminals in a swift manner. Colleague or not, she is not afraid to point out illegal activities in her workspace, even if that person is more powerful.

She left the [[Protection Of Local Livelihood]] in the late period of [[The Convergence]] after discovering that [[Neo-Technology Corporation]] was illegally detaining and experimenting with captured Arcaenian people in order to develop powerful weapons capable of using magic.^[[[Document - Integration of Magic to NeoTech Weapons]]]

# **Relations**
## Mint Evergreen
> **Full Note:** [[Mint Evergreen]]

The most important girl in **Aura**'s life, her lover. 


# **Other Information** 

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 22, 2021** - [Original Post](https://x.com/Exionot/status/1451539341566570500?s=20)
> ## Changes over the years
> - Her name if I remember was "Gold" but it was changed to "Au" the chemical symbol for gold, then changed to "Aura" because it was a bit too short. She was also given the surname "Brillfer" in this project which is a mix of translated words meaning "shine" (It was French I think).
> - Some design changed especially in the outfit and hair, she also used to have a choker and a double hairpin though colors remained fairly the same.


## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Character Thread"
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
```

---

# **Gallery** 
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

# **Navigation**
```dataviewjs
const baseFolder = "Arcane-Bound/Worlds Collide/01 Characters";
const pages = dv.pages(`"${baseFolder}"`);

// group by faction.active or null
let groups = pages.groupBy(p => p.faction?.active ?? null);

groups = groups.array().sort((a, b) => {
  // null (no faction) goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

for (const group of groups) {
  // header: show "No Faction" if null
  //dv.header(2, group.key ?? "No Faction");
  
  const title = group.key ?? "No Faction";

  // Build datacards block
  let lines = [];
  if (group.key === null) {
	  lines.push(`> [!navigation]+ ${title}`);
  }else{
	  lines.push(`> [!navigation]+ ${"[[" + title + "]]"}`);
  }
  
  lines.push(">```datacards");
  lines.push(`>TABLE profileImage`);
  lines.push(`>FROM "${baseFolder}"`);

  // Use `faction.active = null` if group key is null
  if (group.key === null) {
    lines.push(">WHERE faction.active = null");
  } else {
    lines.push(`>WHERE contains("${group.key}", faction.active)`);
  }

  lines.push(">SORT file.name ASC");
  lines.push(">");
  lines.push(">//Settings");
  lines.push(">preset: square");
 // lines.push("imageProperty: cover");
  //lines.push("imageFit: contain");
  //lines.push("imageHeight: 10px");
  lines.push(">columns: 5");
  lines.push(">fontSize: smallest");
  lines.push(">```");

  dv.el("div", lines.join("\n"));
}
```

---

**Categories:** `$= dv.span(dv.current().category ? dv.current().category.map(p => "[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]").join(" | ") : "")`