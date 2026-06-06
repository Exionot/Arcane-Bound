const { Plugin } = require("obsidian");

module.exports = class CategoryChecker extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-open", async (file) => {
				if (!file) return;
                console.log("testingT")
                const parentFolder = file.parent?.name;
                console.log(parentFolder)

                if (parentFolder !== "Categories") return;

				const matches = this.app.vault
					.getMarkdownFiles()
					.filter(f => f.basename === file.basename);

				if (matches.length < 2) return;

				const cache = this.app.metadataCache.getFileCache(file);
				const frontmatter = cache?.frontmatter ?? {};

				if (frontmatter.hasAppended) return;

				let content = await this.app.vault.read(file);

				if (content.startsWith("---")) {
					const endIndex = content.indexOf("\n---", 3);
					if (endIndex !== -1) {
						const insertPos = content.indexOf("\n", endIndex + 1);

                        const mainNote = this.app.vault
					        .getMarkdownFiles()
					        .filter(f => f.basename === file.basename && f.path !== file.path);
                        
                        const mainNotePath = mainNote.map(f => f.parent?.path) + "/";
                        const mainNoteName = mainNote.map(f => f.basename);
						const toInsert = "\n\n> The main note for this category is: [[" + mainNotePath + mainNoteName + " | " + mainNoteName + "]]";

						content =
							content.slice(0, insertPos) +
							toInsert +
							content.slice(insertPos);

						await this.app.vault.modify(file, content);

						await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
							frontmatter.hasAppended = true;
						});
					}
				}
			})
		);
	}
}