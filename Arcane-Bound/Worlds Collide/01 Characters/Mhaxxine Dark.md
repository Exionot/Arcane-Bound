---
type: character
location:
  origin: Rockcore City
  nation:
  city:
  town:
  village:
  poi:
faction:
  active: Blackreign Gang
  Blackreign Gang:
    status: Active
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage:
galleryImage:
posterImage:
  - Arcane-Bound/Archives/In Darkness Final.png
aliases: Mhax
relations:
  - Krystalle Eos
  - Clair Tempest
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Young Adult
**Birthday**: Oct. 23
**Species**: [[Human]]
**Origin**: [[Rockcore City]]
**Hobbies**:
**Nickname/s**: "Mhax"
**Faction/s**: [[Blackreign Gang]]

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