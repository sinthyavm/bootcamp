var enviar = document.getElementById("enviar");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var distrito = document.getElementById("distrito");
var edad = document.getElementById("edad");
var mascotas = document.getElementById("mascotas");

enviar.addEventListener("click",captura);

enviar.addEventListener("click",captura);

function captura(e){
    e.preventDefault();
    switch (mascotas.value){
        case "perro":
            var mensaje = "usted tiene otra mascota"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "loro":
            var mensaje = "Usted tiene un loro charlatan"
            document.getElementById("scaja").innerHTML=mensaje;
            break;
        case "gato":
            var mensaje = "Usted tiene un hermoso gato"
            document.getElementById("scaja").innerHTML=mensaje;
            break;
        case "pato":
            var mensaje = "Usted tiene un fantastico pato"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "ardilla":
            var mensaje = "Usted tiene una hermosa ardilla"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        default:
            document.getElementById("caja2").innerHTML="tengo mascotas";
    }
}
function captura(e){
    e.preventDefault();
    switch (distrito.value){
        case "La Victoria":
            var mensaje= "vive en un hermoso Distrito"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "Surco":
            var mensaje= "Es un hermoso lugar"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "Callao":
            var mensaje= "Ten cuidado es un lugar peligroso"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "San luis":
            var mensaje= "Que maravillo distrito"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        case "Chorillos":
            var mensaje= "Me encanta ese lugar"
            document.getElementById("caja").innerHTML=mensaje;
            break;
        default:
            document.getElementById("caja2").innerHTML="distrito";
        }

    /*var resultado = apellido.value + " , " + nombres.value;
    document.getElementById("mensaje").innerHTML=resultado;*/
}
