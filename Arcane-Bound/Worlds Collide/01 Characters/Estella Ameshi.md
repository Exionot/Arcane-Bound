---
type: character
category:
  - Characters
  - Gen 1 Characters
  - Virken
  - Equus
  - Magic
  - Caster
  - Stakes Running
  - Stakes Runner
  - Arcaena
  - Yushinami City
  - Wandering Traders of Arcaena
location:
 origin: Yushinami City
 nation: Erde Kingdom
 city: Yushinami City
 town: 
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
profileImage:
galleryImage:
posterImage:
aliases:
  - Estella "Still Thunder" Ameshi
  - スティル・サンダー (Still Thunder)
  - Still Thunder
  - Stelle
relations:
  - Ace Wallfield
  - Sora Ameshi
  - Ion Kynne
  - Ted Ursa
  - Victoria Veloux Canidel
manaPresence: Increased
magicAffinity: Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  `=this.file.name`   |
> | --- | --- |
> |   Nickname  |  "Still Thunder" (Race Name)<br>"Stelle" ([[Ion Kynne]])   |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |  July 13th  |
> |   Age  |  Adult   |
> |   Species  |  [[Virken]] (Equus)  |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Yushinami City]], [[Lander Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]   |
> |   Faction/s  |  [[Wandering Traders of Arcaena]]  |
> |   Hobbies  | Jogging<br>Watching stakes races |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

---
# **History** 
## Background 
**`= this.file.name`** is a [[Virken]] from [[Yushinami City]] of [[Erde Kingdom]]. She is a retired [[Stakes Running|Stakes Runner]] who now travels the lands of [[Arcaena]] with the [[Wandering Traders of Arcaena]].

Her parents are [[Ace Wallfield|Ace "Immovable" Wallfield]] (Father) and [[Sora Ameshi|Sora "Thunderstorm" Ameshi]] (Mother).

**`= this.file.name`** was a [[Stakes Running|Standard Stakes Runner]] where she ran race courses without magical intervention. Her debut race was the [[Starter Stakes]] where she managed to win against [[Unknown Grace]] by pulling off a last second lead. She was seen as a "Virken who can define her era" due to her performance during her early career winning five consecutive races after her debut.

However, her career was cut short when she suffered a major leg injury before her first G1 race. The injury was said to take an extended period of time which led to her decision of taking an indefinite hiatus from running.

Shortly after declaring her hiatus, she ran into [[Ion Kynne]] who invited her to join the [[Wandering Traders of Arcaena]]. She accepted [[Ion Kynne|Ion]]'s invitation as a way to move on from Stakes Running and as a chance to explore the lands [[Arcaena]].


## Stakes Record
|  Date   |   Couse   | Stake Name (Grade)              | Place | Track | Distance | 1st Place / Runner Up |
| :-----: | :-------: | -------------------------- | :---: | :----: | :----: | --------------------- |
| 05-2402 | YUSHINAMI | [[Summer Mile Cup]] (G2)   |  1st  |  TURF  | 1600M  |                       |
| 01-2402 | YUSHINAMI | [[New Years Stakes]] (G3)   |  1st  |  TURF  | 1600M  |                       |
| 12-2401 | YUSHINAMI | [[Winter Star Cup]] (G2)   |  1st  |  TURF  | 2200M  |                       |
| 07-2401 | YUSHINAMI | [[Thunder Stakes]] (G3)    |  1st  |  TURF  | 2000M  |                       |
| 04-2401 | YUSHINAMI | [[Spring Stakes]]          |  1st  |  TURF  | 1600M  |                       |
| 01-2401 | YUSHINAMI | [[Starter Stakes]] (Debut) |  1st  |  TURF  | 1600M  | [[Unknown Grace]]     |

# **Appearance**  
## General Appearance 
A human with horse-like ears and tail. She has a short light brown hair with white accents and sky blue eyes.

# **Personality** 
**Estella** is generally what someone would call a "chill friend", she usually just go with what the [[Wandering Traders of Arcaena|guild]] is up to. However, like all [[Virken|Equus Virken]], it is in their nature to have a desire to run.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**

# **Relations**
## Ion Kynne
> **Full Note:** [[Ion Kynne]]

She has been a fan of **Still Thunder** even since her debut at the [[Starter Stakes]]. 

She always tries to put back **Still Thunder** on the track, often asking her to join non-rated races, but **Still Thunder** always lightly declines, insisting on watching rather than competing.

# **Other Information** 
> [!NOTE] Note
> Though not actually based on a real horse, her name is based on JRA's naming conventions.
> Girl is literally an umamusume without the idol part.
> ### Ref
> - Fuji Kiseki (Umamusume: BOANE backstory)
> 
> Her surname "Ameshi" is the combination of "ame" (rain) and "arashi" (storm) in Japanese
> Her race name in katakana is: スティル・サンダー (sutiru・sandā)

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