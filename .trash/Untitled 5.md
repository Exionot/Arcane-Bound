---
type: character
nation: 
region: 
city: 
town: 
village: 
poi: 
origin: 
faction: 
statusMap:
  "": 
rankMap:
  "": 
aliasMap:
  "": 
systemUsed: []
abilityUsed: 
itemUsed: 
aliases: 
image:
profileImage: 
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: 
**Sex**:
**Age**:
**Birthday**:
**Species**: 
**Origin**: 
**Hobbies**:
**Nickname/s**:
**Faction/s**:

**Relation/s**: 

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

# **Items and Equipments**
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

---

# **Gallery** 
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):image]
```