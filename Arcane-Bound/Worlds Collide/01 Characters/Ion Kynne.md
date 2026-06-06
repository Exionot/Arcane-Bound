---
type: character
category:
  - Characters
  - Characters with Thread
  - Gen 0 Characters
  - Virken
  - Canis
  - Magic
  - Thundra
  - Caster
  - Stakes Running
  - Arcaena
  - Ohmpalos City
  - Wandering Traders of Arcaena
location:
  origin: Ohmpalos City
  nation: Amphors Kingdom
  city: Ohmpalos City
  town:
  village:
  poi:
faction:
  active: Wandering Traders of Arcaena
  Wandering Traders of Arcaena:
    status: Active
    rank:
    alias:
systemUsed:
  - Arcaenian Magic
  - Elemental Magic
  - Mana
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/Canine Adventures Blank.png
galleryImage:
  - ᐳExternal Assets/Ion_Profile1.png
posterImage:
  - Arcane-Bound/Archives/Canine Adventures Final.png
aliases:
  - Ion
relations:
  - Ted Ursa
  - Mint Evergreen
  - Estella Ameshi
manaPresence: Increased
magicAffinity: Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Ion Kynne   |
> | --- | --- |
> |   Nickname  |     |
> |   Sex  |  Female   |
> |   Height  |  166cm (173cm including ears)  |
> |   Birthday  |  May 24th   |
> |   Age  |  Young Adult   |
> |   Species  |  [[Virken]] (Canis)   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Ohmpalos City]], [[Amphors Kingdom]], [[Southern Lands]], [[Arcaena]]   |
> |   Faction/s  |  [[Wandering Traders of Arcaena]]   |
> |   Hobbies  |  Watching Stakes Races   |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n") : "")`  |

> **Character Thread**: 

---
# **History** 
## Background 
**Ion Kynne** is a [[Virken]] from [[Ohmpalos City]] of [[Amphors Kingdom]]. She is a skilled [[Elemental Magic#Thundra|Thundra]] mage of the [[Wandering Traders of Arcaena]], exploring the great lands of [[Arcaena]], trading valuable items for [[Numia Coins]].

**Ion** is a fan is [[Stakes Running]] and will always try to watch nearby races. She is also a fan of the retired [[Stakes Running|Stakes Runner]] now friend [[Estella Ameshi]]. After learning about her unexpected retirement, **Ion** jokingly recruited [[Estella Ameshi]] to the [[Wandering Traders of Arcaena]] which she surprisingly agreed to.

# **Appearance** 
## General Appearance 
A human with dog-like ears and tail. She has a rich brown hair with deep brown and yellow eyes. Her right ear is always seen drooped down and is only seen raised up when she focuses on her hearing.

# **Personality** 
**Ion** is greatly loyal to those who earned her trust. She consistently completes her tasks without disappointment, and her lively personality often brings smiles to her fellow guild members. She also loves her head being petted, her tail wags uncontrollably when done so, especially when it's someone she's close to.

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
## Ted Ursa 
> **Full Note:** [[Ted Ursa]]

[[Ted Ursa|Ted]] is like a big brother to **Ion**, she likes hugging him because of his fluffy fur. 

He used to be the one making the decisions when they were still starting their own group of wanderers in the [[Wandering Traders of Arcaena]].

He was jokingly called a "Teddy Bear" by **Ion** one time and the other guild members also started to call him "Teddy Bear".

## Still Thunder
> **Full Note:** [[Estella Ameshi]]

**Ion** has always been a fan of hers since her debut race at [[Yushinami City]], it was also the first race that **Ion** has watched, which is why [[Estella Ameshi]] means a lot to **Ion**.

She was jokingly invited by **Ion** after crossing paths with her. She unexpectedly agreed to **Ion's** invitation which led to her joining the guild. 

She always declines **Ion's** requests to join non-rated races, responding with "watching is always better". 

# **Other Information** 

> [!NOTE] Meta History
> ## First Appearance / Creation
> **April 7, 2021** - [Original Post](https://x.com/Exionot/status/1442035632465854467?s=20)
> ## Changes over the years
> - Was redrawn on September 26, 2021 with a major overhaul in design.
> - Was given the surname "Kynne" on this project
> 
> She was the true first Original Character 

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