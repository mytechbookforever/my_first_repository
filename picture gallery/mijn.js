control = false;
function play () {
  if(control == false){
  document.querySelector(".off").style.background = "red";
  }else {
  document.querySelector(".off").style.background = "#ccc";
  }
control = true;
document.querySelector(".on").style.background = "#ccc";

}

function stop () {
control = false;
if(control == false){
document.querySelector(".off").style.background = "#ccc";
}else {
document.querySelector(".off").style.background = "red";
}
document.querySelector(".on").style.background = "green";
// document.querySelector(".off").style.background = "#ccc;";
}
$( document ).ready(function() {


function test () {
setTimeout(function () {
document.getElementById("popup").classList.add("popup");
sel.innerHTML = "<h1 class='text'>klik hier</h1>";
},3000)
}
let sel = document.getElementById("popup");
sel.onclick = function () {
sel.classList.remove("popup");
sel.innerHTML = "";

document.getElementsByTagName("img")[0].src = "1.jpg";
wall();
}
test();
let i = 0;
let arr = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg"];


function wall () {
setInterval(function () {

i++;
delete i;
setInterval(function () {
if(control == false){
clearInterval()
document.getElementsByTagName("img")[0].src = "1.jpg";
}else {
$("img").fadeOut(3000);
}

},3000);
$("img").fadeIn("slow");




if( i < arr.length){
if(control == false){

document.getElementsByTagName("img")[0].src = "1.jpg";
}else {
document.getElementsByTagName("img")[0].src = arr[i];

}
}else {
i = 0;
document.getElementsByTagName("img")[0].src = "1.jpg";
}

},5000);
}
});
