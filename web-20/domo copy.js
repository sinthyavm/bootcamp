let elementoPorId = document.querySelector("#parrafo1");
elementoPorId.innerHTML = "Reemplazando por Query"; 

let elementoPorClase = document.querySelectorAll(".parrafo");
elementoPorClase[1].innerHTML = "hola";

elementoPorEtiqueta = document.querySelectorAll("p");
elementoPorEtiqueta[2].innerHTML = "trabajando directamente con los";