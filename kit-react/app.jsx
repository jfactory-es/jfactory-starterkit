import { jFactory } from "jfactory";
import React, { Component } from 'react';
import ReactDOM from "react-dom";

jFactory.ReactDOM = ReactDOM;

window.clock = jFactory("clock", {

    async onInstall() {

        class Clock extends Component {
            constructor(props) {
                super(props);
                this.state = { message: "" };
            }
            render() {return this.state.message}
        }

        this.$log("install");

        // Load a css and register it as "clockCss"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitCSS.md
        await this.$cssFetch("clockCss", "assets/clock.css");

        // Register a DOM target as "clockDom" and append it to "body"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitDOM.md
        // Clone it from a declared <template> (see index.html file)
        let clockDom = this.$dom("clockDom", "#tpl-vanilla", "body");
        // or create it
        // let clockDom = this.$dom("clockDom", "<div class='clock'/>", "body");
        // or load it
        // let clockDom = await this.$domFetch("clockDom", "../assets/tpl-vanilla.html", "body",);
        this.view = this.$react("myView", clockDom, <Clock />);

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
        this.view.setState({message: value});
    },

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
});
