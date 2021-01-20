let arr_dagen = ["zondag" , "maandag" , "dinsdag" , "woensdag" , "donderdag" , "vrijdag" , "zaterdag"];
let arr_maand = ["jan" , "feb" , "maart" , "april" , "mei" ,"juni" , "juli" ,"aug" , "sep" , "okt" , "nov" , "dec"];
let control = true;
function del (){
if(control){
if(document.querySelector(".somedata") != null){
document.querySelector("#countdown").remove();
}
control = false;
}
}
function back () {
 control = true
if(control){
if(document.querySelector(".somedata") != null){
document.querySelector(".somedata").id = "countdown";


 document.querySelector('.somedata').classList.add("rand_style");
}else {
location.reload(true)
}

 }

}


document.getElementById("klok").addEventListener("click" , function (){
document.getElementById('klok').classList.add("mooi");


// document.querySelector(".somedata1").id = "klok";
});

document.getElementById("klok").addEventListener("dblclick" , function (){
document.getElementById('klok').classList.remove("mooi");

});
let oke = setInterval(fun , 1000);
function fun () {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let uur = date.getHours();
  let dag = date.getDay();
  let maand = date.getMonth();
  let datum = date.getDate();
  let jaar = date.getFullYear();
  if(sec <= 9){
  sec =  "0" + sec;
  }
  if(min <= 9){
  min = "0" + min;
  }
  if(uur <= 9){
  uur = "0" + uur;
  }
  document.getElementById("klok").innerHTML = "<div class='style_js'><p>het is vandaag " +arr_dagen[dag] +" "+datum+" "+ arr_maand[maand]+" "+jaar+"</p>" +uur +"uur "+min +" min   "+ sec + " sec</div>";
}

let intvl
let countdown = document.querySelector(".countdown");


let launchDate = new Date("2022,1,1").getTime();

intvl = setInterval(function (){

let now = new Date().getTime();
let dis = launchDate - now
let days = Math.floor(dis / (1000 *60 *60 * 24));
let hours = Math.floor((dis % (1000 *60 *60 * 24))/(1000 *60 *60));
let min = Math.floor((dis % (1000 *60 * 60))/(1000 *60));
let sec = Math.floor((dis % (1000 *60))/1000);
if(days <= 0 && hours <= 0 && min <= 0 && sec <= 0){

clearInterval(intvl);

document.querySelector("#countdown").remove()
document.querySelector(".happy").innerHTML = "happy New Year";

}

// console.log(dis++)
// document.querySelector.addEventListener("click" , function (){
//
// })
if(launchDate <= 0){

document.querySelector(".countdown").textContent = "happy"
}


if(document.getElementById("countdown")){
document.getElementById("countdown").innerHTML = "<div  class='countdown'>aftellen tot 2022  nog " + days +" dagen "+ hours + " uren "+min+" min "+" sec " +sec+ "</div>"
}

},1000)
