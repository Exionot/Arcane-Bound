---
type: meta
---

The following is a complete list of all existing items and equipment within [[Arcane-Bound – Worlds Collide]].
# **Item and Equipment List**
```dataviewjs
function stringCapitalize(str){
if (typeof str !== 'string') return '';
	const lower = str.toLowerCase();
	  return str.charAt(0).toUpperCase() + lower.slice(1);
}

let pages = dv.pages('"Arcane-Bound"')
  .where(p => p.type && p.type.includes("item")).sort(p => p.file.itemType, 'asc');
  
dv.table(["Name", "Item Type", "Status"], pages.map(p => [dv.fileLink(p.file.path), stringCapitalize(p.itemType), p.status]));
```