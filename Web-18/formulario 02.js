document.getElementById("cabecera").innerHTML="<h1> Programacion en JavaScript:<br> Funciones 2</h1>";
var enviar = document.getElementById("enviar");
var borrar = document.getElementById("borrar");
var nombres = document.getElementById("numero");

enviar.addEventListener("click", tabla);
borrar.addEventListener("click",borrado);

function borrado (e) {
    var completo = "";
    document.getElementById("salida1").innerHTML=completo;
}
function construccion (e) {
    e.preventDefault();
    var frase_completa = "<p>";
    frase_completa = frase_completa + frase1();
    frase_completa = frase_completa + frase2();
    frase_completa = frase_completa + frase3();
    frase_completa = frase_completa + frase4();

    document.getElementById("salida1").innerHTML=frase_completa;
}
function frase1(){
    var nom = nombres.value;
    var apel = apellidos.value;
    var genero = "";
    if (document.getElementById("sexo1").checked){
        genero = "Señor";    
    }
    else{
        genero = "Señora"
    }
    return genero + " "+apel+ " " + nom;
}
function frase2(){
    var ff = fechnac.value;
    return " nacio el " + ff;
}
function frase3(){
    var dis = distrito.value;
    var conector = "";
    if (document.getElementById("sexo1").checked){
        conector = " domiciliado ";
    }
    else
    {
        conector = " domiciliada ";
    }
 return conector + "en el distrito de " + dis;
}
function frase4(){
    var mas = mascota.value;
    var comentario = "";
    if(mas != "no tiene"){
        comentario = " de mascota";
    }
    else{
        comentario = " mascota";
    }
    return ", posee un(a) " + "<span class='morado'>" + mas + "</span>" + comentario + "</p>";

}