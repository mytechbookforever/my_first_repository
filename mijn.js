let doc = document.getElementById("doc");
function fun() {


  var x = document.getElementById("mySelect").options;
for(let i = 0; i < x.length; i++){
x[i].onclick = function () {
if(this.value == "plus"){
plus()
}
}
}
}

function plus () {
console.log("my")
let een = document.getElementById("een").value;
let twee = document.getElementById("twee").value;
let doc = document.getElementById("doc").innerHTML = Number(een) + Number(twee);

doc.innerHTML =  een;
}
