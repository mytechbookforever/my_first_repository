let doc = document.getElementById("doc");
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
let doc = document.getElementById("doc").innerHTML = Number(one) + Number(two);

doc.innerHTML =  one;
}


function min () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let doc = document.getElementById("doc").innerHTML = Number(one) - Number(two);

doc.innerHTML =  one
}

function keer () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let doc = document.getElementById("doc").innerHTML = Number(one) * Number(two);

doc.innerHTML =  one
}

function deel () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let doc = document.getElementById("doc").innerHTML = Number(one) / Number(two);

doc.innerHTML =  one
}
