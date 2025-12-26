---
type: ability 
abilityType:
systemUsed:
galleryImage:
---

# **Basic Information** 
**Name**:
**Type**:
**Origin**:
**System**:

**Status**: `INPUT[usageStatus][]`

# **Overview**

# **Appearance**

# **Mechanics**

# **Application**

# **History**

# **Systems used** 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(abilityUsed, this.file.name)
FLATTEN faction
```

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```