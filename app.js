import { jFactory } from "jfactory-es";

let component = jFactory("myComponent", {
  onInstall() {
    this.$log("install");
  },

  onEnable() {
    this.$log("enable");
  },

  onDisable() {
    this.$log("disable");
  },

  onUninstall() {
    this.$log("uninstall");
  }
});

console.log(component);

(async function() {
  await component.$install(true);
  await component.$disable();
  await component.$enable();
  await component.$uninstall();
}());