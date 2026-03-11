---
type: character
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
posterImage:
  - Arcane-Bound/Archives/Golden Aura Final.png
relations:
  - Mint Evergreen
profileImage: ᐳExternal Assets/Golden Aura Blank.png
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
> |   Origin  |  [[Shatterpoint City]], [[NeoTech Union]], [[Synthspire]]   |
> |   Faction/s  |  [[Protection Of Local Livelihood]] (Former)  |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: [[Aura Brillfer Narratives Manuscript]]

---
# **History** 
## Background 
**Aura** is a [[Virken]] born from [[Shatterpoint City]]. She was part of the [[Protection Of Local Livelihood]]  in [[Fluxpoint City]] before rebelling against the government. She is currently living in an [[Aura's Apartment|Apartment]] in [[Fluxpoint City]].

## Young Adolescence 
%%She was attacked and cornered by gang members trying to take her tech? weapon? She was then saved by an unnamed person who introduced herself as a police officer%%

# **Appearance** 
## General Appearance 
A human with ears and tail like a feline. She has long blonde hair with gold accents.

## Outfits
### P.O.L.L. Uniform
She wears a long white coat with [[Protection Of Local Livelihood]]'s logo in the front.
### Casual
She wears a white crop top and white shorts.

# **Personality** 
## Before The Convergence
**Aura** is seen as a stone cold commander that is willing to do anything to find criminals and give justice to the victims of their crimes. She is brave, unafraid of corrupt entities on higher positions.

**Aura** did not believe in magic, she believed that everything always had a scientific explanation.

## After meeting Mint
**Aura** slowly opened up after meeting [[Mint Evergreen|Mint]], showing [[Mint Evergreen|Mint]] her vulnerable side while also being more affectionate and loving towards [[Mint Evergreen|Mint]].

**Aura** first saw magic with her own eyes during her first confrontation with [[Mint Evergreen|Mint]], changing her beliefs in science entirely.^[[[Narrative - Confrontation]]]

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

Agent AR-04 (Ace Responder - 04); She was one of the more reputable commanding officers of the [[Protection Of Local Livelihood]]. With her exceptional skills in combat, people often look up to her, admiring her skill in taking down criminals in a swift manner. Colleague or not, she is not afraid to point out illegal activities in her workspace, even if that person is more powerful.

She left the [[Protection Of Local Livelihood]] after discovering that [[Neo-Technology Corporation]] was secretly experimenting with captured arcaenian people in order to develop powerful weapons capable of using magic.^[[[Document - Integration of Magic to NeoTech Weapons]]]

# **Relations**
## Mint Evergreen
> **Full Note:** [[Mint Evergreen]]

# **Other Information** 
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