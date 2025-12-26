---
type: character
location:
 origin: 
 nation: Verdthorne Kingdom
 city: 
 town: 
 village: 
 poi: Vilebloom Forest
faction: 
 active: Blackreign Gang
 Blackreign Gang: 
  status: Active
  rank: 
  alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
posterImage:
aliases:
  - Demon of the Vilebloom Forest
relations:
  - Mhaxxine Dark
  - Rem Orion
---

> This note is about Clair's [[Underworld|Underworldian]] variant. For the [[Arcaena|Arcaenian]] variant, see [[Clair Tempest]].

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```


> [!Character]
> **"Come with me... I can give you anything you want~"**
> -Clair luring a worker to her trap

# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Unknown
**Birthday**:
**Species**: [[Devil]]
**Origin**: [[Underworld]]
**Hobbies**:
**Nickname/s**: "Demon of the [[Vilebloom Forest]]"
**Faction/s**: [[Blackreign Gang]]
**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```
---
# **History** 
![[Clair Tempest#Background]]

# **Appearance** 
## General Appearance 
She has an ash colored hair and black horns. Her eyes have a deep red color with a faint glow. Like all other [[Devil]]s she has long pointy ears and a devil's tail. 

# **Personality** 
She is careless and loves causing chaos withing the kingdoms of [[Arcaena]]. She will captivate residents with different methods to lure them into various situations that can collapse even the most resilient sectors of the kingdom.

She also think highly of herself, often bragging her chaos to other demons.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**

# **Relations**

# **Other Information** 
## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
LIST 
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link) 
SORT file.name ASC
```

---

# **Gallery** 
## Character Archives Poster
```meta-bind
INPUT[imageListSuggester(optionQuery("Arcane-Bound/Archives"), class(gallery-img)):posterImage]
```

## Other Images
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```