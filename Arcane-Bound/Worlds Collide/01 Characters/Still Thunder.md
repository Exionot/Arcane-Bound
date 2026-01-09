---
type: character
location:
 origin: Yushinami City
 nation: Erder Kingdom
 city: Yushinami City
 town: 
 village: 
 poi: 
faction: 
 active: Wandering Traders of Arcaena
 Wandering Traders of Arcaena: 
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
  - スティル・サンダー (Still Thunder)
relations:
  - Ion Kynne
  - Ted Ursa
  - Victoria Veloux Canidel
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Adult
**Birthday**:
**Species**: [[Virken]] (Equus)
**Origin**: [[Yushinami City]], [[Lander Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]
**Hobbies**:
**Nickname/s**:
**Faction/s**: [[Wandering Traders of Arcaena]]
**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```
---
# **History** 
## Background 
**`= this.file.name`** is a [[Virken]] from [[Yushinami City]] of [[Erde Kingdom]]. She is a retired [[Stakes Running|Stakes Runner]] who now travels the lands of [[Arcaena]] with the [[Wandering Traders of Arcaena]].

**`= this.file.name`** was a [[Stakes Running|Standard Stakes Runner]] where she ran race courses without magical intervention. She was seen as a "Virken who can define her era" due to her performance during her early career winning 5 consecutive races after her debut.

However, her career was cut short when she suffered a major leg injury before her first G1 race. The injury was said to take an extended period of time which led to her decision to retire early and later join the [[Wandering Traders of Arcaena]] thanks to [[Ion Kynne|Ion]]'s invitation.

She accepted [[Ion Kynne|Ion]]'s invitation as a way to keeping moving and as a chance to explore [[Arcaena]].

# **Appearance**  
## General Appearance 

# **Personality** 
**Still Thunder** is generally what someone would call a "chill friend", she usually just go with what the [[Wandering Traders of Arcaena|guild]] is up to. However, like all [[Virken|Equus Virken]], it is in their nature to have a desire to run.

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
## Ion Kynne
> **Full Note:** [[Ion Kynne]]

She always tries to put back **Still Thunder** on the track, often asking her to join non-rated races, but **Still Thunder** always lightly declines, insisting on watching rather than competing.

# **Other Information** 
> [!NOTE] Note
> Though not actually based on a real horse, her name is based on JRA's naming conventions.
> Girl is literally an umamusume without the idol part.
> ### Ref
> - Fuji Kiseki (Umamusume: BOANE backstory)
> 
> Her name in katakana is: スティル・サンダー (sutiru・sandā)

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