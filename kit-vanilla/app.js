import { jFactory } from "jfactory-es";

window.clockComponent = jFactory("clockComponent", {

    onInstall() {
        this.$log("install");
        this.view = this.$dom("#clock-view", "<div>").appendTo("body");
        this.$cssFetch("#clock-css", "assets/app-clock.css").then(() => this.updateView("Installed but not enabled"));
    },

    async onEnable() {
        this.$log("enable");
        this.updateView("Fetching...");
        this.date = await this.fetchDate();
        this.$interval("update", 1000, () => {
            this.date = new Date(this.date.setSeconds(this.date.getSeconds() + 1));
            this.updateView(this.date.toLocaleString())
        })
    },

    onDisable() {
        this.$log("disable");
        this.updateView("Disabled");
        // everything installed by and after onEnable
        // is automatically stopped and removed
    },

    onUninstall() {
        this.$log("uninstall");
        // everything installed by onInstall
        // is automatically stopped and removed
    },

    updateView(value) {
        this.view.html(value)
    },

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
});