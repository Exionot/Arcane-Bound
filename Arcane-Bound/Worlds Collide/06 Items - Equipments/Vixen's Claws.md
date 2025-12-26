---
type: item
itemType: weapon
systemUsed:
  - Solid-Light Energy
galleryImage: 
status: Signature
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: Vixen's Claws
**Type**: Weapon
**Origin**: [[Victoria Veloux Canidel]]
**System**: [[Solid-Light Energy]]

**Status**: `INPUT[usageStatus][]` 

# **Overview**
[[Victoria Veloux Canidel]]'s fingerless gloves that doubles as both claws and knuckle dusters.

# **Appearance**
A pair of black fingerless gloves with blunt metal ridges embedded in-between the knuckles. When activated, long, sharp claws made from modified [[Solid-Light Energy]] emerge from the metal ridges, emitting a neon purple glow. It also has protective paddings on the back of the wrist for protection 

# **Mechanism**
## Inactive Mode
When inactive, the gloves act like any other gloves. However, the metal ridges are equipped with impact sensors that activates whenever [[Victoria Veloux Canidel|Vi]] throws a punch, releasing a powerful knockback.
## Active Mode
The weapon can be activated with specific gestures to prevent misactivation. When activated, long, sharp, [[Solid-Light Energy]] claws forms from the metal ridges, giving a neon purple glow.

# **Application**
## Close-Quarters Combat 
### Inactive Mode
The metal ridges in-between the knuckles allow the gloves to be used as knuckle dusters. Also, the impact sensors activates between punches, hitting the target a second time.
### Active Mode
The claws allows [[Victoria Veloux Canidel|Vi]] to slash through most obstacles with ease.
## Stealth 
Having the claws within the gloves allows [[Victoria Veloux Canidel|Vi]] to essentially bring her weapon anywhere.

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
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```