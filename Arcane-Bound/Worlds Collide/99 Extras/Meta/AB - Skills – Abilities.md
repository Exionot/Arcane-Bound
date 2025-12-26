---
type: meta
---

The following is a complete list of all existing skills and abilities within [[Arcane-Bound – Worlds Collide]].
# **Skill and Ability List**
```dataviewjs
function stringCapitalize(str){
if (typeof str !== 'string') return '';
	const lower = str.toLowerCase();
	  return str.charAt(0).toUpperCase() + lower.slice(1);
}

let pages = dv.pages('"Arcane-Bound"')
  .where(p => p.type && p.type.includes("ability")).sort(p => p.file.itemType, 'asc');
dv.table(["Name", "Type", "Status"], pages.map(p => [dv.fileLink(p.file.path), stringCapitalize(p.abilityType), p.status]));
```