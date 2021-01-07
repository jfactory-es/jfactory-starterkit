const path = require("path");
const webpack = require("webpack");
const wds = require("webpack-dev-server");

const args = process.argv.slice(2);

try {
    process.chdir("./kit/" + args[0]);
}
catch (err) {
    console.log('wrong argument');
    process.exit();
}

process.env.NODE_ENV = "development";
const CONF_WEBPACK = require("../kit/"+args[0]+"/webpack.config.js");
const CONF_SERVER = CONF_WEBPACK.devServer;

console.log('Starting DevServer for ' + '"'+ args[0] + '"');
console.log('Webpack mode = ' + '"' + CONF_WEBPACK.mode + '"');
console.log();

const server = new wds(webpack(CONF_WEBPACK), CONF_SERVER);
server.listen(CONF_SERVER.port, CONF_SERVER.host);