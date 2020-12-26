let arr_dagen = ["zondag" , "maandag" , "dinsdag" , "woensdag" , "donderdag" , "vrijdag" , "zaterdag"];
let arr_maand = ["jan" , "feb" , "maart" , "april" , "mei" ,"juni" , "juli" ,"aug" , "sep" , "okt" , "nov" , "dec"];
document.getElementById("klok").addEventListener("click" , function (){
document.getElementById('klok').classList.add("mooi");
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
  document.getElementById("klok").innerHTML = "<div class='style_js'><p>het is vandaag " +arr_dagen[dag] +" de "+datum+"st "+arr_maand[maand]+" "+jaar+"</p>" +uur +"uur "+min +" min   "+ sec + " sec</div>";
}
