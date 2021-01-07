import { jFactory } from "jfactory";

window.clock = jFactory("clock", {

    async onInstall() {
        this.$log("install");

        // Load a css and register it as "clockCss"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitCSS.md
        await this.$cssFetch("clockCss", "assets/clock.css");

        // Register a DOM target as "clockDom" and append it to "body"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitDOM.md
        // Clone it from a declared <template> (see index.html file)
        this.view = this.$dom("clockDom", "#tpl-clock", "body");
        // or create it
        // this.view = this.$dom("clockDom", "<div class='clock'/>", "body");
        // or load it
        // this.view = await this.$domFetch("clockDom", "../assets/template.html", "body",);

        this.updateView("Installed but not enabled");
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

    // your own methods...

    updateView(value) {
        this.view.html(value)
    },

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
});