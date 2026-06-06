---
type: category
hasAppended: false
---

```dataviewjs
const pages = dv.pages().where(p => p.category && p.category.includes(dv.current().file.name));

const notes = {};

for(let p of pages){
	const fLetter = p.file.name[0].toUpperCase();
	
	if(!notes[fLetter]) notes[fLetter] = [];
	notes[fLetter].push(p);
}

if (Object.keys(notes).length == 0){
	dv.paragraph("> There are currently 0 notes using this category... how is that possible?");
}
else{
	const sorted = Object.keys(notes).sort();
	let lines = [];
	for(let key of sorted){
		lines.push('### ' + key)
		for(let note of notes[key]){
			lines.push(`- ${"[[" + note.file.name + "]]"}`)
		}
	}
	
	dv.paragraph(`There are currently ${sorted.length} notes in this category`);
	dv.el("div", lines.join("\n"));
}

```
