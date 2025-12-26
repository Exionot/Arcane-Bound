---
type: character
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
    status: active
    rank: 
    alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage: ᐳExternal Assets/Ted_Profile.png
galleryImage: 
posterImage:
aliases:
  - Ted
  - Teddy Bear
relations:
  - Ion Kynne
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: `= this.file.name`
**Sex**: Male
**Age**: Adult
**Birthday**:
**Species**: [[Ursus-Beast]] 
**Origin**: [[Lushfall Town]], [[Lushfield Jungle]], [[Ceres Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]
**Hobbies**:
**Nickname/s**: "Teddy Bear" ([[Ion Kynne]])
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
**Ted Ursa** is a [[Ursus-Beast]] from [[Lushfall Town]] in [[Erde Kingdom]].He is a strong swordsman of the [[Wandering Traders of Arcaena]] guild, he wields a giant sword that only really strong individuals alike can carry. 

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