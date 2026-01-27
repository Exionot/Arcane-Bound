---
type: location
locationType:
  - nation
location: Veridian Sector
system: technology
galleryImage: 
aliases:
  - Chloros
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().areaImage ? "![[" + dv.current().areaImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Republic of Chloros   |
> | --- | --- |
> |  Type  |  Nation  |
> |  Area Code  |  STSP-03  |
> |  Nation Code  |  RCH  |
> |  Leader/s  |    |
> |  Capital  |  [[Rockcore City]] (old)<br>[[Newslate City]] (new)  |
> |  Location   |  [[Veridian Sector]], [[Synthspire]], [[Terra]]  |

# **Description** 
**Chloros** is one of [[Synthspire]]'s major nations, located in [[Veridian Sector]], it is the nation that once sought a solution civilization's waste, now haunted by a fatal mistake, the synthesis of the material [[Void Crystal|Crystalline Ether-207]] started spreading beyond control, turning everything in its path into [[Void Crystal]] and infecting residents with [[Null's Disease]], leading to the fall of its old capital, [[Rockcore City]]. 

Majority of the population of **Chloros** have migrated to [[Lushborne Region]], away from the [[Void Crystal|corruption]]. With the development of viable suppressants capable of slowing down [[Null's Disease]], the [[Chloros Administration]] has industrialized and monetized the extraction of [[Void Crystal]] with the establishment of [[Void Operation & Investigation Department]], allowing public and private entities to extract [[Void Crystal]] resources in the [[NULL Region]]. ^d8893f

# **Areas**
## NULL Region (RCH-01)
> **Full Note:** [[NULL Region]]

## Summer Peninsula (RCH-02) 
> **Full Note:** [[Summer Peninsula]]

![[Summer Peninsula#^81c2e5]]

## (RCH-03)
> **Full Note:** [[RCH-03]]

## Lushborne Region (RCH-04) 
> **Full Note:** [[Lushborne Region]]

## Dryrock Canyons (RCH-05)
> **Full Note:** [[Dryrock Region]]

![[Dryrock Region#^457598]]

# **Subareas** 
## NULL Region
- [[Rockcore City]]
- [[Great Divider]]
## Summer Peninsula 
- [[Lightland Port]]
- [[Sunrise City]]
- [[Whiteshore Resort]]
## RCH-03
## Lushborne Region
- [[Newslate City]]
- [[Evemark City]]
## Dryrock Region
- [[Dryrock Canyons]]

# **History** 

# **Groups/Entities**
## Blackreign Gang
> **Full Note:** [[Blackreign Gang]]

![[Blackreign Gang#^0b6b9a]]

## Voidrock Operation & Investigation Department (VOID)
> **Full Note:** [[Void Operation & Investigation Department]]

![[Void Operation & Investigation Department#^07c61f]]

## Voidrock Special Operation Division 9
> **Full Note:** [[Void Special Operation Division 9]]

![[Void Special Operation Division 9#^4a3fcf]]

# **Characters** 
```dataviewjs
const name = dv.current().file.name;

const pages = dv.pages().where(p => { 
	for(let key in p.location){ 
		if (key === "active") continue;
		const locationValue = p.location[key]
		if (Array.isArray(locationValue) && locationValue.includes(name)){ 
			return true; 
		} 
		if (locationValue === name) return true;
	} 
	return false;
});

dv.table(
["Name", "Origin", "Faction"],
pages.map(p => [p.file.link, p.location.origin, p.faction.active])
)
```

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```