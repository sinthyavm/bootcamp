document.getElementById("cabecera").innerHTML="<h1>Programacion en JavaScrip:<br>Frases Celebres</h1>";
const per1 = document.getElementById("per1");
const per2 = document.getElementById("per2");
const per3 = document.getElementById("per3");
const per4 = document.getElementById("per4");
const per5 = document.getElementById("per5");
const per6 = document.getElementById("per6");
const per7 = document.getElementById("per7");
const per8 = document.getElementById("per8");
const enviar = document.getElementById("enviar");

enviar.addEventListener("click", ejecutar);

var nombre = [
    "Benjamin Franklin",
    "Calderón de la Barca",
    "Abraham Lincoln",
    "Charlie Chaplin",
    "Albert Einstein",
    "Martin Luther King",
    "Mahatma Gandhi",
    "Papa Francisco",
    "John F. Kennedy",
    "Jorge Luis Borges"
]
var foto = [
"images/per1.png",
"images/per2.png",
"images/per3.png",
"images/per4.png",
"images/per5.png",
"images/per6.png",
"images/per7.png",
"images/per8.png",
"images/per9.png",
"images/per10.png",
];

var frase = [ '" No reflexiones sobre los defectos de los demás: no es asunto tuyo. No interfieras en la vida de los demás: no es asunto tuyo. No pienses qué pensarán los demás: no es asunto tuyo. "<br><br><br><span class="autor">Benjamín Franklin</span>',
'" ¿Qué es la vida? Un frenesí. ¿Qué es la vida? Una ilusión; una sombra, una ficción y el mayor bien es pequeño. ¡Que toda la vida es sueño y los sueños, sueños son!. " <br><br><br><span class="autor">Calderón de la Barca</span>',  
'" Puedes engañar a todo el mundo algún tiempo. Puedes engañar a algunos todo el tiempo. Pero no puedes engañar a todo el mundo todo el tiempo. "<br><br><span class="autor">Abraham Lincoln</span>',
'" La vida es una obra de teatro que no permite ensayos; por eso canta, ríe, baila, llora y vive intensamente cada momento de tu vida…antes que el telón baje y la obra termine sin aplausos. "<br><br><br><span class="autor">Charlie Chaplin</span>' ,
'" Si mi teoría de la relatividad es exacta, los alemanes dirán que soy alemán y los franceses que soy ciudadano del mundo. Pero si no, los franceses dirán que soy alemán, y los alemanes que soy judío. "<br><br><br><span class="autor">Albert Einstein</span>',
'" Tengo un sueño, un solo sueño, seguir soñando. Soñar con la libertad, soñar con la justicia, soñar con la igualdad y ojalá ya no tuviera necesidad de soñarlas. "<br><br><br><span class="autor">Martin Luther King</span>',
'" Cuando me desespero, recuerdo que a lo largo de la historia el camino de la verdad y el amor siempre ha ganado. Ha habido tiranos y asesinos, y por un tiempo, pueden parecer invencibles, pero al final, siempre caen. Piense en ello siempre. "<br><br><br><span class="autor">Mahatma Gandhi</span>',
'" Es algo feo cuando se ve un cristiano que no quiere abajarse, que no quiere servir. Un cristiano que se pavonea por todos lados, ¡Ese no es un cristiano! ¡Ese es un pagano! ¡El cristiano sirve, se abaja! ¡Hagamos de tal modo que estos nuestros hermanos nunca se sientan solos! "<br><br><br><span class="autor">Papa Francisco</span>',
'" No preguntes qué puede hacer tu país por ti… pregunta qué puedes hacer por tu país. " <br><br><br><span class="autor">John Fitzgerald Kennedy</span>"',
'" Todo lo que nos sucede, incluso nuestras humillaciones, nuestras desgracias, nuestras vergüenzas, todo nos es dado como materia prima, como barro, para que podamos dar forma a nuestro arte. "<br><br><br><span class="autor">Jorge Luis Borges"'
];

function ejecutar(e) {
    e.preventDefault();
    
    if(document.getElementById("per1").checked){
        var indice=0;
    }
    if(document.getElementById("per2").checked){
        var indice=1;
    }
    if(document.getElementById("per3").checked){
        var indice=2;
    }
    if(document.getElementById("per4").checked){
        var indice=3;
    }
    if(document.getElementById("per5").checked){
        var indice=4;
    }
    if(document.getElementById("per6").checked){
        var indice=5;
    }
    if(document.getElementById("per7").checked){
        var indice=6;
    }
    if(document.getElementById("per8").checked){
        var indice=7;
    }
    if(document.getElementById("per9").checked){
        var indice=8;
    }
    if(document.getElementById("per10").checked){
        var indice=9;
    }
    let buzon = "";  
    buzon = frase[indice];     
    document.getElementById("pagina2").innerHTML = buzon + "<br><hr>";   
    var_imagen(foto[indice],150)
} 
    
function var_imagen(src,width){
    var a = document.createElement('img');
    a.src = src;
    a.width = width;
    document.getElementById("pagina1").innerHTML = "";
    pagina1.appenChild(a);
}   