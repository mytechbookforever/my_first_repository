let doc = document.getElementById("doc");



function fun() {


  var x = document.getElementById("mySelect").options;
for(let i = 0; i < x.length; i++){
x[i].onclick = function () {
if(this.value == "plus"){
plus()
}// if end
}//onclick end
}//for llop end
}//fun end

function plus () {
let one = document.getElementById("een").value;
let two = document.getElementById("twee").value;
let doc = document.getElementById("doc").innerHTML = Number(one) + Number(two);

doc.innerHTML =  one;
}
