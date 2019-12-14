jFactory Starter Kit
====================

This starter kit contains a webpack-dev-server preconfigured to quickly
test a jFactory project on a local server.

Installation
------------

Clone or download this repository from
https://github.com/jfactory-es/jfactory-starterkit.git

Configure the webpack.config.js with
process.env.NODE_ENV = "development" to enable the developer mode of jFactory

Starting the server
-------------------

From this directory, run in terminal:
    npm run start

then open:
    http://localhost:8080

If the developer mode is enabled, you must see the jFactory logs in the console.
Now you can edit app.js as you wish, the page will be auto updated.

See also
--------

https://webpack.js.org/configuration/dev-server
https://github.com/jfactory-es/jfactory/blob/master/doc/ref-index.md