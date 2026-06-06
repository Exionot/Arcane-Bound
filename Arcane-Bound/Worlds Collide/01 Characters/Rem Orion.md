---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Human
  - Non-Caster
  - Synthspire
  - Astral City
  - Starveil Retrieval Co.
location:
 nation: HyperCorp Republic
 city: Astral City
 town: 
 village: 
 poi: 
 origin: Astral City
faction:
 active: Starveil Retrieval Co.
 Starveil Retrieval Co.:
  status: Active
  rank: Managing Director 
  alias: 
systemUsed: 
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
aliases:
relations:
  - Victoria Veloux Canidel
  - Clair Tempest
manaPresence: None
magicAffinity: Non-Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Rem Orion   |
> | --- | --- |
> |   Nickname  |     |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  Young Adult   |
> |   Species  |  [[Human]]   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Astral City]], [[NOVA Region]], [[HyperCorp Republic]], [[Thunderdrop Sector]], [[Synthspire]]   |
> |   Faction/s  |  [[Starveil Retrieval Co.]] (Managing Director)   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

> [!Character]
> **"Oh I love working at Starveil Co.! I get to take care of Vi's tail every now and then; and that's a luxury you can't get from other jobs!"**
> -Rem Orion when asked about her working conditions in Starveil Retrieval Co.

---
# **History** 
## Background 
**Rem Orion** is a human from [[Astral City]] of [[HyperCorp Republic]]. She is the managing director of [[Starveil Retrieval Co.]], representing the company.^[[[Starveil Retrieval Co.]]]

She is one of the first members of [[Starveil Retrieval Co.|Starveil Retrieval]]. 

# **Appearance** 
## General Appearance 
**Rem** has a short, red velvet hair with bright red eyes. She wears a black headband.

# **Personality** 
Despite being the managing director of [[Starveil Retrieval Co.|Starveil Retrieval]], **Rem** acts more like an assistant rather than a leader. She is very caring of her colleagues, often making sure they are not overworked or stressed, especially to their leader, [[Victoria Veloux Canidel]]. She also likes fluffy things.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Starveil Retrieval Co.
> **Full Note:** [[Starveil Retrieval Co.]]

# **Relations**
## Victoria Veloux Canidel
> **Full Note:** [[Victoria Veloux Canidel]]

She is the leader of [[Starveil Retrieval Co.]]. Despite seeing it as a weird obsession, she still allows **Rem** to groom her tail.

# **Other Information** 

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 24, 2021** - [Original Post](https://x.com/Exionot/status/1452509034641199119?s=20)
> ## Changes over the years
> - Also remained fairly dormant until the redraw on October 26, 2025
> - Was named "Rem" because "Red" and "Rem" sound the same and was given the surname "Orion" on this project.
> - Design remained similar besides the change in outfit (still subject to change)
> 
> She was also create as a partner for Clair.

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
![[Navigation]]

---

## Categories
`$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`