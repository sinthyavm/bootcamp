var enviar = document. getElementById("enviar");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var mascota = document.getElementById("mascotas");

enviar.addEventListener("click",captura);

function captura(e){
    e.preventDefault();
    switch (mascotas.value){
        case "perro":
            var mensaje = "usted tiene otra mascota"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "loro":
            var mensaje = "Usted tiene un loro charlatan"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "gato":
            var mensaje = "Usted tiene un hermoso gato"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "pato":
            var mensaje = "Usted tiene un fantastico pato"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "ardilla":
            var mensaje = "Usted tiene una hermosa ardilla"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        default:
            document.getElementById("caja").innerHTML="tengo mascotas";
    }
}
function captura(e){
    e.preventDefault();
    switch (distrito.value){
        case "La Victoria":
            var mensaje= "vive en un hermoso Distrito"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "Surco":
            var mensaje= "Es un hermoso lugar"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "Callao":
            var mensaje= "Ten cuidado es un lugar peligroso"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "San luis":
            var mensaje= "Que maravillo distrito"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        case "Chorillos":
            var mensaje= "Me encanta ese lugar"
            document.getElementById("salida3").innerHTML=mensaje;
            break;
        default:
            document.getElementById("caja").innerHTML="distrito";
        }
}
    
