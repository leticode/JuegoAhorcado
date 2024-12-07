let contenedorPrincipal = document.querySelector(".contenedorPrincipal");

let letras = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (let letra of letras){
    let contenedorTeclado = document.createElement("div");
    contenedorTeclado.className = "contenedorTeclado";
    contenedorPrincipal.appendChild(contenedorTeclado);
    let teclado = document.createElement("button");
    teclado.className = "btnTeclado";
    teclado.textContent = letra;
    contenedorTeclado.appendChild(teclado);
}

