const path = require("path");
const webpack = require("webpack");

const args = process.argv.slice(2);

try {
    process.chdir("./kit/" + args[0]);
}
catch (err) {
    console.log('wrong argument');
    process.exit();
}


process.env.NODE_ENV = "production";
const CONF_WEBPACK = require("../kit/"+args[0]+"/webpack.config.js");

console.log('Building ' + '"'+ args[0] + '"');
console.log('Webpack mode = ' + '"' + CONF_WEBPACK.mode + '"');
console.log();

webpack(CONF_WEBPACK).run(function(err, stats) {
    if (err) {
        console.log(err)
    } else {
        console.log(stats.toString({
            all: false,
            colors: true,
            warnings: true,
            chunks: true,
            chunkOrigins: true,
            outputPath: true
        }))
    }
});
