import { jFactory } from "jfactory-es";
import React, { Component } from 'react';
import ReactDOM from "react-dom";

jFactory.ReactDOM = ReactDOM;

window.clockComponent = jFactory("clockComponent", {

    async onInstall() {

        class Timer extends Component {
            constructor(props) {
                super(props);
                this.state = { message: "" };
            }
            render() {return this.state.message}
        }

        this.$log("install");
        await this.$cssFetch("#clock-css", "assets/app-clock.css");
        let container = this.$dom("#clock-view", '<div/>', "body");
        this.view = this.$react("myView", container, <Timer />);
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
