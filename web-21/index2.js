const enviar = document.getElementById('enviar');
enviar.addEventListener("click",ejecutar);

function ejecutar(e) {
    e.preventDefault();    
    
    const pagina = document.querySelector('body');
    const cajaGlobal = document.querySelector('main');
    pagina.style.margin = "0px";
    pagina.style.background = "rgb(200,200,200)";
    pagina.style.width = '500px';
    pagina.style.margin = 'auto';
    pagina.style.margin = 'auto';
    pagina.style.textAlign = 'center';
    pagina.style.marginTop = "50px";

    // Creando un nuevo div
    const elementoPadre = document.querySelector(".padre");
    elementoPadre.style.display = 'flex';
    elementoPadre.style.justifyContent = 'space-between';
    
    const caja1 = document.createElement('div');
    const textoCaja1 = document.createTextNode("Caja1");
    elementoPadre.appendChild(caja1);
    caja1.appendChild(textoCaja1);

    const caja2 = document.createElement('div');
    const textoCaja2 = document.createTextNode("Caja2");
    elementoPadre.appendChild(caja2); 
    caja2.appendChild(textoCaja2);
    
    const caja3 = document.createElement('div');
    const textoCaja3 = document.createTextNode("Caja3");
    elementoPadre.appendChild(caja3); 
    caja3.appendChild(textoCaja3);
    
    
    const caja4 = document.createElement('div');
    const textoCaja4 = document.createTextNode("Caja4");
    elementoPadre.appendChild(caja4); 
    caja4.appendChild(textoCaja4);
    
    elementosPorEtiqueta = document.getElementsByTagName('div');
    pagina.style.background = "rgb(240,240,240)";
    
    cajaGlobal.style.border = "1px solid";
    cajaGlobal.style.padding = "20px";

    cajaGlobal.style.background = 'rgb(150,255,255)';
    
    elementosPorEtiqueta[1].style.background = 'rgb(150,150,255)';
    elementosPorEtiqueta[1].style.width = '100px';
    elementosPorEtiqueta[1].style.color = 'white';
    elementosPorEtiqueta[1].style.height = '30px';
    elementosPorEtiqueta[1].style.fontSize = '24px';
    elementosPorEtiqueta[1].style.borderRadius = '15px';

    elementosPorEtiqueta[1].style.boxShadow = "3px 3px 10px black";
    
    elementosPorEtiqueta[2].style.background = 'rgb(180,180,0)';
    elementosPorEtiqueta[2].style.width = '100px';
    elementosPorEtiqueta[2].style.color = 'white';
    elementosPorEtiqueta[2].style.fontSize = '24px';
    elementosPorEtiqueta[2].style.borderRadius = '15px';
    elementosPorEtiqueta[2].style.boxShadow = "3px 3px 10px black";
    
    elementosPorEtiqueta[3].style.background = 'rgb(0,180,180)';
    elementosPorEtiqueta[3].style.width = '100px';
    elementosPorEtiqueta[3].style.color = 'white';
    elementosPorEtiqueta[3].style.fontSize = '24px';
    elementosPorEtiqueta[3].style.borderRadius = '15px';
    elementosPorEtiqueta[3].style.boxShadow = "3px 3px 10px black";
    
    elementosPorEtiqueta[4].style.background = 'rgb(180,0,180)';
    elementosPorEtiqueta[4].style.width = '100px';
    elementosPorEtiqueta[4].style.color = 'white';
    elementosPorEtiqueta[4].style.fontSize = '24px';
    elementosPorEtiqueta[4].style.borderRadius = '15px';
    elementosPorEtiqueta[4].style.boxShadow = "3px 3px 10px black";
}