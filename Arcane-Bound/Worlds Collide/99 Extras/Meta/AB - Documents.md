---
type: meta
---

The following is a complete list of all existing world documents within [[Arcane-Bound – Worlds Collide]].
# **Document List**
```dataviewjs
function stringCapitalize(str){
if (typeof str !== 'string') return '';
	const lower = str.toLowerCase();
	  return str.charAt(0).toUpperCase() + lower.slice(1);
}

let pages = dv.pages('"Arcane-Bound"')
  .where(p => p.type && p.type.includes("document")).sort(p => p.file.itemType, 'asc');
dv.table(["Document", "Origin", "Issued By"], pages.map(p => [dv.fileLink(p.file.path), stringCapitalize(p.origin), p.issuedBy]));
```