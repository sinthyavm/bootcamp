document.getElementById("cabecera").innerHTML="<h1>Calculo de Sucecion <br><span class='sub'>Fibonacci</span></h1>";
var enviar = document.getElementById("enviar");
var borrar = document.getElementById("borrar");
var numero = document.getElementById("numero");
enviar.addEventListener("click", secuencia);
borrar.addEventListener("click", borrar);

function borrar (e) {
    var completo= "";
    document.getElementById("salida1").innerHTML=completo;

};

function secuencia(e) {
    e.preventDeafault()

    var n1 =1; 
    var n2 =1;
    var r  =0;
    
    for (var i =0; i <100; i++){
    r = n1 + n2;
    n1=n2;
    n2=r;
}
    document.getElementById("salida1").innerHTML=(r + "<br/>");
}
