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
profileImage: 
galleryImage: 
posterImage:
  - Arcane-Bound/Archives/Being Vigilant Final.png
  - Arcane-Bound/Archives/Vixen's Secret Final.png
aliases:
  - Vi
relations:
  - Rem Orion
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

> [!Character]
> **"Ugh... Can you quit calling me by *that name* already? I told you my name is 'Vi'! Where did you get that name anyway?"**
> Vi when she's called by her real name


# **Basic Information** 
**Name**: Victoria Veloux Canidel
**Sex**: Female
**Age**: Young Adult
**Birthday**:
**Species**: [[Vulpes-Humanoid]]
**Origin**: [[Lightspeed City]], [[HyperCorp Republic]], [[Synthspire]]
**Hobbies**:
**Nickname/s**: "Vi" (Preferred name)
**Faction/s**: [[Starveil Retrieval Co.]]
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
**Victoria Veloux Canidel** is a [[Vulpes-Humanoid]] from [[Lightspeed City]] in [[HyperCorp Republic]]. She was part of the noble [[Canidel Family]] before running away.^[[[Canidel Family]]] She now lives in [[Astral City]] going by the name "**Vi**", working as a server/waiter in [[The Food Horizon]] on [[Astral City]].^[[[The Food Horizon]]] She is also the founder and leader of [[Starveil Retrieval Co.]], taking "retrieval" contracts in return of money or goods.^[[[Starveil Retrieval Co.]]]
## During The Convergence
> **Full Note:** [[The Convergence]]

**Vi** was transported to [[Arcaena]]. %%Location unknown%%

# **Appearance** 
## General Appearance 
A human with fox-like ears and tail. She has a short pale purple hair with deep purple eyes. She also wears two piercings on her left ear with a four-pointed star charm on one of them.

## Outfits
### In Synthspire
**Vi** is often seen wearing her work uniform, a white long-sleeved shirt with a black vest, black pants, and a purple tie. She also wears her weapon, [[Vixen's Claws]], in case of trouble.

# **Personality** 
**Vi** still maintains her elegance despite being a noble runaway. She is often seen working alone, but never fails to get the job done. She is swift and reliable, her colleagues often look up to her.

Despite her lonely nature, **Vi** still finds time to hang out with her friends, where she lets herself be mischievous, pulling with them from time to time.

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