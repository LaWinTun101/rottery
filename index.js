document.write(" Comparing Two number ");

function compare(){
var vone = parseInt(document.getElementById("fn").value);
var vtwo = parseInt(document.getElementById("sn").value);
if (vone > vtwo) {
  alert("First number is greater than second number");
 }
else {
  alert("Second number is greater than first number");
}
}
