document.getElementById("cabecera").innerHTML="<h1> Curso de JavaScript <br> Con html <h1/>" ;
var num1 = 45;
var num2 = 97;
var num3 = 120;
var num4 = 152;
var resultado = "";

if(num1 > num2){
    resultado = num1 + "es mayor que " + num2;
    document.getElementById("salida1").innerHTML=resultado
}

if(num1 > num2){
    resultado = num1 + "es mayor que " + num2;
    document.getElementById("salida2").innerHTML=resultado
}else
{
        resultado = num1 + "no es mayor que " + num2;
        document.getElementById("salida2").innerHTML=resultado
    }
if(num3 > num4){
    resultado = num1 + "es mayor que " + num2;
    document.getElementById("salida3").innerHTML=resultado
}
else if(num3 == num4){
    resultado = num3 + "es igual a " + num4;
    document.getElementById("salida3").innerHTML=resultado
}else{
    resultado = num3 + "es mayor que " + num4;
    document.getElementById("salida3").innerHTML=resultado
}
var mascota="gato";
switch (mascota){
    case "lagarto":
        document.getElementById("salida4").innerHTML="Tengo un lagarto";
        break;
    case "perro":
        document.getElementById("salida4").innerHTML="Tengo un perro";
        break;
    case "gato":
        document.getElementById("salida4").innerHTML="Tengo un gato";
        break;
    case "loro":
        document.getElementById("salida4").innerHTML="Tengo un loro";
        break;
    case "serpiente":
            document.getElementById("salida4").innerHTML="Tengo un serpiente";
            break;
    default:
        document.getElementById("salida4").innerHTML="No tengo mascotas";
 }