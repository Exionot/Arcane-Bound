---
type: character
location:
  origin: Evemark City
  nation: Republic of Chloros
  city: Evemark City
  town: 
  village: 
  poi: 
faction:
  active: Void Special Operation Division 9
  Void Special Operation Division 9:
    status: Active
    rank: Special Operator
    alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage: 
galleryImage:  
posterImage:
  - Arcane-Bound/Archives/Crystal Clear Final.png
aliases:
relations:
  - Mhaxxine Dark
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

> [!Character] 
> **"My left arm? What about it? I'm right-handed so I don't really use it casually."**
> -Krystalle Eos when asked about her left arm


# **Basic Information** 
**Name**: Krystalle Eos
**Sex**: Female
**Age**:
**Birthday**:
**Species**: [[Vulpes-Humanoid]]
**Origin**: [[Evemark City]], [[Lushborne Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]
**Hobbies**:
**Nickname/s**:
**Faction/s**: [[Void Special Operation Division 9]]

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
**Krystalle Eos** is a [[Vulpes-Humanoid]] from [[Evemark City]] of the [[Republic of Chloros]]. She is a member of the [[Void Special Operation Division 9]] under the [[Void Operation & Investigation Department]].

# **Appearance** 
## General Appearance 
A human with fox-like ears and tail. She has light pink hair with bright pink accents and magenta eyes. Small [[Void Crystal]] emerges from the left side of her face and she wears a mechanical gauntlet on her left arm, covering the crystals on her arm.

# **Personality** 
**Krystalle** is energetic but professional, she might look careless however, she knows when be serious.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Void Special Operation Division 9
> **Full Note:** [[Void Special Operation Division 9]]

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