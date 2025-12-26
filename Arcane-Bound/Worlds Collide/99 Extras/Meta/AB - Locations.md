---
type: meta
filter: g
---

The following is a complete list of all existing location notes within [[Arcane-Bound – Worlds Collide]].

# **Filter**
`INPUT[inlineSelect(option(g, All), option(magic, Magic), option(technology, Technology)):filter]`

# **Location List**
```dataviewjs
const order = {
  planet: 1,
  orbital: 2,
  continent: 3,
  sector: 4,
  nation: 5,
  region: 6,
  city: 7,
  district: 8,
  town: 9,
  village: 10,
  poi: 11
};

function capitalize(input) {
  const values = Array.isArray(input) ? input : input.split(',');

  const output = values.map(word => {
    const trimmed = word.trim().toLowerCase();

    if (trimmed === "poi") return "Point of Interest";

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }).join(', ');

  return output;
}

function stringCapitalize(str){
if (typeof str !== 'string') return '';
	const lower = str.toLowerCase();
	  return str.charAt(0).toUpperCase() + lower.slice(1);
}

const pages = dv.pages('"Arcane-Bound"')
  .where(p => p.type && p.type.includes("location") && p.system.includes(dv.current().filter))
  .sort(p => {
    const types = Array.isArray(p.locationType)
      ? p.locationType
      : (typeof p.locationType === "string" ? [p.locationType] : []);

    const rankList = types.map(t => order[t] ?? 99);
    const rankKey = rankList.map(n => n.toString().padStart(2, '0')).join("-"); // '02-05' < '02-11'
    const name = p.file.name.toLowerCase();

    return [rankKey, name]; // true lexicographic sort
  });

dv.table(
  ["Location", "Location Type", "Location", "System"],
  pages.map(p => {const typeList = Array.isArray(p.locationType)
      ? p.locationType
      : (typeof p.locationType === "string" ? [p.locationType] : []);
    
    const formatted = typeList
      .map(x => x.charAt(0).toUpperCase() + x.slice(1))
      .join(", ");
      
    const locSystem = stringCapitalize(p.system);
    
    return [p.file.link, capitalize(formatted), p.location, locSystem];
    
  })
);
```
