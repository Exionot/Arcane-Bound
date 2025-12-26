---
type: character
location:
  origin: Unknown
  nation: Verdthorne Kingdom
  city:
  town:
  village:
  poi: Vilebloom Forest
faction:
  active:
  FactionName:
    status:
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage:
galleryImage:
posterImage:
  - Arcane-Bound/Archives/Devil's Charm Final.png
aliases:
  - Demon of the Vilebloom Forest
relations:
  - Mhaxxine Dark
  - Rem Orion
---

> This note is about Clair's [[Arcaena|Arcaenian]] variant. For the [[Underworld|Underworldian]] variant, see [[Underworldian - Clair]].

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```


> [!Character] 
> **"Please go... This forest is dangerous with people like me."**
> -Clair guiding a lost traveler


# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Unknown
**Birthday**: 
**Species**: [[Devil]]
**Origin**: [[Underworld]]
**Hobbies**:
**Nickname/s**: "Demon of the [[Vilebloom Forest]]"
**Faction/s**:
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
**`= this.file.name`** is a [[Devil]] from the underworld of [[Arcaena]]. She's a natural [[Elemental Magic#^9ead57|Pyra]] mage. 

She often causes chaos within the different kingdoms of [[Arcaena]] during her early years. However, that careless behavior caused her right horn to be shot by an wind-charged arrow while she was in the [[Aquarin Kingdom]]. This incident caused her horn to break which also caused a conflict with her psyche.

She was then exiled from the [[Underworld]] after this incident where she then decided to reside in [[Vilebloom Forest]] of [[Verdthorne Kingdom]]. 

After her exile in the [[Underworld]] the started experiencing conflicts with her identity and mentality which led her to her decision to start a new identity in [[Vilebloom Forest]]. She started practicing [[Elemental Magic#^c09a5b|Flora]] and [[Elemental Magic#^f32d09|Vitalis]] magic. It is rumored that she is the reason why [[Vilebloom Forest]] shifted from a lush green forest to an almost bright blue forest.

Due to her [[Devil]] lineage, residents that have seen her in the forest have spread rumors of her being dangerous giving her the name 'Demon of the [[Vilebloom Forest]]'. It also caused people to traverse into the [[Vilebloom Forest]] less because of these rumors.
# **Appearance** 
## General Appearance 
She has cyan hair with gold-like highlights and black horns. Her eyes are a brighter shade of cyan. Like all other [[Devil]]s she has long pointy ears and a devil's tail. 

Her right horn is broken due to an incident during her time in the [[Underworld]].

# **Personality** 
**Clair** is shy and often reserved, nobody really knows about her personalities due her isolation in [[Vilebloom Forest]]. However, whenever there are lost travelers in the forest, which are mostly children, she helps and points the way to exit the forest and whenever she gets actual lost travelers they almost always try to fight her off if not pass out from fear, so she just immobilize them with a binding spell and drag them away from the forest.

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

> [!NOTE] Meta Note
> ### Character Traits
>  - #### Split Persona Architect
>  She's a split between her devil side and human side because of her broken horn. Her devil side sometimes takes over and does devil things, but her usual self is sweet and often shies away due to her unpredictable swings 
>  *(Ref: Cheval Grand | Still in Love)*
>  ### Magic 
>  - #### [[Elemental Magic#^c09a5b|Flora Magic]] 
>  She has a binding spell that wraps the target with silk-like threads that are as strong as steel
>  *(Ref: Silksong)* 

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