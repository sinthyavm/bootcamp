
document.getElementById("cabecera").innerHTML="<h1>Programacion en JavaScrip:<br><span class='sub'> Tabla de dividir</span></h1>";
var enviar = document.getElementById("enviar");
var borrar = document.getElementById("borrar");
var numero = document.getElementById("numero");
enviar.addEventListener("click", tabla);
borrar.addEventListener("click", borrado);
function borrado (e) {        
        var completo= "";
        document.getElementById("salida1").innerHTML=completo;       
    };

function tabla(e) {
    e.preventDefault()
    var frase_completa = "<p>";
    var num =Number(numero.value);
    var fila="";
    for (let i=1 ; i<13 ; i=i+1){
        var resultado = (num / i).toFixed(2);
        fila = fila + num +" ÷ "+ i +" = "+resultado +"<br>";
    } 
    document.getElementById("salida1").innerHTML=fila; 
}