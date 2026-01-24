---
type: item
itemType: weapon
systemUsed: Arcaenian Magic
galleryImage: []
status: Signature
profileImage: ᐳExternal Assets/Mint_Staff_Full.jpg
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Evergreen  |
> | --- | --- |
> |  Type  |  Weapon  |
> |  Owner  |  [[Mint Evergreen]]  |
> |  Origin   |  [[Bauserst City]]   |
> |  System  |  [[Arcaenian Magic]]  |
> |  Status  |  `INPUT[usageStatus][]`  |


# **Overview**
**Mint's Staff** is the main weapon of [[Mint Evergreen]], she uses it to cast magic spells. She acquired this staff when she started learning [[Elemental Magic]] in [[Bauserst City]].

**Mint's Staff** aims to serve two purpose: to work as a mage staff, and to be usable as a melee weapon similar to a lance.

The staff, with some magical assistance, can stand upright with it's flat metal base.

# **Appearance**
The head of the staff has a silver crescent design with a long straight pointed tip. It has a large floating green gem with golden supports in the middle of the crescent. A green [[Arcaenian Band]] is wrapped around the rear end of the crescent head. It's handle is made up of a rare wood species called [[Silver-skinned Iron Wood]] known for it's great durability, the rear end of the staff has a flat metal base. Some light gold accents are also seen across the entire staff.

Faint wear can also be seen in the staff up close, but from afar, it's almost as if it's brand new.

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