---
type: system
systemType: technology
status: Restricted Use
---

# **Basic Information**
**Name**: Solid-Light Energy
**Type**: Material 
**Origin**: [[Lightspeed City]]

**Status**: `INPUT[usageStatus][]`

# **Overview** 
**Solid-Light Energy**, also known as **SLE**, is a solid material made up of visible light, it is strong enough to cut through most materials and block advanced projectiles.

Class-III, or military grade **SLE**s are only authorized to be used within the nation of [[HyperCorp Republic]], usage outside of the nation is strictly prohibited and can lead to lawsuits.

# **How does it work?**
**Solid-Light Energy** works by projecting light with a solidifying emitter to control and shape the light a into specific shape.

# **Classifications**
## Class-I (Public Use)
## Class-II (Commercial Grade) 
## Class-III (Military Grade) 
## Unrated (Modified/Experimental)

# **Variants**
## Glass
## Phase-Through

# **Application** 
## Weapons
## Defense 
## Holographic Display 

# **Limitations**
- It cannot be used without its housing 
- It cannot be launched as a projectile 
- Class I and II are hardware limited to prevent use in weapons 

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