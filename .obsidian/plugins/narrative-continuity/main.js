const { Plugin } = require("obsidian");

module.exports = class CategoryChecker extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-open", async (file) => {
				if (!file) return;
                const parentFolder = file.parent;
                const grandParentFolder = parentFolder.parent;

                const currentCache = this.app.metadataCache.getFileCache(file);
                const currentFrontmatter = currentCache?.frontmatter ?? {};
                try{
                    if (grandParentFolder?.name !== "01 Main Story" || 
                        currentFrontmatter?.cssclasses[0] !== "narrative"
                    ) return;
                }catch (e) {
                    return;
                }

				const indexFile = this.app.vault
					.getMarkdownFiles()
					.filter(f => f.parent === parentFolder && f.basename === "Index");
                
                if (indexFile.length > 1 || indexFile.length === 0) return;


                const indexContent = await this.app.vault.read(indexFile[0]);
                const scenesMatch = indexContent.match(
                    /scenes:\s*\n((?:\s*-\s.*\n?)*)/
                );
                
                if (!scenesMatch) return;
                
                const narrativeArray = scenesMatch[1]
                    .split("\n")
                    .map(line => line.trim())
                    .filter(line => line.startsWith("- "))
                    .map(line => line.slice(2));

                console.log(narrativeArray);
                const narrativeIndex = narrativeArray.indexOf(file.basename);
                let prevNarr, nextNarr;

                if (narrativeIndex === 0) prevNarr = "";
                if (narrativeIndex === narrativeArray.length - 1) nextNarr = ""

                prevNarr = narrativeArray[narrativeIndex - 1];
                nextNarr = narrativeArray[narrativeIndex + 1];

                await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
					frontmatter.prevNarrative = prevNarr;
                    frontmatter.nextNarrative = nextNarr;
				});
			})
		);
	}
}