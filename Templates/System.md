---
type: system
systemType: 
---

# **Basic Information**
**Name**: 
**Type**: 
**Origin**: 

**Status**: `INPUT[usageStatus][]`

# **Overview** 

# **How does it work?**

# **Application** 

# **Variants**

# **Limitations**

# **History** 

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(systemUsed, this.file.name)
FLATTEN faction
```

# **Used in** 
## Skills / Abilities 
```dataview
TABLE abilityType as "Type" WHERE type = "ability" AND contains(systemUsed, this.file.name)
```
## Items 
```dataview
TABLE itemType as "Type" WHERE type = "item" AND contains(systemUsed, this.file.name)
```