const { Plugin } = require("obsidian");

module.exports = class ready extends Plugin {
    async onload(){
        
        this.addCommand({
			id: "load-contents",
			name: "Load Contents",
			callback: () => {
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

                document.body.classList.add("workspace-ready");

                const loadingContainer = document.createElement("div");
                loadingContainer.classList.add("loading-container", "show");
                document.querySelector(".app-container")?.appendChild(loadingContainer);

                const logo = document.createElement("img");

                const file = this.app.vault.getAbstractFileByPath("ᐳExternal Assets/Rhodes_Island.png");
                logo.src = this.app.vault.getResourcePath(file);
                logo.className = "loading-logo";
                loadingContainer.appendChild(logo);

                const loadingBar = document.createElement("div");
                loadingBar.classList.add("loading-bar");
                loadingContainer.appendChild(loadingBar);
                
                const loadingBarFill = document.createElement("div");
                loadingBarFill.classList.add("loading-bar-fill");
                loadingBar.appendChild(loadingBarFill);

                setTimeout(() => {
                    loadingBarFill.style.animation = "fill-bar 5000ms ease-out forwards";
                });
                
                this.app.commands.executeCommandById("ready:load-contents");
			},
		});

    }
}