console.log('App.js is running!')

// JSX - Javascript Xml
var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById("app");

ReactDom.render(template, appRoot);