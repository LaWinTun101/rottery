function init(){
var Ttime = 12000;
/*func1 */

setTimeout(
function InitialanimiPage(){
$(".childImage, .ml2, .ml3,.logo,.text,.parent").remove();
},Ttime);
/*func1*/

/*fun2*/
setTimeout(function AnotherPage(){
$("header").append("<button class='btnSignin'>Sign In</button><button class='btnSignup'>Sign Up</button>").css({"width":"100%","height":"auto","background-color":"chocolate","position":"fixed"});
$(".btnSignin, .btnSignup").css({
"padding":"14px 16px",
"font-size":"22px",
"background-color":"chocolate", "color":"white",
"display":"inline-block",
"border-color":"white",
"border-bottom":"none",
"border-top":"none",
"border-radius":"0",
});
/*innerFunc*/
setTimeout(
function(){

$("body").append("<div class='container'></div>");
$(".container").append("<img src='tumdy.jpg' class='containerImage'></img><br>").hide();
$(".container").css({
"display": "flex",
 "justify-content": "center",
 "align-items": "center",
 "height": "100%"
});
$(".containerImage").css({
"background-size":"cover",
"background-position":"center",
"width":"100px",
"height":"100px"
}).hide();
$(".btnSignin").click(function(){
var $this = $(this); 
$(this).data('clicked', true);
if($this.data('clicked')){
$(".containerImage").show();}
else{
$(".containerImage").hide();}});
$(".btnSignup").click(function(){
var $this = $(this); 
$(this).data('clicked', true);
if($this.data('clicked')){
$(".containerImage").hide();}
else{
$(".containerImage").show();}});
},100);
/*innerFunc*/
},Ttime);
/*func2*/
/*func3*/
var textWrapper = document.querySelector('.ml2');
var textWrap = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrap.innerHTML = textWrap.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
anime.timeline({loop : true}).add({ 
targets: '.ml2 .letter',
scale: [4,1], 
opacity: [0,1], 
translateZ: 0, 
easing: "easeOutExpo", 
duration: 800, 
delay: (el, i) => 70*i }).add({ 
targets: '.ml3 .letter',
scale: [4,1], 
opacity: [0,1], 
translateZ: 0, 
easing: "easeOutExpo", 
duration: 1000, 
delay: (el, i) => 70*i }).add({
    targets: '.ml2 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 800,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.ml3 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 30 * i
  });
/*func3*/}



