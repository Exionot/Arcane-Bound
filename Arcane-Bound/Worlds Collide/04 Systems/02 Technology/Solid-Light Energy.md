---
type: system
systemType: technology
status: Restricted Use
aliases:
  - S.L.E.
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Solid-Light Energy  |
> | --- | --- |
> |  Nickname  |  "S.L.E."  |
> |  Type  |  Material  |
> |  Origin   |  [[Lightspeed City]]   |
> |  System  |  [[Light Technology]]  |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview** 
**Solid-Light Energy**, also known as **S.L.E.**, is a solid material made up of visible light, it is strong enough to cut through most materials and block advanced projectiles.

Class-III, or military grade **S.L.E.**s are only authorized to be used within the nation of [[HyperCorp Republic]], usage outside of the nation is strictly prohibited and can lead to lawsuits.

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

# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):profileImage]
```

 ```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```