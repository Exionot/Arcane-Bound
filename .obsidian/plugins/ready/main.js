const { Plugin } = require("obsidian");

module.exports = class ready extends Plugin {
    async onload(){
        this.registerEvent(
            this.app.workspace.onLayoutReady(() => {
                console.log("Workspace is ready");
                document.body.classList.add("workspace-ready");
            })
        );
    }
	        
}