---
type: system
systemType: currency 
status: Commonly Used
---

# **Basic Information**
**Name**: Synthspire Units
**Type**: Currency System 
**Origin**: [[Terran World Bank Authority]]

**Status**: `INPUT[usageStatus][]`

> This note is the overall knowledge about **Synthspire Units**. For the documentation, see [[Document - Synthspire Units Currency Documentation]].

# **Overview** 
**Synthspire Units** are the currency used throughout the planet of [[Terra]]. It was declared by the [[Terran World Bank Authority]] to be used as the only currency to be used in [[Terra]].^[[[Document - Synthspire Units Currency Documentation]]]

# **Variants**
**Synthspire Units** appear in different forms:
![[Document - Synthspire Units Currency Documentation#^9c2952]]

Tabs are small rectangular metal coins, created with different materials to represent different values.

Banknotes are large rectangular strips of polymer with different colors to differentiate values.

# **Limitations**
Counterfeiting, destruction or defacement of **Synthspire Units** are illegal and can result in lawsuits.^[[[Document - Synthspire Units Currency Documentation]]]

# **History** 

%%
# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(systemUsed, this.file.name)
FLATTEN faction
```
%%

# **Used in** 
## Skills / Abilities 
```dataview
TABLE abilityType as "Type" WHERE type = "ability" AND contains(systemUsed, this.file.name)
```
## Items 
```dataview
TABLE itemType as "Type" WHERE type = "item" AND contains(systemUsed, this.file.name)
```