---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Virken
  - Ursus
  - Beast
  - Magic
  - Swordsman
  - Caster
  - Arcaena
  - Lushfall Town
  - Wandering Traders of Arcaena
location:
  origin: Lushfall Town
  nation: Erde Kingdom
  city:
  town: Lushfall Town
  village:
  poi:
faction:
  active: Wandering Traders of Arcaena
  Wandering Traders of Arcaena:
    status: Active
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/Ted_Profile.png
galleryImage:
  - ᐳExternal Assets/Ted_Profile.png
posterImage:
aliases:
  - Ted
  - Teddy Bear
relations:
  - Ion Kynne
manaPresence: Increased
magicAffinity: Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Ted Ursa   |
> | --- | --- |
> |   Nickname  |  "Teddy Bear" ([[Ion Kynne]])   |
> |   Sex  |  Male   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  Adult   |
> |   Species  |  [[Virken | Virken Beast]] (Ursus)  |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Lushfall Town]], [[Lushfield Jungle]], [[Ceres Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]   |
> |   Faction/s  |  [[Wandering Traders of Arcaena]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

---
# **History** 
## Background 
**Ted Ursa** is a [[Virken | Virken Beast]]  from [[Lushfall Town]] in [[Erde Kingdom]]. He is a strong swordsman of the [[Wandering Traders of Arcaena]] guild, he wields a giant sword that only really strong individuals alike can carry. 

His connection with [[Ion Kynne]] stretch back to their childhood, they have a long standing connection even before joining the [[Wandering Traders of Arcaena]]. He was the one that made the decisions when they started to create their own group of [[Wandering Traders of Arcaena|Wanderers]], as the group slowly found it's footing, [[Ion Kynne]] became the leader of the group.

# **Appearance** 
## General Appearance 
A bear with grey fur and dark grey eyes. He wear a dark grey scarf and a white coat.

# **Personality** 
**Ted** is often seen a scary beast by many but behind his tough exterior, is a soft and caring personality.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Wandering Traders of Arcaena
> **Full Note:** [[Wandering Traders of Arcaena]]

# **Relations**
## Ion Kynne
> **Full Note:** [[Ion Kynne]]

**Ted** and [[Ion Kynne|Ion]] are often seen as close as siblings, their friendship extend way back to their childhood. He is often hugged by [[Ion Kynne|Ion]] that she, and other guild members, started to call him "Teddy Bear".

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
![[Character Navigation]]

---

## Categories
`$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`