---
type: item
itemType: weapon
systemUsed:
  - Solid-Light Energy
galleryImage: 
status: Signature
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Vixen's Claws  |
> | --- | --- |
> |  Type  |  Weapon  |
> |  Owner  |  [[Victoria Veloux Canidel]]  |
> |  Origin   |    |
> |  System  |  [[Solid-Light Energy]]  |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview**
[[Victoria Veloux Canidel]]'s signature weapon, a weapon disguised as a pair of gloves, it houses a pair of claws made up of modified [[Solid-Light Energy]] extracted from one of [[Starveil Retrieval Co.]]'s heist. It can also act as a pair of knuckle dusters when inactive.

# **Appearance**
A pair of black fingerless gloves with blunt metal ridges embedded just above the knuckles(of an open fist). When activated, long, sharp claws made from modified [[Solid-Light Energy]] emerge from the metal ridges, emitting a neon blue glow. It also has protective paddings on the back of the wrist for protection 

# **Mechanism**
## Inactive Mode
When inactive, the glove may seem like any other fashion glove. However, the metal ridges of the gloves have an impact sensors. Whenever [[Victoria Veloux Canidel|Vi]] throws a fast or heavy punch, the holes in the metal ridges trap air inside and when the impact sensors activate, it discharges the air back, creating a powerful knockback effect after the initial punch.

When punches are thrown at an angle rather than flat, the metal ridges are strong enough to act as knuckle dusters.

## Active Mode
The [[Solid-Light Energy|S.L.E.]] claws are activated with specialized gestures and will only deploy whenever the user's fist are fully closed. When activated, long, sharp [[Solid-Light Energy|S.L.E.]] claws emerge from the metal ridges emitting a faint neon blue glow along with a faint hum.

# **History**

# **Systems used** 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(itemUsed, this.file.name)
FLATTEN faction
```

---

# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):profileImage]
```

```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```