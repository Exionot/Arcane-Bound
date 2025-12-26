---
type: meta
created: 2025-08-24
---

# **Basic Information**
**Name**: Arcane-Bound: Archives
**Creation Date**: August 24, 2025 ( `$=(()=>{const{DateTime}=dv.luxon,p=dv.current(),c=p.created?DateTime.fromISO(p.created):DateTime.fromJSDate(p.file.ctime),n=DateTime.now().startOf("day"),d=n.diff(c,["years","months","days"]).toObject(),r=[];if(d.years)r.push(d.years+" year"+(d.years>1?"s":""));if(d.months)r.push(d.months+" month"+(d.months>1?"s":""));if(d.days)r.push(d.days+" day"+(d.days>1?"s":""));return r.join(", ")+" old";})()` )



# **Overview**
**Arcane-Bound: Archives** is a subproject of [[Arcane-Bound – Worlds Collide]]. This project's goal is to showcase the characters of **Arcane-Bound** through magazine-like posters. ^2b3b6f

# **Navigation**
```dataviewjs
const folder = "Arcane-Bound/Archives";
const allImages = app.vault.getFiles()
  .filter(f => f.extension === 'png' && f.path.startsWith(folder)).sort((a, b) => b.stat.ctime - a.stat.ctime);

dv.table(
  ["Preview", "Filename"],
  allImages.map(img =>
    [dv.fileLink(img.path, true, "300"), dv.fileLink(img.path, false, img.name)]
  )
);
```

