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

console.log('Starting DevServer for ' + '"'+ args[0] + '"\n');

const CONF_WEBPACK = require("../kit/"+args[0]+"/webpack.config.js");
const CONF_SERVER = CONF_WEBPACK.devServer;

const server = new wds(webpack(CONF_WEBPACK), CONF_SERVER);
server.listen(CONF_SERVER.port, CONF_SERVER.host);