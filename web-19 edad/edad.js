document.getElementById("cabecera").innerHTML="<h1>Programación en JavaScrip:<br><span class='sub'> Calculo de La Edad</span></h1>";
var enviar = document.getElementById("enviar");
var borrar = document.getElementById("borrar");
var numero = document.getElementById("fechnac");
enviar.addEventListener("click", edad);
borrar.addEventListener("click", borrar);
function borrar (e) {        
        var completo= "";
        document.getElementById("salida1").innerHTML=completo;       
    };

function edad(e) {
    e.preventDefault()
    const fechaActual = new Date();
    const aaaActual =fechaActual.getFullYear();
    const mesActual =fechaActual.getMonth()+1;
    const diaActual =fechaActual.getDate();

    const aaaNac = parseInt (String(fechnac.value).substr(0,4));
    const mesNac = parseInt(String(fechnac.value).substr(5,2));
    const diaNac = parseInt(String(fechnac.value).substr(8,2));

    var aaaedad = aaaActual - aaaNac;
    var mesedad = mesActual -mesNac;
    var diaedad = diaActual - diaNac;
    var edad =0

    if (mesedad > 0){
        var edad = aaaedad;
    }

    else {
        if (mesedad < 0){
            var edad = aaaedad - 1;
        }

        else{
            if (diaedad < 0){
                var edad = aaaedad - 1;
            }
            else{
                var edad =aaaedad;
            }
        }
    }

    var res = "Esta persona tiene a la Fecha " + edad + " Años Cumplidos";
    
    document.getElementById("salida1").innerHTML=res;
     
}
//document.getElementById("salida1").innerHTML=f;
//    var f = "Año : "+aaaNac +"<br>";
// var f = f + "Mes : "+mesNac +"<br>";
// var f = f + "Dia : "+diaNac +"<br>";
