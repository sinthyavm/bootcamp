document.getElementById("cabecera").innerHTML="Variables en JavaScript"
var n1="jose";
var n2="Zapata";
var union=n1 +" "+ n2 ;
var dato = "Operaciones con Caracteres"
var dato = dato + n1 +" + " + n2+" = "+ union;

document.getElementById("salida1").innerHTML=union;
var edad = 48;
var dato1 = "El señor" + union + "tiene"+edad+"años"

document.getElementById("salida2").innerHTML=dato1;

var dato2 = dato1.toLocaleUpperCase()
document.getElementById("salida3").innerHTML=dato2;

var dato3 = dato1.toLocaleUpperCase()
document.getElementById("salida4").innerHTML=dato3;

var dato4 = typeof(dato1)
document.getElementById("salida5").innerHTML=dato4;