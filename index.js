var ready = function() {
var p = document.createElement("p");
var node = document.createTextNode("Hello World");
p.appendChild(node);

var body = document.getElementByTagName("body");
body.appendChild(p);
};
