---
type: item
itemType: material
systemUsed:
  - Pyro Technology
galleryImage: 
status: Obsolete
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: Surgespark
**Type**: Organic Mineral
**Origin**: [[Surgespark Mines]]
**System**: [[Pyro Technology]]

**Status**: `INPUT[usageStatus][]`, Commonly Used *(Only in [[Region's Edge]])*

# **Overview**
**Surgespark** is an organic mineral found deep underground in areas like [[CinderScorch Sector|CinderScorch Region]]. Once used as an alternative to coal, **Surgespark** provided greater heat per mass compared to other fuel sources. **Surgespark** is often mistaken as bright burning coal due to its orange color.

Its flammable nature led to a new field in technology called [[Pyro Technology]], giving way to the inventions of highly flammable fuels like [[Pyrathyl Ether]], and [[Blastplate Alloy]]—a heat conductive metal alloy capable of withstanding high temperatures.

# **Variants**
## Raw Surgespark

## Refined Surgespark

# **Appearance**
## General Appearance 
Its surface is a deep orange color with a faint orange glow underneath. Its orange color often causes it to be mistaken as hot burning coal.
## Raw Surgespark
When mined, raw **Surgespark** similarly resembles raw coal—jagged, chunky and uneven.
## Refined Surgespark
After going through refining processes, it loses its rough edges giving it a smoother look.

# **Behavior**
## Raw Surgespark
When ignited, instead of burning conventionally, raw **Surgespark** produces hot sparks capable of easily igniting flammable materials.

# **Application**
## Pyro Technology 
> **Full Note:** [[Pyro Technology]]

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