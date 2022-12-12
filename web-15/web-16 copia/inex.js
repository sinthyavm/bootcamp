document.getElementById("cabecera").innerHTML="<h1>  Curso de JavaScript - Variables </h1>";
var numero1="45";
var numero2="84";
var resultado = Number (numero1) < Number(numero2);
var texto=numero1 + "Es menor que "+numero2+ "+ "+resultado;
document.getElementById("salida1").innerHTML=texto;

var resultado = Number (numero1) > Number(numero2);
var texto=numero1 + "Es mayor que "+numero2+ "+ "+resultado;
document.getElementById("salida2").innerHTML=texto;

var resultado = Number (numero1) == Number(numero2);
var texto=numero1 + "Es igual a "+numero2+ "+ "+resultado;
document.getElementById("salida3").innerHTML=texto;

var resultado = Number (numero1) != Number(numero2);
var texto=numero1 + "Es diferente a "+numero2+ "+ "+resultado;
document.getElementById("salida4").innerHTML=texto;

var numero3 = "150";
var numero4 = "96";

resultado = (Number(numero2) <Number(numero4)) && (Number(numero1)<Number(numero3));
var texto="("+numero2+"<"+numero4 + ")"+ "&&" +"("+ numero1 +" < "+numero3+")"+" ---> "+resultado;
document.getElementById("salida5").innerHTML=texto;
