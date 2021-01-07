<div align="center" markdown="1">
<img width="140" src="https://jfactory-es.github.io/jfactory/img/jFactory.png">

# jFactory Starter Kit

[![GitHub version](https://img.shields.io/github/package-json/v/jfactory-es/jfactory-starterkit.svg?label=git)](https://github.com/jfactory-es/jfactory-starterkit)

</div>

>See also the [Playground](https://github.com/jfactory-es/jfactory/blob/master/docs/playground/README.md) 
> if your are looking for immediate testing.

This starter kit provides small jFactory applications preconfigured for react, vuejs, dom template and web components. 
There is also a demonstration of instantiable jFactory components. 

## Installation

```
git clone https://github.com/jfactory-es/jfactory-starterkit.git .
npm install
```

## Run the DevServer

>A [Webpack DevServer](https://webpack.js.org/configuration/dev-server/) is included to quickly develop a jFactory application effortlessly.
The DevServer will reload the page when file changes are detected.

Choose the kit you want to run:

```
npm run dev-dom
npm run dev-react
npm run dev-vue
npm run dev-webc
npm run dev-demo
```

Open in a browser:
```
http://localhost:8080
```

> By default a Webpack DevServer doesn't write the output on disk. If you want to change this,
> see [devServer.writeToDisk](https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-).

## Build an app

>Additionally, the Start Kit provides a production build tool to compile your application (using webpack).

Choose the kit you want to build:

```
npm run build-dom
npm run build-react
npm run build-vue
npm run build-webc
npm run build-demo
```

Output dir:
```
./kit/[kit_name]/dist
```

>It is possible to test the compiled version in browser if the DevServer of the same kit is running, by adding "/dist" to the url: http://localhost:8080/dist/   

## See also

* [jFactory documentation](https://github.com/jfactory-es/jfactory/blob/master/docs/ref-index.md)
* [Playground](https://github.com/jfactory-es/jfactory/blob/master/docs/playground/README.md)
