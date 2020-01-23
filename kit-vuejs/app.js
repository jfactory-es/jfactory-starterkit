import { jFactory } from "jfactory-es";
import Vue from "vue/dist/vue.common";

window.clockComponent = jFactory("clockComponent", {

    async onInstall() {
        this.$log("install");

        await this.$cssFetch("#clock-css", "assets/app-clock.css");

        // Create a DOM target for the view
        // using an existing <template>
        this.$dom("#clock-view", "#tpl-clockVue", "body");
        // or create it
        // this.$dom("#clock-view", '<div>{{message}}</div>', "body");
        // or load it
        // await this.$domFetch("#clock-view", "../assets/app-clock.tpl.html", "body");

        this.data = {message: ""};
        this.$vue("myView", new Vue({el: "#clock-view", data: this.data}));
        this.update("Installed but not enabled");
    },

    async onEnable() {
        this.$log("enable");
        this.update("Fetching...");
        this.date = await this.fetchDate();
        this.$interval("update", 1000, () => {
            this.date = new Date(this.date.setSeconds(this.date.getSeconds() + 1));
            this.update(this.date.toLocaleString())
        })
    },

    onDisable() {
        this.$log("disable");
        this.update("Disabled");
        // Everything installed by and after onEnable
        // is automatically stopped and removed
    },

    onUninstall() {
        this.$log("uninstall");
        // Everything installed by onInstall
        // is automatically stopped and removed
    },

    // your own methods...

    update(value) {
        this.data.message = value
    },

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
});
