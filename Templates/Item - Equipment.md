---
type: item
itemType:
systemUsed:
galleryImage:
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
> |  Owner  |    |
> |  Origin   |    |
> |  System  |    |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview**

# **Appearance**

# **Mechanism**

# **Application**

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