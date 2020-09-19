

document.getElementById("btn").onclick = function () {


  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;



let date1 = new Date(num1); // nu
let date2 = new Date (num2); // toekomst


let doc1 = document.getElementById("doc1");
let x = date2.getTime() - date1.getTime()
x = x  / (1000 * 3600 * 24);

let y = Math.floor(x)
doc1.innerHTML =  "left days " + y;





}


         var bgColor = '#' + Math.random().toString(16).substr(-6);

         // console.log(bgColor.length)
