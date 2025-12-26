---
type: system
systemType: magic
status: Commonly Used
---

# **Basic Information**
**Name**: Elemental Magic
**Type**: [[Arcaenian Magic]] Subsystem 
**Origin**: [[Arcaena]]

**Status**: `INPUT[usageStatus][]`
# **Overview** 
**Elemental Magic** is the most dominant subsystem of [[Arcaenian Magic]], majority of magic spells are **Elemental Magic**. It focuses in the control or manipulation of the [[#**Elements**|7 Elements]]. Despite not being limited to one element, major nations of [[Arcaena]] has their own element of specialization.

# **How does it work?**
**Elemental Magic** is casted by aligning the user's mind through the desired element, channeling mana in order to control or manipulate one or more elements. Some may have a natural affinity towards certain elements, and others may have to train to be able to manipulate elements.

# **Elements**
## Hydra
It is the control and manipulation of water. The user is able to summon water from water sources, redirect the flow of water, purify, and extract water from objects.

## Flora

^c09a5b

It is the ability to control plant and wildlife. The user is able to grow plants, manipulate plant cycles, and control living creatures—difficulty increases with size.

### Vitalis

^f32d09

> **Full Note:** [[Healing Magic]]

A subtype of Flora and variant of [[Healing Magic]]. It is the regeneration of plant life. It allows the user to make flowers bloom, and give life to dead plants or leaves.

## Pyra

^9ead57

It is the ability to generate and control heat. The user is able to heat up, burn or melt objects, create flames, and generate explosions.

## Gaia
It is the control and manipulation of the ground. The user is able to manipulate the surrounding terrain and lift up rocks and soil.

## Thundra
It is the ability to control and harness electricity. The user is able create powerful electrical discharges like lightning bolts and static shocks.
### Stellaris 
> **Full Note:** [[Illusion Magic]]

A subtype of Thundra and variant of [[Illusion Magic]]. It is the control of light. The user is able to conceal objects, themselves or create illusions and cast powerful beams of light.

## Glacia
It is the ability to control the cold. The user is able to reach extremely low temperatures, creating ice crystals out of thin air.

## Pneuma
It is the ability to control the wind. The user is able to blow powerful winds, push and lift up objects or themselves for greater mobility.

# **Application** 
**Elemental Magic** can be used in all aspects of life, from combat, support, healing, mobility, and tasks.

# **Variants**

# **Limitations**
## Environmental Limitation
Certain situations can make specific elements harder to use.
## Mind Control 
Users of the element Flora are limited to what living creatures they are able to control. Living creatures with powerful minds are harder to control.

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