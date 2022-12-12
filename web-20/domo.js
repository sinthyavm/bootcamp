let elementoPorId = document.getElementById("parrafo1");
elementoPorId.innerHTML = 'Frase Nueva'; 

elementoPorId.style.color = "white";
elementoPorId.style.background = "red";
elementoPorId.style.textAlign = "center";

let elementoPorClase = document.getElementsByClassName("parrafo");
elementoPorClase[1].innerHTML = "Reemplazando el 2° Parrafo";
elementoPorClase[1].style.fontSize = "24px";
elementoPorClase[1].style.width = "250px";
elementoPorClase[1].style.textAlign = "center";
elementoPorClase[1].style.background = "red";
elementoPorClase[1].style.color = "yellow"

let elementoPorEtiqueta = document.getElementsByClassName("P");
elementoPorEtiqueta[2].innerHTML ="Este es el ultimo Elemento";