function init(){
    

var x = document.getElementById("btnZawgyi");
x.addEventListener('click',zgyFun);
function zgyFun(){
document.getElementById("zp").style.fontFamily="Zawgyi-One"
;}
window.onload =init;

document.getElementById("btnUni").addEventListener ('click',uniFun);
function uniFun (){
    document.getElementById("zp").style.fontFamily ="Myanmar3,Yunghkio";
}

}
