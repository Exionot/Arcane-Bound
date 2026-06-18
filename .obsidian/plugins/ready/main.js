const { Plugin } = require("obsidian");

let hasLoaded = false;
module.exports = class ready extends Plugin {
    async onload(){
        this.addCommand({
			id: "load-contents",
			name: "Load Contents",
			callback: () => {
                
				document.body.classList.add("workspace-ready");
                setTimeout(() => {
                    document.querySelector(".loading-container")?.classList.remove("show");
                }, 2000);

                // setTimeout(() => {
                //     document.body.classList.remove("workspace-ready");
                // }, 2000);
			},
		});

        this.addCommand({
			id: "load-startup",
			name: "Load Startup Screen",
			callback: () => {
                console.log("Startup...");

                const loadingContainer = document.createElement("div");
                loadingContainer.classList.add("loading-container", "show");
                document.querySelector(".app-container")?.appendChild(loadingContainer);

                const logo = document.createElement("img");

                const file = this.app.vault.getAbstractFileByPath("ᐳExternal Assets/Rhodes_Island.png");
                logo.src = this.app.vault.getResourcePath(file);
                logo.className = "loading-logo";
                loadingContainer.appendChild(logo);

                const loadingBarContainer = document.createElement("div");
                loadingBarContainer.classList.add("loading-bar-container");
                loadingContainer.appendChild(loadingBarContainer);
                
                this.app.commands.executeCommandById("ready:load-contents");
			},
		});

    }
}