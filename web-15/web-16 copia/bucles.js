document.getElementById("cabecera").innerHTML="<h1> Curso de JavaScript <br> bucles </h1>";
var texto = "Usando Intrucccion for<br>";
for (let i = 0 ; i< 5 ; i= i + 1){
    texto = texto + i + "<br>";
}
document.getElementById("salida1").innerHTML=texto;

var texto = "Tabla de multiplicar del 12 <br>";
for (let i = 0; i <=10   ; i = i+ 1){
    texto = texto + i + "x"+ 12 + " = " + i*12+"<br>";
}
document.getElementById("salida2").innerHTML=texto;
var estudiantes = ["Jose",
"Maria",
"Roberta",
"Andrea",
"Beatriz",
"Raul",
"Ramon",
"Yolanda"
];
var texto = "Usando instruccion while <br>";
let i=0;
while (i<8) {
    texto = texto + (i+1)+".-"+estudiantes[i]+"<br>";
    i = i +1;
}
document.getElementById("salida3").innerHTML=texto;
