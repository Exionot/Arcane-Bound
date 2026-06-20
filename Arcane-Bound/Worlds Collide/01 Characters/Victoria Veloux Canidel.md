---
type: character
category: 
  - Characters
  - Characters with Thead
  - Gen 0 Characters
  - Virken
  - Vulpes
  - Caster
  - Vixen's Claws
  - Synthspire
  - Lightspeed City
  - Canidel Family
  - High Alliance on Terran Society
  - Starveil Retrieval Co.
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
profileImage: ᐳExternal Assets/Noble Wanderer Blank.png
galleryImage: []
posterImage:
  - Arcane-Bound/Archives/Being Vigilant Final.png
  - Arcane-Bound/Archives/Vixen's Secret Final.png
  - Arcane-Bound/Archives/Noble Wanderer Final.png
aliases:
  - Vi
  - Victoria "Vi" Veloux Canidel
relations:
  - Canidel Family
  - Rem Orion
manaPresence: None
magicAffinity: Caster
---

> [!Category]-
> `$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Victoria Veloux Canidel   |
> | --- | --- |
> |   Nickname  |  "Vi" (Preferred name) <br> "Little Fox" ([[Ion Kynne]]) |
> |   Sex  |  Female   |
> |   Height  |  153cm (166cm including ears)   |
> |   Birthday  |     |
> |   Age  |  Young Adult   |
> |   Species  |  [[Virken]] (Vulpes)   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Lightspeed City]], [[HyperCorp Republic]], [[Synthspire]]   |
> |   Faction/s  |  [[Starveil Retrieval Co.]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

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

> [!NOTE] Meta History
> ## First Appearance / Creation
> **March 6, 2022** - [Original Post](https://x.com/ExionKFP/status/1500350706808946689?s=20)
> ## Changes over the years
> - Replaced Clair in my banner
> - She was named "Vi" because VIolet but got formalized into "Victoria Veloux Canidel"
> - First design change was in November 8, 2022, shifted her hair color from a bright lavender to a toned down purple, lost her choker (I don't know why everyone had chokers) and her hairpin
> - And then another redraw on May 18, 2023 to match my current style which became the basis of her current design.

## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives

```dataviewjs
const narrativeFolder = "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives";
const pages = dv.pages(`"${narrativeFolder}"`).where(p => p.type == "narrative");

let groupedPages = pages.groupBy(p => p.file.folder ?? null);
groupedPages = groupedPages.array().sort((a, b) => {
  // null goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

//dv.el("div", groupedPages[0].rows[0].file);
for (const group of groupedPages){
	const lastSlash = (group.key).lastIndexOf("/");
	const folderName = (group.key).slice(lastSlash + 1) ?? "No Folder";
	
	let lines = [];
	let isHeaderPushed = false;
	for (const narrative of group.rows){
		const characterArr = narrative.file.frontmatter.characters ?? null;
		if (characterArr === null || !characterArr.includes(dv.current().file.name)) continue;
		
		if (!isHeaderPushed){
			lines.push(`> [!navigation]- ${folderName}`);
			isHeaderPushed = true;
		}
		
		lines.push(`> - ${narrative.file.link}`);
	}
	
	dv.el("div", lines.join("\n"));
}
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
![[Character Navigation]]

---