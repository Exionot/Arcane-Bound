---
type: character
location:
 origin: Yushinami City
 nation: Erder Kingdom
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
relations:
  - Ion Kynne
  - Ted Ursa
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Adult
**Birthday**:
**Species**: [[Virken]] (Equus)
**Origin**: [[Yushinami City]], [[Lander Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]
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
**`= this.file.name`** is a [[Virken]] from [[Yushinami City]] of [[Erde Kingdom]]. She is a retired [[Stakes Runner]] who now travels the lands of [[Arcaena]] with the [[Wandering Traders of Arcaena]].

# **Appearance**  
## General Appearance 

# **Personality** 

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

# **Other Information** 

> [!NOTE] Note
> Though not actually based on a real horse, her name is based on JRA's naming conventions.

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