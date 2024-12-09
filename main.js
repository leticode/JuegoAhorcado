let contenedorTeclado = document.querySelector(".contenedorTeclado");
let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let palabras = ["pepino", "elefante", "libro", "carpeta"];
let indiceAleatorio = Math.floor(Math.random() * palabras.length);
let palabra = palabras[indiceAleatorio];
let letrasPresionadas = [];
let contenedorPalabra = document.querySelector(".contenedorPalabra");

for (let letra of letras) {
    let tecla = document.createElement("button");
    tecla.className = "btnTeclado";
    tecla.textContent = letra;
    contenedorTeclado.appendChild(tecla);
    tecla.addEventListener("click", () => {
        if(tecla.className == "btnTeclado"){
            letrasPresionadas.push(letra);
            tecla.className = "presionada";
            actualizarPalabra();
            console.log(letra);
        }
    });
}



function actualizarPalabra() {
    let intento = "";
    for (let letra of palabra) {
        if (letrasPresionadas.indexOf(letra) != -1){
            intento += letra;
        }
        else{
            intento += "_";
        }
    }
    contenedorPalabra.textContent =  intento;

    if (intento === palabra){
        alert("ganaste");
    }
}


actualizarPalabra();

