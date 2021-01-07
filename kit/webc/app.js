import { JFactoryCoreObject, JFactoryComponent } from "jfactory";
import $ from "jquery";

class ClockComponent extends HTMLElement {

    constructor() {
        super();

        // Inject jFactory Traits using shortcuts
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/ref-components.md
        JFactoryCoreObject.inject(this, ClockComponent, this.getAttribute("name"));
        JFactoryComponent.inject(this, ClockComponent);

        // Init the shadowRoot property
        // see https://developer.mozilla.org/docs/Web/API/ShadowRoot
        this.attachShadow({mode: 'open'});
    }

    async onInstall() {
        this.$log("install");

        // Load a css and register it as "clockCss"
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitCSS.md
        await this.$cssFetch("clockCss", "assets/clock.css", this.shadowRoot);

        // Register a DOM target as "clockDom" and append it to the shadowRoot
        // see https://github.com/jfactory-es/jfactory/blob/master/docs/TraitDOM.md
        // Clone it from a declared <template> (see index.html file)
        this.view = this.$dom("clockDom", "#tpl-clock", this.shadowRoot);
        // or create it
        // this.view = this.$dom("clockDom", '<div class="clock"/>', this.shadowRoot);
        // or load it
        // this.view = await this.$domFetch("clockDom", "../assets/template.html", this.shadowRoot);

        this.updateView("Installed but not enabled");
    }

    async onEnable() {
        this.$log("enable");
        this.updateView("Fetching...");
        this.date = await this.fetchDate();
        this.$interval("update", 1000, () => {
            this.date = new Date(this.date.setSeconds(this.date.getSeconds() + 1));
            this.updateView(this.date.toLocaleString())
        })
    }

    onDisable() {
        this.$log("disable");
        this.updateView("Disabled");
        // everything installed by and after onEnable
        // is automatically stopped and removed
    }

    onUninstall() {
        this.$log("uninstall");
        // everything installed by onInstall
        // is automatically stopped and removed
    }

    // your own methods...

    updateView(value) {
        this.view.html(value)
    }

    fetchDate() {
        return this.$fetchJSON("worldtimeapi", "//worldtimeapi.org/api/ip")
            .then(v => new Date(v.utc_datetime))
    }
}

// Register the ClockComponent as a Web Component
customElements.define('clock-component', ClockComponent);

$(() => {// Wait for document load
    window.clock = $('<clock-component name="clock"/>').appendTo("body")[0];
});
