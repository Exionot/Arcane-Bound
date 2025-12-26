---
type: system
systemType: magic
status: Commonly Used
---

# **Basic Information**
**Name**: Arcaenian Magic
**Type**: Magic
**Origin**: [[Arcaena]]

**Status**: `INPUT[usageStatus][]` 

# **Overview** 
**Arcaenian Magic** are the magic systems used by the people of [[Arcaena|Arcaena]].

# **How does it work?**
**Arcaenian Magic** works by channeling [[Mana]] and converting it into a spell through the user's mind, chants, or gestures. Everytime a spell is casted, [[Mana]] is released proportional to the spell. Even the smallest spells can be detected by powerful mages.

# **Subsystems**
## Elemental Magic
> **Full Note:** [[Elemental Magic]]

## Healing Magic
> **Full Note:** [[Healing Magic]]

## Summoning Magic 
## Illusion Magic 
> **Full Note:** [[Illusion Magic]]

## Enchanting Magic
## Curse Magic
## Divine Magic

# **Application** 
## Offensive 
## Defensive 
## Utility
## Healing 
## Summoning 
## Illusions 
## Enchantments 
## Curses


# **Practices**
## Arcana
**Arcana** is the modern practice of arcaenian magic harnessed with the use of an [[Arcaenian Band]]. This practice is much more efficient giving more powerful spells for smaller mana consumption but requires a deep understanding of mana control.

## Astraxia
**Astraxia** is an an ancient practice of arcaenian magic where a person is able to cast spells without the use of a staff. Magic is channelled through the body of the user releasing mana as a spell.
### Athenia
**Athenia** is a subsystem of astraxia practiced by priests. Instead of channelling magic through their bodies, [[Mana]] is transferred from the user into the book harnessing the powers of the goddess through her sacred writings. They are capable of giving divine protection and healing.

# **Limitations**

# **History** 
## Usage of magic in swordistry
[[Bauserst City]] once used arcana in the swordistry of their military during the [[Goblin War]] of the [[Era of The Goblins|Goblin Era]].^[[[Bauserst City]]]^[[[Era of The Goblins]]]


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