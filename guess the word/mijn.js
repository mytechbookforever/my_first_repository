// let holder = "javaScript";
// let message = document.getElementById("message");
// function replace () {
// let m = document.getElementById("string").value;
//
// let c = message.innerText;
//
//
// c = c.replace(holder ,m );
// holder = m;
// message.innerText = c;
// }


let arrloop = document.getElementById("arr");
let message = document.getElementById("message");
window.onload = sWord;
let arr = ["een" , "twee" , "drie"];
let randomWord;
let  coundlocal = localStorage.getItem("count")
let count = 0;




for(let i = 0; i < arr.length; i++){
if(coundlocal <= 5){
arrloop.innerHTML += "<p class='letter'>" + arr[i] + "</p>";
}else if(coundlocal >= 5){
  arr = arr = ["leraarsopleiding" , "gemotiveerd" , "landschapsbeheer" , "gedragscode" ,"programmeren","ecologische" ,"introductie" , "middeleeuwse" , "gearresteerd" , "fascineren" , "automatisering"];
  arrloop.innerHTML = "";
  for(let i = 0; i < arr.length; i++){

  arrloop.innerHTML +="<p class='letter'>" + arr[i] + "</p>";
  }
}
}
if(coundlocal >= 10  ){
  arr = arr = ["t" , "d"];
  arrloop.innerHTML = "";
  for(let i = 0; i < arr.length; i++){

  arrloop.innerHTML +="<p class='letter'>" + arr[i] + "</p>";
  console.log("t")
}
}
let tel = 0;

let s = "";
function sWord() {
s = s.innerHTML = "";
let index = Math.floor(Math.random() * arr.length);
let word = arr[index];
randomWord = word;
word = word.toLowerCase();

let wLength = word.length;
for(let i = 0; i  < wLength; i++){
let i = Math.floor(Math.random() * word.length);

s +=word[i];

word = word.substr(0,i) + word.substr(i+1);
}

if(coundlocal == null){
coundlocal = 0;
}
message.innerHTML = "<p class='gray'>what is it word  <span class='green'>"+s+  "</span>  and the score =<span class='green reset'>" + coundlocal+ "</span></p>";


}

let resettel  ;
let int = 1;
let teller = document.getElementById("string").value;
let html = document.getElementById("count");
let counter = 20;


let oke;
document.getElementById("p").addEventListener("click" , function(){
clearInterval(oke);
});


document.getElementById("test").addEventListener("click" , run)


function run () {



  oke = setInterval(function(){

  counter--;
  int = counter
  html.innerHTML = counter
  counter = 20
  counter = int;
  if(counter <= 0){
document.querySelector(".reset").textContent = "0";
   document.querySelector(".remove").remove()
  clearInterval(oke)
  localStorage.removeItem('count');
  // location.reload(true);

   document.querySelector(".remove").remove();

  count = 0;

  clearInterval(oke)
  }
}, 1000);
}
run();
function start () {

let string = document.getElementById("string").value;

if(string == randomWord){

counter = 20;
}else {
  tel++;



  if(tel == 1){
  document.getElementById("tel").innerHTML = "je hebt "+tel+" fout " + " als de teller op 3 staat game over";
}else {
    document.getElementById("tel").innerHTML = "je hebt "+tel+" fouten " + " als de teller op 3 staat game over";
}
  console.log(tel)
if(tel == 3){
document.getElementById("tel").innerHTML = "Game Over";
localStorage.removeItem('count');
function reset2 () {
location.reload(true);
}
setTimeout(reset2 , 5000)
}
}
if(string.toLowerCase() === randomWord){
message.innerHTML = randomWord;
count++;
coundlocal = count
localStorage.setItem("count", count);
if(coundlocal == 5){
count = coundlocal;
arr = ["test"];
arr = arr = ["leraarsopleiding" , "gemotiveerd" , "landschapsbeheer" , "gedragscode" ,"programmeren","ecologische" ,"introductie" , "middeleeuwse" , "gearresteerd" , "fascineren" , "automatisering"];
arrloop.innerHTML = "";
for(let i = 0; i < arr.length; i++){

arrloop.innerHTML += arr[i] + "<br>";
}
}
sWord();

}else {

}
if(string == ""){
message.innerHTML += "<p class='not'>sorry dit veld mag niet leeg zijn</p>";
setTimeout(reset , 3000);
}
if(string == "no"){
message.innerHTML = "<p class='not'>het woord was  " + randomWord + "</p>";
tel  = tel
setTimeout(reset , 3000);
}
function reset ()  {
message.innerHTML = randomWord
setTimeout(sWord , 5000)
}

}

function setCounter () {
let user = prompt("wil je de counter op null zetten")
if(user === "ja"){
localStorage.removeItem('count');
location.reload(true)
}
}



function reset1 ()  {
location.reload(true)
}
