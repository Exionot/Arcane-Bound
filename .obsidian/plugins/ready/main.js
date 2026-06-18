const { Plugin } = require("obsidian");

let hasLoaded = false;
module.exports = class ready extends Plugin {
    async onload(){
        this.addCommand({
			id: "load-contents",
			name: "Load Contents",
			callback: () => {
				document.body.classList.add("workspace-ready");
                document.querySelector(".loading")?.classList.remove("loading");
			},
		});

        this.addCommand({
			id: "load-startup",
			name: "Load Startup Screen",
			callback: () => {
                console.log("Startup...");

                const loadingContainer = document.createElement("div");
                loadingContainer.className = "loading-container";
                document.querySelector(".app-container")?.appendChild(loadingContainer);

                const logo = document.createElement("img");
                logo.src = "Rhodes_Island.png";
                logo.className = "loading-logo";
                loadingContainer.appendChild(logo);

                setTimeout(() => {
                    this.app.commands.executeCommandById("ready:load-contents");
                    // this.app.workspace.trigger("ready:load-contents");
                }, 2000);
				// document.body.classList.add("workspace-ready");
			},
		});

        // this.registerEvent(
        //     this.app.workspace.on("ready:done", () => {
        //         console.log("command finished");
        //     })
        // );
    }
}