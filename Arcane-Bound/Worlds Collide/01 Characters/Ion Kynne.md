---
type: character
location:
  origin: Ohmpalos City
  nation: Amphors Kingdom
  city: Ohmpalos City
  town: 
  village: 
  poi: 
faction:
  active: Wandering Traders of Arcaena
  Wandering Traders of Arcaena:
    status: Active
    rank: 
    alias: 
systemUsed:
  - Arcaenian Magic
  - Elemental Magic
  - Mana
abilityUsed: 
itemUsed: 
profileImage: ᐳExternal Assets/Ion_Profile2.png
galleryImage:
  - ᐳExternal Assets/Ion_Profile1.png
posterImage:
  - Arcane-Bound/Archives/Canine Adventures Final.png
aliases:
  - Ion
relations:
  - Ted Ursa
  - Mint Evergreen
  - Still Thunder
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: Ion Kynne
**Sex**: Female 
**Age**: Young Adult
**Birthday**: May 24th
**Species**: [[Virken]] (Canis)
**Origin**: [[Ohmpalos City]], [[Amphors Kingdom]], [[Southern Lands]], [[Arcaena]]
**Hobbies**: Watching [[Stakes Running|Stake Races]]
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
**Ion Kynne** is a [[Virken]] from [[Ohmpalos City]] of [[Amphors Kingdom]]. She is a skilled [[Elemental Magic#Thundra|Thundra]] mage of the [[Wandering Traders of Arcaena]], exploring the great lands of [[Arcaena]], trading valuable items for [[Numia Coins]].

**Ion** is a fan is [[Stakes Running]] and will always try to watch nearby races. She is also a fan of the retired [[Stakes Running|Stakes Runner]] now friend [[Still Thunder]]. After learning about her unexpected retirement, **Ion** jokingly recruited [[Still Thunder]] to the [[Wandering Traders of Arcaena]] which she surprisingly agreed to.

# **Appearance** 
## General Appearance 
A human with dog-like ears and tail. She has a rich brown hair with deep brown and yellow eyes. Her right ear is always seen drooped down and is only seen raised up when she focuses on her hearing.

# **Personality** 
**Ion** is greatly loyal to those who earned her trust. She consistently completes her tasks without disappointment, and her lively personality often brings smiles to her fellow guild members. She also loves her head being petted, her tail wags uncontrollably when done so, especially when it's someone she's close to.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Wandering Traders of Arcaena 
> **Full Note:** [[Wandering Traders of Arcaena]]

# **Relations**
## Ted Ursa 
> **Full Note:** [[Ted Ursa]]

[[Ted Ursa|Ted]] is like a big brother to **Ion**, she likes hugging him because of his fluffy fur. 

He used to be the one making the decisions when they were still starting their own group of wanderers in the [[Wandering Traders of Arcaena]].

He was jokingly called a "Teddy Bear" by **Ion** one time and the other guild members also started to call him "Teddy Bear".

## Still Thunder
> **Full Note:** [[Still Thunder]]

**Ion** has always been a fan of hers since her debut race at [[Yushinami City]], it was also the first race that **Ion** has watched, which is why [[Still Thunder]] means a lot to **Ion**.

She was jokingly invited by **Ion** after crossing paths with her. She unexpectedly agreed to **Ion's** invitation which led to her joining the guild. 

She always declines **Ion's** requests to join non-rated races, responding with "watching is always better". 

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