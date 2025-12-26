---
type: ability
abilityType: spell
systemUsed:
  - Arcaenian Magic
  - Mana
galleryImage: 
status: Rarely Used
---

# **Basic Information** 
**Name**: Transient Bolt
**Type**: [[Arcaenian Magic#Elemental Magic|Elemental Magic]]
**Origin**: [[Arcaena]]
**System**: [[Arcaenian Magic]]

**Status**: `INPUT[usageStatus][]`

# **Overview**
**Transient Bolt** is an elemental spell that releases a series of lightning bolts emerges from the ground to the skies, hitting anyone in its path.

# **Appearance**
When used normally, lightning bolts casted with this spell appear blue. However, when casted with more mana, the lightning bolts begins with a deep purple color, transitioning to a a deep blue as it reaches the sky.

# **Mechanics**
When casted, the spell creates a disruption of air particles within a desired area. This disruption results in a powerful upward discharge of electrical energy.

# **Application**
## Offensive Style Magic 
> **Full Note:** [[Arcaenian Magic#**Styles**|Magic Styles]]

# **History**

# **Systems used** 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(abilityUsed, this.file.name)
FLATTEN faction
```

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```