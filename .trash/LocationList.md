```dataviewjs
const pages = dv.pages().where(p => p.type && p.type.includes("location"));

const planets = pages.where(p => p.locationType && p.locationType.includes("planet"));
const orbitals = pages.where(p => p.locationType && p.locationType.includes("orbital"));
//const continents = pages.where(p => p.locationType && p.locationType.includes("continent"));
const sectors = pages.where(p => p.locationType && p.locationType.includes("sector"));
const nations = pages.where(p => p.locationType && p.locationType.includes("nation"));
const regions = pages.where(p => p.locationType && p.locationType.includes("region"));
const cities = pages.where(p => p.locationType && p.locationType.includes("city"));
const towns = pages.where(p => p.locationType && p.locationType.includes("town"));
const villages = pages.where(p => p.locationType && p.locationType.includes("village"));
const districts = pages.where(p => p.locationType && p.locationType.includes("district"));
const pois = pages.where(p => p.locationType && p.locationType.includes("poi"));


for (let pl of planets){

dv.paragraph(`# ${pl.file.name}`);
const underPlanet = pages.where(p => p.location && p.location.includes(pl.file.name));
for (let continent of underPlanet){
	dv.paragraph(`## ${"[["+continent.file.name+"]]"}`);
	const underContinent = pages.where(p => p.location && p.location.includes(continent.file.name));
	for (let sector of underContinent){
		dv.paragraph(`### ${"[["+sector.file.name+"]]"}`);
		const underSector = pages.where(p => p.location && p.location.includes(sector.file.name));
		for (let nation of underSector){
			dv.paragraph(`#### ${"[["+nation.file.name+"]]"}`);
			const underNation = pages.where(p => p.location && p.location.includes(nation.file.name));
			for (let region of underNation){
				dv.paragraph(`##### ${"[["+region.file.name+"]]"}`);
				const underRegion = pages.where(p => p.location && p.location.includes(region.file.name));
				for (let settlement of underRegion){
					dv.paragraph(`###### ${"[["+settlement.file.name+"]]"}`);
				}
			}
		}
	} 
}
dv.paragraph(`ㅤ`);
}




/*
const continents = pages.where(p => p.locationType && p.locationType.includes("continent") && p.location && p.location.includes(pl.file.name));
for (let cn of continents){
dv.paragraph(`## ${"[["+cn.file.name+"]]"}`);

}
*/



dv.table(
["Name"],
planets.map(p => [p.file.link])
)
```