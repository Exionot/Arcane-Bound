---
type: character
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
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

> [!Character]
> **"Oh I love working at Starveil Co.! I get to take care of Vi's tail every now and then; and that's a luxury you can't get from other jobs!"**
> -Rem Orion when asked about her working conditions in Starveil Retrieval Co.


# **Basic Information** 
**Name**: Rem Orion
**Sex**: Female
**Age**: Young Adult
**Birthday**:
**Species**: [[Human]]
**Origin**: [[Astral City]], [[HyperCorp Republic]], [[Synthspire]]
**Hobbies**:
**Nickname/s**:
**Faction/s**:
- [[Starveil Retrieval Co.]] (Managing Director)

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
**Rem Orion** is a human from [[Astral City]] of [[HyperCorp Republic]]. She is the managing director of [[Starveil Retrieval Co.]], representing the company.^[[[Starveil Retrieval Co.]]]

# **Appearance** 
## General Appearance 
**Rem** has a short, red velvet hair with bright red eyes. She wears a black headband and a constellation hair clip.

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
## Starveil Retrieval Co.
> **Full Note:** [[Starveil Retrieval Co.]]

# **Relations**
## Victoria Veloux Canidel
> **Full Note:** [[Victoria Veloux Canidel]]

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