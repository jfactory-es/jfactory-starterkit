# jFactory Starter Kit

A small application that demonstrates how easily you can stop all the assynchronous works of a component.

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

If you prefer to run this application without webpack, uncomment the scripts in the index.html and edit the app.js as explained in comments.

Because fetch() does not allow local urls, you may need to re-target their urls to something external, or load the application from your own local server.
