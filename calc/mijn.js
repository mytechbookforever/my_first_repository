
doc.classList.add("calc_result")


function fun() {


var x = document.getElementById("mySelect").options;

for(let i = 0; i < x.length; i++){
x[i].onclick = function () {
if(this.value == "plus"){
plus()
}else if(this.value == "min"){
min();
}else if (this.value == "keer"){
keer();
}else if(this.value == "deel"){
deel();
}else if(this.value == "add"){
plus();
}else if(this.value == "subtract"){
min();
}else if(this.value == "multiply"){
keer();
}else if(this.value == "divide"){
deel();
}
}//onclick end
}//for llop end
}//fun end

function plus () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let c =  one +"+"+ two + "=";
let res = Number(one) + Number(two);
out(c , res);
}


function min () {

  let one = document.getElementById("een").value;
  let two = document.getElementById("twee").value;
let c =  one +"-"+ two + "=";
let res = Number(one) - Number(two);
out(c , res);
}

function keer () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let c =  one +"*"+ two + "=";
let res = Number(one) * Number(two);
out(c , res);
}

function deel () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let c =  one +"/"+ two + "=";
let res = Number(one) / Number(two);

out(c , res);
}
function out (e, res) {

let doc = document.getElementById("doc");
doc.classList.add("good");
doc.innerHTML  = e + res;
}



function numcheck (m) {
mess(!isNaN(event.key));
return !isNaN(event.key);
}

function mess (m) {
if(m){
   color()
   // document.getElementById("een").value.length > 5
let x1 = document.getElementById("een")
let x2 = document.getElementById("twee")
if(x1.value.length > 10 || x2.value.length > 10){
x1.value = "";
x2.value = "";

doc.innerHTML = "<p class='denied'>not more then ten Numbers</p>";
setTimeout(function  () {
setTimeout(time , 2000)
doc.innerHTML = "<p class='denied'>not more then ten Numbers</p>";
});
if(!isNaN == true){
doc.innerHTML = m

}
}
}else {
doc.classList.remove("good");
doc.innerHTML = "<p class='denied'>access denied</p>";
setTimeout(function  () {
setTimeout(time , 2000)
doc.innerHTML = "<p class='denied'>access denied</p>";
});



}

function time(){
doc.innerHTML = "<p></p>";
}
}
let val_user;
if(val_user == null){
val_user = localStorage.getItem("user");
}
function user_btn () {
let userg = function (){
// switch en nl make it
let user = prompt("do you want random color tap yes else write something else");
let local = localStorage.setItem("user" , user);
return user;
}

val_user = userg();
}
function color(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  // var bgColor = "rgb(" + x + "," + y + "," + z + ")";
let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
if(val_user == "yes"){
document.body.classList.remove("test")
document.body.style.backgroundImage = "linear-gradient(rgba("+x+", "+y+", "+z+", 0.6), rgba(108, 162, 200, 0.53)), url('1.jpg')";
document.body.style.backgroundSize = "cover"

}else {
document.body.style.backgroundColor = "linear-gradient( rgba(12, 173, 186, 0.57), rgba(12, 173, 186, 0.57)), url('1.jpg')";
}
}

//document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(45deg, rgb(' + lessOne + ',' + lessTwo + ',' + lessThree + '), rgb(' + one + ',' + two + ',' + three + '), rgb(' + moreOne + ',' + moreTwo + ',' + moreThree + '))';
function deleteUser() {
localStorage.removeItem("user");
localStorage.removeItem("oke");
location.reload(true)
}
let ja = localStorage.getItem("oke");
if(ja == "nl"){
  document.querySelector(".add_text").innerHTML = "plus";
  document.querySelector(".subtract_text").innerHTML = "min";
  document.querySelector(".multiply_text").innerHTML = "keer";
  document.querySelector(".divide_text").innerHTML = "deel";
  document.querySelector(".nl_color").value = "wil je een willekeurige kleur";
  document.querySelector(".nl_nl").value = "wil je nederlands";
}



function dutch () {
let user_nl;
user_nl = prompt("wil je nederlands tik nl for english write en");
if(user_nl == "nl"){
localStorage.setItem("oke", user_nl)
document.querySelector(".add_text").innerHTML = "plus";
document.querySelector(".subtract_text").innerHTML = "min";
document.querySelector(".multiply_text").innerHTML = "keer";
document.querySelector(".divide_text").innerHTML = "deel";
document.querySelector(".nl_color").value = "wil je een willekeurige kleur";
document.querySelector(".nl_nl").value = "wil je nederlands";


}else if(user_nl == "en"){
localStorage.removeItem("oke");
location.reload(true)
}
}
