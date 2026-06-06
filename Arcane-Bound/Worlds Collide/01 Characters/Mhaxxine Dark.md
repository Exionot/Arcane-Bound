---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Human
  - Caster
  - Null's Disease
  - Void Crystal
  - Synthspire
  - NULL Region
  - Void Operation & Investigation Department
  - Void Special Operation Division 1
  - Dawn Squad
  - Blackreign Gang
location:
  origin: Rockcore City
  nation:
  city:
  town:
  village:
  poi:
faction:
  active: Blackreign Gang
  Blackreign Gang:
    status: Active
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/In Darkness Blank.png
galleryImage:
posterImage:
  - Arcane-Bound/Archives/In Darkness Final.png
aliases: Mhax
relations:
  - Krystalle Eos
  - Clair Tempest
manaPresence: None
magicAffinity: Caster
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Mhaxxine Dark   |
> | --- | --- |
> |   Nickname  |  "Mhax"   |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |  October 23rd   |
> |   Age  |  Young Adult   |
> |   Species  |  [[Human]]   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Rockcore City]], [[NULL Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]   |
> |   Faction/s  |  [[Blackreign Gang]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

---
# **History** 
## Background 

# **Appearance** 
## General Appearance 
%% Choker -> void inhibitor %%

# **Personality** 

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

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 23, 2021** - [Original Post](https://x.com/Exionot/status/1452505549208125447?s=20)
> ## Changes over the years
> - Remained untouched and unnamed until October 20, 2025 where she was redrawn and was given the name "Mhax" by a friend which turned into her current name "Mhaxxine Dark".
> - The redraw remained loyal to her original design though it is subject to change (I don't know what to do with her).


## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Character Thread"
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

## Character Profile Image
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
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