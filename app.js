// ----------------------------------------------------------------------------
// If bundled by webpack
// ----------------------------------------------------------------------------
import $ from "jquery";
import { jFactory } from "jfactory-es";

// The "jfactory-es" module uses "process.env.NODE_ENV" to automatically
// switch between "production" and "development". Note that webpack injects
// NODE_ENV with a value equal to its "mode" option, so you shouldn't need to set
// process.env.NODE_ENV.

// Alternatively, you can force the module you want:
// ex: import { jFactory } form "jfactory-es/dist/jFactory-devel.mjs"
// ex: import { jFactory } form "jfactory-es/dist/jFactory.mjs"

// ----------------------------------------------------------------------------
// If not bundled by webpack (uncomment the script imports in the html file):
// ----------------------------------------------------------------------------
// const { jFactory } = jFactoryModule;

let clockComponent = jFactory("clockComponent", {

    onInstall() {
        this.$log("install");
        this.view = this.$dom("#clock-view", "<div>").appendTo("body");
        this.$cssFetch("#clock-css", "app-clock.css").then(() => this.updateView("installed but not enabled"));
    },

    async onEnable() {
        this.$log("enable");
        this.updateView("fetching...");
        this.date = await this.fetchDate();
        this.$interval("update", 1000, () => {
            this.date = new Date(this.date.setSeconds(this.date.getSeconds() + 1));
            this.updateView(this.date)
        })
    },

    onDisable() {
        this.$log("disable");
        this.updateView("disabled");
    },

    onUninstall() {
        this.$log("uninstall");
    },

    updateView(value) {
        this.view.html(value)
    },

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
});

$(document).ready(() => {
    $("#install").on("click", () => clockComponent.$install());
    $("#enable").on("click", () => clockComponent.$enable());
    $("#disable").on("click", () => clockComponent.$disable());
    $("#uninstall").on("click", () => clockComponent.$uninstall());
});