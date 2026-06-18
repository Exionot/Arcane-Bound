const { Plugin } = require("obsidian");

module.exports = class ConditionalSidebar extends Plugin {
	async onload() {
		this.addCommand({
			id: "hide-left-sidebar-if-shown",
			name: "Hide Left Sidebar If Shown",
			callback: () => {
				const leftSidebar = document.querySelector(".workspace-split.mod-left-split");

				if (leftSidebar && getComputedStyle(leftSidebar).display !== "none") {
					this.app.commands.executeCommandById(
						"app:toggle-left-sidebar"
					);
				}
			},
		});

        this.addCommand({
			id: "hide-right-sidebar-if-shown",
			name: "Hide Right Sidebar If Shown",
			callback: () => {
				const rightSidebar = document.querySelector(".workspace-split.mod-right-split");

				if (rightSidebar && getComputedStyle(rightSidebar).display !== "none") {
					this.app.commands.executeCommandById(
						"app:toggle-right-sidebar"
					);
				}
			},
		});
	}
}