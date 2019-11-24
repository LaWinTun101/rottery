window.onload = function() {
var center = document.createElement("center");
var p = document.createElement("p");
var node = document.createTextNode("Hello World");
p.appendChild(node);
center.appendChild(p);

var body = document.getElementByTagName("body");
body.appendChild(center);

};
