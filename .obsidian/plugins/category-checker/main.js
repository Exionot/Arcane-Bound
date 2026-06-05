import { Plugin, TFile } from "obsidian";

export default class MyPlugin extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-open", async (file) => {
				if (!file) return;

                const parentFolder = file.parent?.path;
                if (parentFolder !== "Categories") return;

				const matches = this.app.vault
					.getMarkdownFiles()
					.filter(f => f.basename === file.basename);

				if (matches.length < 2) return;

				const cache = this.app.metadataCache.getFileCache(file);
				const frontmatter = cache?.frontmatter ?? {};

				if (frontmatter.hasAppended) return;

				const content = await this.app.vault.read(file);

				await this.app.vault.modify(
					file,
					"This is a test append" + content
				);

				await this.app.fileManager.processFrontMatter(
					file,
					(fm) => {
						fm.hasAppended = true;
					}
				);
			})
		);
	}
}