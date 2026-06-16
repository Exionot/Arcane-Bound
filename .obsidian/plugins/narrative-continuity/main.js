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

                console.log(
                    JSON.stringify(
                        this.app.metadataCache.getFileCache(indexFile[0]),
                        null,
                        2
                    )
                );

                const indexCache = this.app.metadataCache.getFileCache(indexFile[0]);
                const indexFrontmatter = indexCache?.frontmatter ?? {};

                console.log(indexFrontmatter);
                const narrativeArray = indexFrontmatter.longform?.scenes ?? [];
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