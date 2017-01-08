# Angular 1.6 starter with webpack (modular like Angular 2)

## Feature

```
Angular 1.6
Webpack
ES6
Gulp
Bootstrap 4
jQuery
Themify Icon set
```

1. Support component generation ( like angular 2 cli )
2. Lazy load module
3. Eager load module
4. Real modular angular app ( ES6 import/export )
5. Built on top of webpack ( in-lined with angular2/cli )
6. Gulp for component generation ( can be used to automate other things to, have nice generator skeleton ) 
7. Production Ready 
8. Development work flow automated
9. Breadcrumb
10. Dynamic title
11. Page Loader ( page progress bar )
12. Sidebar Toggler
13. Submenu Toggler


## Developing

```
npm install
npm start // http://localhost:8080
npm run build
node server.js // run prod version
npm run test-watch
```

## Generating Components

```
npm run c -- --name about // create eager loaded component
npm run lazy -- --name users // create lazy loaded component
```

```
// Create componet inside src/app/components
npm run component -- --name componentName

// Create component inside parent (src/app/components/auth/signup)
npm run component -- --name signup --parent auth

// Create componet outside components (src/app/common/footer )
npm run component -- --name footer --parent ../common
```

## References 

https://tests4geeks.com/build-angular-1-5-component-angularjs-tutorial/

https://blog.octobot.io/lazy-loading-angular-1-x-states-with-webpack/

## Tweaking/Chalanges

Webpack with themify icon/or font awesome that have version (woff2?v=0.4) dosn't work so to make it work configure asset loader like this...

```javascript
{
	test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,      
	loader: 'file'
}
```