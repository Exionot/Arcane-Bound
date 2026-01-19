---
type: character
location:
  nation: HyperCorp Republic
  city: Astral City
  town:
  village:
  poi:
  origin: Lightspeed City
faction:
  active: Starveil Retrieval Co.
  Starveil Retrieval Co.:
    status: Active
    rank: Leader
    alias:
systemUsed:
  - Solid-Light Energy
abilityUsed:
itemUsed:
  - Vixen's Claws
profileImage: ᐳExternal Assets/Victoria_Veloux_Canidel_Icon2.png
galleryImage: []
posterImage:
  - Arcane-Bound/Archives/Being Vigilant Final.png
  - Arcane-Bound/Archives/Vixen's Secret Final.png
  - Arcane-Bound/Archives/Noble Wanderer Final.png
aliases:
  - Vi
relations:
  - Canidel Family
  - Rem Orion
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Victoria Veloux Canidel   |
> | --- | --- |
> |   Nickname  |  "Vi" (Preferred name)   |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  Young Adult   |
> |   Species  |  [[Virken]] (Vulpes)   |
> |   Origin  |  [[Lightspeed City]], [[HyperCorp Republic]], [[Synthspire]]   |
> |   Faction/s  |  [[Starveil Retrieval Co.]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: [[Victoria Veloux Canidel Narratives Manuscript]]

> [!Character]
> **"Ugh... Can you quit calling me by *that name* already? I told you my name is Vi!"**
> Vi when she's called by her real name

---
# **History** 
## Background 
**Victoria Veloux Canidel** is a [[Virken]] from [[Lightspeed City]] in [[HyperCorp Republic]]. She was part of the noble [[Canidel Family]] before running away.^[[[Canidel Family]]] She now lives in [[Astral City]] going by the name "**Vi**", working as a server/waiter in [[The Food Horizon]] on [[Tiamat District]] of [[Astral City]].^[[[The Food Horizon]]] She is also the founder and leader of [[Starveil Retrieval Co.]], taking "retrieval" contracts in return of money or technology.^[[[Starveil Retrieval Co.]]]
## During The Convergence
> **Full Note:** [[The Convergence]]

**Vi** was transported to [[Brickstone Town]] where he found [[Ted Ursa]] and became acquaintances.^[[[Narrative - Guide of an unknown world]]]

# **Appearance** 
## General Appearance 
A human with fox-like ears and tail. She has a short pale purple hair with deep purple eyes. She also wears two piercings on her left ear with a four-pointed star charm on one of them.

## Outfits
### In Synthspire
**Vi** is often seen wearing her work uniform, a white long-sleeved shirt with a black vest, black pants, a buckled belt, and a purple tie. She also wears her weapon, [[Vixen's Claws]], in case of trouble.

### In Arcaena
To blend in with the fashion of [[Arcaena]], **Vi** changed her outfit during a trip to a tailor's shop with [[Ted Ursa]]. She wears a khaki long-sleeved shirt with a brown sweater vest, and brown pants. She also kept her buckled belt and is still wearing her signature weapon, [[Vixen's Claws]].

# **Personality** 
**Vi** still maintains her elegance despite being a noble runaway. She is often seen working alone, but never fails to get the job done. She is swift and reliable, her colleagues often look up to her.

Though preferred to work alone, **Vi** knows when to seek the help of others when needed.

Despite her lonely nature, **Vi** still finds time to hang out with her friends, where she lets herself be mischievous, pulling with them from time to time.

Due to her busy lifestyle, **Vi** rarely gets the time to properly take care of her tail.

# **Skills and Abilities** 
## Extreme speed 
It is said that she once ran to a city and back in under an hour.
## Stealth 
**Vi** is master at concealing herself, capable of sneaking behind enemies undetected.
## Advanced hearing 
She is able to hear and differentiate people solely from the sound of their footsteps.

```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Starveil Retrieval Co.
> **Full Note:** [[Starveil Retrieval Co.]]

**Vi** is the founder and leader of [[Starveil Retrieval Co.]], a phantom thief faction guised as a retrieval company in [[Astral City]].^[[[Starveil Retrieval Co.]]] She often lets the group do the contracts unless it's a high risk job, in which she accompanies the other members to ensure nothing goes awry.  
# **Relations**
## Rem Orion
> **Full Note:** [[Rem Orion]]

She acts as the assistant of **Vi**, always available when she is needed. She often asks to groom **Vi**'s tail, and even though **Vi** knows this is an obsession of Rem, she trusts her to not do anything weird.

# **Other Information** 
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