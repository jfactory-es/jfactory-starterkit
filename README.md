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

This kit includes a local [webpack local server](https://webpack.js.org/configuration/dev-server/) to test jFactory effortlessly. 

```
npm run dev
```

Open in a browser:
```
http://localhost:8080
```

## Without Webpack

If you prefer to run this application without webpack, uncomment the scripts in the index.html and edit the app.js as explained in comments.

Because fetch() does not allow local urls, you may need to re-target their urls to something external, or load the application from your own local server.
