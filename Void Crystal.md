---
type: system
systemType: 
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |    |
> | --- | --- |
> |  Type  |    |
> |  Origin   |    |
> |  System  |    |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview** 

# **How does it work?**

# **Application** 

# **Variants**

# **Limitations**

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

# Additional Information

> [!summary] Initial Idea 
> - A crystal like material that slowly corrupts an individual in proximity. It corrupts by slowly replacing the individual's cell with crystal shards.
> - It corrupts organic material faster than inorganic ones.
> - Individuals with high concentration of crystals will be diagnosed with "Null's disease". As the corruption worsen, crystal shards emerge from the individual's body. 
> - Infected (but not corrupted) individuals will be marked with the "Black Tag" by the government.
> - Meant to be the Synthspire version of the Arcaenian Crystal. On occasion it glows the color of the Arcaenian Crystal. 
> - Scientifically named as "Crystalline Ether-207"/"CE-207" then later nicknamed as "Void Crystals" due to it's dark color that resembled looking into an endless abyss.
> ## References
> **Zenless Zone Zero** - Ether
> **Arknights & Arknights: Endfield** - Originium


# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):profileImage]
```

 ```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```