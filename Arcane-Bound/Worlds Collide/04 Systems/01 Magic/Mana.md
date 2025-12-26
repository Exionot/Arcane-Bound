---
type: system
systemType: magic
status: Commonly Used
---

# **Basic Information**
**Name**: Mana
**Type**: Magic
**Origin**: [[Arcaena]]

**Status**: `INPUT[usageStatus][]` 

# **Overview** 
**Mana** is the most important part of [[Arcaenian Magic]], without it no spell will ever be casted.

# **How does it work?**
**Mana** works like an aura around a being, it cannot be seen but it can be felt or detected. The more mana a being has, the bigger their mana aura is.

# **Application** 
## Spellcasting 
**Mana** is used to cast spells by converting its aura-like form into either energy or matter, depending on the nature of the spell being cast.
## Mana Control
**Mana** can be controlled through sheer focus and discipline. Mana control can be used in different ways:
### Spell casting
Mana control is used to control the strength of the spell being casted.
### Mana concealment 
Mana control can be used to hide or shrink a being's mana aura, making it nearly invisible to the average mage.

# **Increasing mana**

# **Variants**

# **Limitations**

# **History** 
## Earliest signs of mana usage
**Mana** was once used without spells, ancient mages unleashed pure raw mana directly towards their enemies.
{Insert note link about ancient mana utilization}

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