var enviar = document. getElementById("enviar");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");

enviar.addEventListener("click",captura);

function captura(e){
    e.preventDefault();
    var resultado = num1.value + " , "+ num2.value + " , "+num3.value + " , "+num4.value;
    document.getElementById("salida1").innerHTML=resultado;
}