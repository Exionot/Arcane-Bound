---
type: character
location:
  origin: Lushfall Town
  nation: Erde Kingdom
  city: 
  town: Lushfall Town
  village: 
  poi: 
faction:
  active: Wandering Traders of Arcaena
  Wandering Traders of Arcaena:
    status: active
    rank: 
    alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage: ᐳExternal Assets/Ted_Profile.png
galleryImage: 
posterImage:
aliases:
  - Ted
  - Teddy Bear
relations:
  - Ion Kynne
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: `= this.file.name`
**Sex**: Male
**Age**: Adult
**Birthday**:
**Species**: [[Virken | Virken Beast]] (Ursus) 
**Origin**: [[Lushfall Town]], [[Lushfield Jungle]], [[Ceres Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]
**Hobbies**:
**Nickname/s**: "Teddy Bear" ([[Ion Kynne]])
**Faction/s**: [[Wandering Traders of Arcaena]]

**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```

**Character Thread**: 

---
# **History** 
## Background 
**Ted Ursa** is a [[Virken | Virken Beast]]  from [[Lushfall Town]] in [[Erde Kingdom]]. He is a strong swordsman of the [[Wandering Traders of Arcaena]] guild, he wields a giant sword that only really strong individuals alike can carry. 

His connection with [[Ion Kynne]] stretch back to their childhood, they have a long standing connection even before joining the [[Wandering Traders of Arcaena]]. He was the one that made the decisions when they started to create their own group of [[Wandering Traders of Arcaena|Wanderers]], as the group slowly found it's footing, [[Ion Kynne]] became the leader of the group.

# **Appearance** 
## General Appearance 
A bear with grey fur and dark grey eyes. He wear a dark grey scarf and a white coat.

# **Personality** 
**Ted** is often seen a scary beast by many but behind his tough exterior, is a soft and caring personality.

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
## Ion Kynne
> **Full Note:** [[Ion Kynne]]

**Ted** and [[Ion Kynne|Ion]] are often seen as close as siblings, their friendship extend way back to their childhood. He is often hugged by [[Ion Kynne|Ion]] that she, and other guild members, started to call him "Teddy Bear".

# **Other Information** 
## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS Folder
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
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

---

# **Navigation**
```dataviewjs
const baseFolder = "Arcane-Bound/Worlds Collide/01 Characters";
const pages = dv.pages(`"${baseFolder}"`);

// group by faction.active or null
let groups = pages.groupBy(p => p.faction?.active ?? null);

groups = groups.array().sort((a, b) => {
  // null (no faction) goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

for (const group of groups) {
  // header: show "No Faction" if null
  //dv.header(2, group.key ?? "No Faction");
  
  const title = group.key ?? "No Faction";

  // Build datacards block
  let lines = [];
  if (group.key === null) {
	  lines.push(`> [!navigation]+ ${title}`);
  }else{
	  lines.push(`> [!navigation]+ ${"[[" + title + "]]"}`);
  }
  
  lines.push(">```datacards");
  lines.push(`>TABLE profileImage`);
  lines.push(`>FROM "${baseFolder}"`);

  // Use `faction.active = null` if group key is null
  if (group.key === null) {
    lines.push(">WHERE faction.active = null");
  } else {
    lines.push(`>WHERE contains("${group.key}", faction.active)`);
  }

  lines.push(">SORT file.name ASC");
  lines.push(">");
  lines.push(">//Settings");
  lines.push(">preset: square");
 // lines.push("imageProperty: cover");
  //lines.push("imageFit: contain");
  //lines.push("imageHeight: 10px");
  lines.push(">columns: 5");
  lines.push(">fontSize: smallest");
  lines.push(">```");

  dv.el("div", lines.join("\n"));
}
```