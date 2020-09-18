
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
let doc = document.getElementById("doc").innerHTML  = e + res;

}



function numcheck (m) {
mess(!isNaN(event.key));
return !isNaN(event.key);
}

function mess (m) {
if(m){
if(!isNaN == true){
doc.innerHTML = m;
}
}else {
doc.innerHTML = "<p class='denied'>access denied</p>";
setTimeout(function  () {
setTimeout(time , 2000)
doc.innerHTML = "<p class='denied'>access denied</p>";
});


function time(){
doc.innerHTML = "<p</p>";
}
}
}
