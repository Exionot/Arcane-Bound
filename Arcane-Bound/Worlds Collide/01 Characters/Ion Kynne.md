---
type: character
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
profileImage: ᐳExternal Assets/Ion_Profile2.png
galleryImage:
  - ᐳExternal Assets/Ion_Profile1.png
posterImage:
  - Arcane-Bound/Archives/Canine Adventures Final.png
aliases:
  - Ion
relations:
  - Ted Ursa
  - Mint Evergreen
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: Ion Kynne
**Sex**: Female 
**Age**: Young Adult
**Birthday**: May 24th
**Species**: [[Canis-Hummanoid]]
**Origin**: [[Ohmpalos City]], [[Amphors Kingdom]], [[Southern Lands]], [[Arcaena]]
**Hobbies**:
**Nickname/s**:
**Faction/s**: [[Wandering Traders of Arcaena]]

**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```

---
# **History** 
## Background 
**Ion Kynne** is a [[Canis-Hummanoid]] from [[Ohmpalos City]] of [[Amphors Kingdom]]. She is a skilled [[Elemental Magic#Thundra|thundra]] mage of the [[Wandering Traders of Arcaena]], exploring the great lands of [[Arcaena]], trading valuable items for [[Numia Coins]].

# **Appearance** 
## General Appearance 
A human with dog-like ears and tail. She has a rich brown hair with deep brown and yellow eyes.

# **Personality** 
**Ion** is greatly loyal to those who earned her trust. She consistently completes her tasks without disappointment, and her lively personality often brings smiles to her fellow guild members.

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

[[Ted Ursa|Ted]] is like a big brother to **Ion**, she like hugging him because of his fluffy fur. 

She jokingly called him a "Teddy Bear" one time and the other guild members started to call him "teddy Bear".

# **Other Information** 
## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
LIST 
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link) 
SORT file.name ASC
```

---

# **Gallery** 
## Character Archives Poster
```meta-bind
INPUT[imageListSuggester(optionQuery("Arcane-Bound/Archives"), class(gallery-img)):posterImage]
```

## Other Images
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```