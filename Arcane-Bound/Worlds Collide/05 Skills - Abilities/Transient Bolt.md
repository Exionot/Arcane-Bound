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
**Type**: [[Elemental Magic]]
**Origin**: [[Arcaena]]
**System**: [[Arcaenian Magic]], [[Mana]]
**Status**: `INPUT[usageStatus][]`

# **Overview**
**Transient Bolt** is a [[Elemental Magic#Thundra|Thundra]] spell that releases a series of lightning bolts emerging from the ground to the sky, electrocuting anyone in its path. A great understanding of [[Mana]] control is needed when using this spell as using too much mana can lead to the release of lethal electrical current.

# **Appearance**
When casted normally, lightning bolts that emerge from the ground with this spell can appear white or blue. However, when casted with more mana, the lightning bolts turn into a deep purple color, transitioning to a a deep blue as it reaches the sky.

# **Mechanics**
When casted, the spell creates a disruption of air particles within a desired area of effect. This disruption results in a powerful upward discharge of electrical energy.

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