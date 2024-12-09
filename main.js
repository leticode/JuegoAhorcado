let palabraElegida = elegirPalabra();
let palabraQueHayQueAdivinar = palabraElegida.nombre;
let ayuda = palabraElegida.descripcion;
let ayudaPalabra = document.querySelector(".ayudaPalabra");
ayudaPalabra.textContent = ayuda;
let letrasPresionadas = [];
let fallos = 0;
const maximoDeFallos = 6;
actualizarFallos();
crearTeclado();
actualizarPalabraAdivinada();

function elegirPalabra() {
    let palabras = [
        { nombre: "Tigre", descripcion: "Un felino enigmático, símbolo de poder y agilidad" },
        { nombre: "Jirafa", descripcion: "Una figura elegante que observa el mundo desde las alturas" },
        { nombre: "Delfin", descripcion: "Un viajero del mar, conocido por su curiosidad" },
        { nombre: "Elefante", descripcion: "El gigante terrestre con una memoria excepcional" },
        { nombre: "Canguro", descripcion: "Un saltador incansable que lleva su hogar consigo" },
        { nombre: "Correr", descripcion: "Un impulso que te lleva hacia adelante" },
        { nombre: "Saltar", descripcion: "Un gesto que desafía la gravedad" },
        { nombre: "Leer", descripcion: "Una forma de viajar sin moverse" },
        { nombre: "Escribir", descripcion: "Un acto de dar forma a los pensamientos" },
        { nombre: "Dormir", descripcion: "El respiro del cuerpo y la mente" },
        { nombre: "Espejo", descripcion: "Un reflejo de lo que somos, y de lo que no somos" },
        { nombre: "Mochila", descripcion: "Un compañero silencioso en el camino" },
        { nombre: "Silla", descripcion: "Un soporte que ofrece descanso al cuerpo en su constante movimiento" },
        { nombre: "Telefono", descripcion: "Un conector invisible que acorta distancias y acerca voces" },
        { nombre: "Biblioteca", descripcion: "Un refugio para aquellos que buscan respuestas" },
        { nombre: "Playa", descripcion: "El lugar donde la tierra y el mar se encuentran en silencio" },
        { nombre: "Escuela", descripcion: "Un espacio donde se cultivan las semillas del futuro" },
        { nombre: "Parque", descripcion: "Un descanso en medio del caos" },
        { nombre: "Museo", descripcion: "Un viaje al pasado, congelado en el tiempo" },
        { nombre: "Pizza", descripcion: "Un delicioso platillo italiano con masa, queso y toppings." },
        { nombre: "Sopa", descripcion: "Un alimento líquido que reconforta y nutre." },
        { nombre: "Hamburguesa", descripcion: "Un platillo rápido con carne, pan y diversos ingredientes." },
        { nombre: "Ravioles", descripcion: "Un tipo de pasta rellena, generalmente acompañada de salsa." },
        { nombre: "Empanadas", descripcion: "Un bocado lleno de tradición y sabor." },
        { nombre: "Energia", descripcion: "La fuerza que impulsa las actividades de todos los días." },
        { nombre: "Alegria", descripcion: "La luz que ilumina los momentos más oscuros" },
        { nombre: "Amistad", descripcion: "Un lazo que va más allá de las palabras" },
        { nombre: "Tristeza", descripcion: "La sombra que se posa en el corazón" },
        { nombre: "Paciencia", descripcion: "La calma que se encuentra en la espera" }
    ];
    let indiceAleatorio = Math.floor(Math.random() * palabras.length); //Elije elemento al azar del array
    let objetoPalabra = palabras[indiceAleatorio]; 
    return objetoPalabra;
}

function crearTeclado() {
    let contenedorTeclado = document.querySelector(".contenedorTeclado");
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let letra of letras) {
        let tecla = document.createElement("button");
        tecla.className = "btnTeclado";
        tecla.textContent = letra;
        contenedorTeclado.appendChild(tecla);
        tecla.addEventListener("click", () => {
            if(tecla.className == "btnTeclado" && fallos <= maximoDeFallos) {
                letrasPresionadas.push(letra);
                tecla.className = "presionada";
                if (palabraQueHayQueAdivinar.toLocaleLowerCase().includes(letra) === false) {
                    fallos++;
                    actualizarFallos(); 
                    if (fallos > maximoDeFallos) {
                        mostrarOverlay("PERDISTE " + " la palabra era : " + palabraQueHayQueAdivinar, "img/lost.gif");
                    }
                }
                actualizarPalabraAdivinada();
            }
        });
    }
}


function actualizarPalabraAdivinada() {
    let palabraIntentada = "";
    for (let letra of palabraQueHayQueAdivinar) {
        if (letrasPresionadas.includes(letra.toLowerCase())) { // Se fija si letra ya esta en letra presionada
            palabraIntentada += letra;
        }
        else{
            palabraIntentada += "_";
        }
    }
    let contenedorPalabra = document.querySelector(".contenedorPalabra");
    contenedorPalabra.textContent = palabraIntentada;

    if (palabraIntentada === palabraQueHayQueAdivinar){
        mostrarOverlay("Ganaste", "img/victory.gif");
    }
}
function actualizarFallos() {
    let contenedorFallos = document.querySelector(".contenedorFallos");
    contenedorFallos.textContent = "Fallos: " + fallos + " / " + (maximoDeFallos + 1);
    let hangmanImg = document.querySelector("#hangmanImg");
    if (fallos <= maximoDeFallos) {
        hangmanImg.src = "img/hangman-" + fallos + ".svg" ;
    }
}

function mostrarOverlay(texto, img) {
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
    let textoOverlay = document.createElement("div");
    textoOverlay.textContent = texto;
    overlay.appendChild(textoOverlay);
    let imagen = document.createElement("img");
    imagen.src = img;
    imagen.className = "imgGiftCara"
    overlay.appendChild(imagen);
    let btnOverlay = document.createElement("button");
    btnOverlay.textContent = "Volver a jugar";
    overlay.appendChild(btnOverlay);
    btnOverlay.addEventListener("click", () => {
        location.reload();
    })
}


