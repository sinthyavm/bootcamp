document.getElementById("cabecera").innerHTML="<h1> Curso de JavaScript <br> Arreglos </h1>";
var numeros = [1,2,3,4,5,6];
var texto="Relaciono de Elementos :<br>";
texto = texto + numeros;
document.getElementById("salida1").innerHTML=texto;

var estudiantes =  ["Jose", "Maria", "Roberta", "Andrea", "Beatriz"];
var texto = "Relacion de los Elementos del Arreglos <br>";
texto = texto + "1.-" + estudiantes[0]+"<br>";
texto = texto + "2.-" + estudiantes[1]+"<br>";
texto = texto + "3.-" + estudiantes[2]+"<br>";
texto = texto + "4.-" + estudiantes[3]+"<br>";
texto = texto + "5.-" + estudiantes[4]+"<br>";
document.getElementById("salida2").innerHTML=texto;

var texto = "Numero de Elementos <br> del arreglo: estudiantes <br>";
texto = texto + estudiantes.length;
document. getElementById("salida3").innerHTML=texto;

var texto = "ordenamiento de elementos <br> del arreglo: estudiantes <br>";
estudiantes = estudiantes.sort();
texto = texto + "1.-" + estudiantes[0] + "<br>";
texto = texto + "2.-" + estudiantes[1] + "<br>";
texto = texto + "3.-" + estudiantes[2] + "<br>";
texto = texto + "4.-" + estudiantes[3] + "<br>";
texto = texto + "5.-" + estudiantes[4] + "<br>";
document.getElementById("salida4").innerHTML = texto;

var texto = "Ubicacion de Andrea en el arreglos:<br> estudiantes <br>";
var posicion = estudiantes.indexOf("Andrea");
texto = texto + posicion;
document.getElementById("salida5").innerHTML = texto;