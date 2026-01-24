---
type: system
systemType: currency
status: Commonly Used
---

# **Basic Information**
**Name**: Numia Coins
**Type**: Currency 
**Origin**: [[Arcaena]]

**Status**: `INPUT[usageStatus][]`

> This note is the overall knowledge about **Numia Coins**. For the declaration, see [[Document - Decree of The Numia Coins]].


# **Overview** 
**Numia Coins** are the currency used in all major nations of [[Arcaena]]. It was declared by [[King Fulgor Ignia II]] of the [[Ignia Kingdom]].

# **Application** 
**Numia Coins** are used in all forms of trades and transactions involving money.^[[[Document - Decree of The Numia Coins#^7c8182|Document - Decree of The Numia Coins]]]

# **Variants**
**Numia Coins** have three different variants, all with different values.
![[Document - Decree of The Numia Coins#^2422da]]

# **Limitations**
Counterfeiting of **Numia Coins** are strictly forbidden by the decree and is punishable by death.^[[[Document - Decree of The Numia Coins#^ddc145|Document - Decree of The Numia Coins]]]

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