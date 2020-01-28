import { jFactory } from "jfactory";
import Vue from "vue/dist/vue.common";

window.clock = jFactory("clock", {

    async onInstall() {
        this.$log("install");

        // Load a css and register it as "clockCss"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitCSS.md
        await this.$cssFetch("clockCss", "assets/clock.css");

        // Register a DOM target as "clockDom" with dom id "#clockDom" and append it to "body"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitDOM.md
        // Clone it from a declared <template> (see index.html file)
        this.$dom("#clockDom", "#tpl-vue", "body");
        // or create it
        // this.$dom("#clockDom", '<div class="clock">{{message}}</div>', "body");
        // or load it
        // await this.$domFetch("#clockDom", "../assets/tpl-vue.html", "body",);

        this.data = { message: "" };
        this.$vue("myVue", new Vue({el: "#clockDom", data: this.data}));

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
