# jFactory Starter Kit

A small application that demonstrates how easily you can stop all assynchronous works in a single method call.

jFactory documentation:
https://github.com/jfactory-es/jfactory/blob/master/doc/ref-index.md

## Installation

Clone this repository:
```
git clone https://github.com/jfactory-es/jfactory-starterkit.git
```

## Using the Webpack DevServer

To quickly run this kit, the included [webpack local server](https://webpack.js.org/configuration/dev-server/) allows you to auto-reload app.js after edition.

```
npm run start
```

Open in a browser:
```
http://localhost:8080
```

## Without Webpack

If you don't want to bundle the application, you can edit index.html to uncomment the external imports, then edit app.js to use the umd module.
You may need a local server because fetch disallows local access (alternatively you can retarget the fetch urls to external sources)