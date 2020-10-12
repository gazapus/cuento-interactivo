let botonComenzar = document.getElementById("comenzar_boton");
let contenedorComenzar = document.getElementById("comenzar_contenedor");
let contenedorCuento = document.getElementsByTagName("main")[0];
let botonSiguiente = document.getElementById("siguiente_boton");
let opcionesContenedor = document.getElementById("opciones_contenedor");
let respuestaContenedor = document.getElementById("respuesta_contenedor");
let imagen = document.getElementById("imagen");
let texto = document.getElementById("texto");

const CAMINOS = [c1, c2, c3, c4]
let caminoActual = null;
let posicionActual = null;

window.onload = () => {
    botonComenzar.addEventListener("click", () => {
        desvanecer(contenedorComenzar, 1000, comenzar);
    });
}

botonComenzar.addEventListener('mouseover', () => {
    botonComenzar.classList.add('animate__pulse');
})

botonComenzar.addEventListener('mouseleave', () => {
    botonComenzar.classList.remove('animate__pulse');
})

botonSiguiente.addEventListener('click', () => {
    posicionActual++;
    mostrar();
})

botonSiguiente.addEventListener('animationend', () => {
    botonSiguiente.classList.remove("siguiente_boton_disabled");
    botonSiguiente.disabled = false;
})

botonSiguiente.addEventListener('animationstart', () => {
    botonSiguiente.classList.add("siguiente_boton_disabled");
    botonSiguiente.disabled = true;
})

function comenzar() {
    contenedorComenzar.style.display = "none";
    contenedorCuento.style.display = "flex";
    aparecer(contenedorCuento, 1000, () => cargarCamino('inicio', 0));
}

function cargarCamino(nombre, posicion) {
    caminoActual = CAMINOS.find(camino => camino.name === nombre);
    posicionActual = posicion;
    mostrar();
}

function mostrar() {
    let siguienteImagenURL = caminoActual.content[posicionActual].img;
    if (caminoActual.content[posicionActual - 1]) { // verifica si la imagen cambia
        if (siguienteImagenURL !== caminoActual.content[posicionActual - 1].img) {
            imagen.src = siguienteImagenURL;
            reaparecer(imagen, 1000);
        }
    } else {
        imagen.src = siguienteImagenURL;
        reaparecer(imagen, 1000);
    }
    texto.innerText = caminoActual.content[posicionActual].text;
    aparecer(texto, 1000);
    if (!haySiguiente()) {
        botonSiguiente.style.display = 'none';
        mostrarOpciones();
    } else {
        botonSiguiente.style.display = 'block';
    }
}

function haySiguiente() {
    return caminoActual.content.length - 1 !== posicionActual;
}

function mostrarOpciones() {
    for (let opciones of caminoActual.options) {
        var botonNuevo = document.createElement("button");
        var textoBoton = document.createTextNode(opciones.text);
        botonNuevo.appendChild(textoBoton);
        botonNuevo.classList.add("boton_opcion", "animate__animated", "animate__bounceIn");
        botonNuevo.addEventListener('click', seleccionarOpcion);
        opcionesContenedor.appendChild(botonNuevo);
    }
}

function seleccionarOpcion(e) {
    let textoOpcion = e.target.innerText;
    ocultarOpciones(textoOpcion);
    let respuesta = caminoActual.options.find(opcion => opcion.text === textoOpcion);
    respuestaContenedor.innerHTML = `<p id="respuesta" class="animate__animated animate__bounceIn">${respuesta.answer}</p>`;
    if (respuesta.next) {
        setTimeout(() => {
            opcionesContenedor.innerHTML = "";
            respuestaContenedor.innerHTML = "";
            cargarCamino(respuesta.next, respuesta.position)
        }, 3000)
    } else {
        finalizar();
    }
}

function ocultarOpciones(opcionElegida) {
    for (let opcion of opcionesContenedor.children) {
        if (opcion.innerText !== opcionElegida) {
           opcion.classList.add('disabled');
           opcion.disabled = true;
        }
    }
}

function finalizar() {
    desvanecer(contenedorCuento, 1000, () => {
        contenedorCuento.style.display = "none";
        contenedorComenzar.style.display = "flex";
        imagen.src = "./src/images/black.png";
        texto.innerText = "";
        opcionesContenedor.innerHTML = "";
        aparecer(contenedorComenzar, 1000, () => {
            console.log("fin")
        })
    });
}