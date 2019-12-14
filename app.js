import $ from "jquery";
import { jFactory } from "jfactory-es";

let clockComponent = jFactory("clockComponent", {
    onInstall() {
        this.$log("install");
        this.$cssFetch("#clock-css", "app-clock.css");
        this.view = this.$dom("#clock-view", "<div>").appendTo("body");
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
        return this.$fetchJSON("worldclockapi", "http://worldclockapi.com/api/json/utc/now")
            .then(v => new Date(v.currentDateTime))
    }
});

$(document).ready(() => {
    $("#install").on("click", () => clockComponent.$install());
    $("#enable").on("click", () => clockComponent.$enable());
    $("#disable").on("click", () => clockComponent.$disable());
    $("#uninstall").on("click", () => clockComponent.$uninstall());
});