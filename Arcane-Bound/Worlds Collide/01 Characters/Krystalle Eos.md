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
**Species**: [[Virken]] (Vulpes)
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
**Krystalle Eos** is a [[Virken]] from [[Evemark City]] of the [[Republic of Chloros]]. She is a member of the [[Void Special Operation Division 9]] under the [[Void Operation & Investigation Department]].

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