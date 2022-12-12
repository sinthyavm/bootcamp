var enviar = document. getElementById("enviar");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var mascota = document.getElementById("mascota");

enviar.addEventListener("click",captura);

function captura(e){
    e.preventDefault();
    switch (mascota.value){
        case "lagarto":
            var mensaje = "usted tiene un animal"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "perro":
            var mensaje = "usted tiene otra mascota"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        default:
            document.getElementById("caja").innerHTML="tengo mascotas";
    }

}