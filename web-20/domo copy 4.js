const caja1 = document.createAttribute("div");
const caja2 = document.createAttribute("div");
const caja3 = document.createAttribute("div");
const caja4 = document.createAttribute("div");

caja1.style.backgraud = "yellow";
caja1.style.wedth = "100px";
caja1.style.height = "100px";

caja2.style.backgraud = "red";
caja2.style.wedth = "100px";
caja2.style.height = "100px";


caja3.style.backgraud = "cyan";
caja3.style.wedth = "100px";
caja3.style.height = "100px";

const elementoPadre = document.querySelector(".padre");
elementoPadre.appendChild(caja1);
elementoPadre.appendChild(caja2);
elementoPadre.appendChild(caja3);