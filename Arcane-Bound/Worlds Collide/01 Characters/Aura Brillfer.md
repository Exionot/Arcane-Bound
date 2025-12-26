---
type: character
location:
  nation:
    - NeoTech Union
  region: 
  city:
    - Fluxpoint City
    - Shatterpoint City
  town: 
  village: 
  poi: Aura's Apartment
  origin: Shatterpoint City
faction:
  active: 
  Protection Of Local Livelihood:
    status: Former
    rank: Commander
    alias: Agent AR-04
systemUsed:
  - 
abilityUsed:
  - 
itemUsed:
  - 
galleryImage: 
aliases:
  - Agent AR-04
posterImage:
  - Arcane-Bound/Archives/Golden Aura Final.png
relations:
  - Mint Evergreen
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: `= this.file.name`
**Sex**: Female
**Age**: Young Adult
**Birthday**:
**Species**: [[Feline-Humanoid]]
**Origin**: [[Shatterpoint City]], [[NeoTech Union]], [[Synthspire]]
**Hobbies**:
**Nickname/s**: "Agent AR-04"
**Faction/s**: [[Protection Of Local Livelihood]] (Former)
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
**Aura** is a [[Feline-Humanoid]] born from [[Shatterpoint City]]. She was part of the [[Protection Of Local Livelihood]]  in [[Fluxpoint City]] before rebelling against the government. She is currently living in an [[Aura's Apartment|Apartment]] in [[Fluxpoint City]].

## Young Adolescence 
%%She was attacked and cornered by gang members trying to take her tech? weapon? She was then saved by an unnamed person who introduced herself as a police officer%%

# **Appearance** 
## General Appearance 
A human with ears and tail like a feline. She has long blonde hair with gold accents.

## Outfits
### [[Protection Of Local Livelihood|P.O.L.L.]] Uniform
She wears a long white coat with [[Protection Of Local Livelihood]]'s logo in the front.
### Casual
She wears a white crop top and white shorts.

# **Personality** 
## Before The Convergence
**Aura** is seen as a stone cold commander that is willing to do anything to find criminals and give justice to the victims of their crimes. She is brave, unafraid of corrupt entities on higher positions.^[[[The Convergence]]]

**Aura** did not believe in magic, she believed that everything always had a scientific explanation.

## After meeting Mint
**Aura** slowly opened up after meeting [[Mint Evergreen|Mint]], showing [[Mint Evergreen|Mint]] her vulnerable side while also being more affectionate and loving towards [[Mint Evergreen|Mint]].

**Aura** first saw magic with her own eyes during her first confrontation with [[Mint Evergreen|Mint]], changing her beliefs in science entirely.^[[[Narrative - Confrontation]]]

# **Skills and Abilities** 
## Tech mastery
**Aura** is very knowledgeable when it comes to technology, she is able intercept radio signals and access surveillance systems with ease. She is also capable of creating her own weaponry.
## Expertise in combat
Coming from government military, she is able to protect herself in tense situations.
%%
## Feline instincts
She has a 6th sense that allow her to detect danger and dodge incoming attacks.
%%
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Protection Of Local Livelihood
> **Full Note:** [[Protection Of Local Livelihood]]

**Aura** was a commanding officer for the [[Protection Of Local Livelihood]].

Agent AR-04 (Ace Responder - 04); She was one of the more reputable commanding officers of the [[Protection Of Local Livelihood]]. With her exceptional skills in combat, people often look up to her, admiring her skill in taking down criminals in a swift manner. Colleague or not, she is not afraid to point out illegal activities in her workspace, even if that person is more powerful.

She left the [[Protection Of Local Livelihood]] after discovering that [[Neo-Technology Corporation]] was secretly experimenting with captured arcaenian people in order to develop powerful weapons capable of using magic.^[[[Document - Integration of Magic to NeoTech Weapons]]]

# **Relations**
## Mint Evergreen
> **Full Note:** [[Mint Evergreen]]

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