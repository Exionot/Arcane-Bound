---
type: location
locationType:
  - nation
location: Thunderdrop Sector
system: technology
galleryImage: 
aliases:
---

# **Basic Information** 
**Name**: HyperCorp Republic
**Location**: [[Thunderdrop Sector]], [[Synthspire]], [[Terra]]
**Capital**: [[Lightspeed City]]
**Holder of Power**: [[Harnessing Yottawatt Power & Energy Research Corporation|HYPER Corporation]]

# **Description** 
**HyperCorp Republic** is one of the major nations of [[Synthspire]]. It is under the governance of [[Harnessing Yottawatt Power & Energy Research Corporation|HYPER Corporation]].

**HyperCorp Republic** is known for the invention of [[Solid-Light Energy]] and other [[Light Technology]]^[[[Harnessing Yottawatt Power & Energy Research Corporation]]], providing innovative cutting-edge technology to the continent of [[Synthspire]]. However, the use of military-grade [[Solid-Light Energy]] outside of the nation is strictly forbidden.^[[[Solid-Light Energy]]] ^f8f0de

# **Areas**
## Lumen Region (HCR-01)
> **Full Note:** [[Lumen Region]]

## Wattout Region (HCR-02)
> **Full Note:** [[Wattout Region]]

## NOVA Region (HCR-03)
> **Full Note:** [[NOVA Region]]

# **Subareas** 
## Lumen Region
- [[Lightspeed City]]
- [[PhotonForge City]]

## Wattout Region
- [[Chern City]]
- [[Nuclear Forest]]

## NOVA Region
- [[Astral City]]
- [[Orbital Access Transit Station]]

# **History** 

# **Groups/Entities**
## Harnessing Yottawatt Power & Energy Research Corporation
> **Full Note:** [[Harnessing Yottawatt Power & Energy Research Corporation]]

![[Harnessing Yottawatt Power & Energy Research Corporation#^0af673]]

## Starveil Retrieval Co.
> **Full Note:** [[Starveil Retrieval Co.]]

![[Starveil Retrieval Co.#^1e015c]]

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