---
type: item
itemType: weapon
systemUsed: Arcaenian Magic
galleryImage:
  - ᐳExternal Assets/Untitled40_20250804214228.png
status: Signature
profileImage: ᐳExternal Assets/Mint_Staff_Full.jpg
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: `= this.file.name`
**Type**: Weapon
**Origin**: [[Mint Evergreen]]
**System**: [[Arcaenian Magic]]

**Status**: `INPUT[usageStatus][]`

# **Overview**
**Mint's Staff** is the main weapon of [[Mint Evergreen]], she uses it to cast magic spells. She acquired this staff when she started learning [[Elemental Magic]] in [[Bauserst City]].

# **Appearance**
The staff has a silver crescent design with a pointed tip, a green jewel in the middle, and a long wooden handle. It also has gold accents and a green [[Arcaenian Band]] wrapped in its head.

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