let botonComenzar = document.getElementById("comenzar_boton");
let contenedorComenzar = document.getElementById("comenzar_contenedor");
let contenedorCuento = document.getElementsByTagName("main")[0];
let botonSiguiente = document.getElementById("siguiente_boton");
let opcionesContenedor = document.getElementById("opciones_contenedor");
let respuesta = document.getElementById("respuesta");

const CAMINOS = [c1, c2, c3, c4]
let caminoActual = null;
let posicionActual = null;

function comenzar() {
    contenedorComenzar.style.display = "none";
    contenedorCuento.style.display = "flex";
    aparecer(contenedorCuento, 1000, arrancar);
}

function arrancar() {
    cargarCamino('inicio', 0)
}

window.onload = () => {
    botonComenzar.addEventListener("click", () => {
        desvanecer(contenedorComenzar, 1000, comenzar);
    });
}

function cargarCamino(nombre, posicion) {
    caminoActual = CAMINOS.find(camino => camino.name === nombre);
    posicionActual = posicion;
    mostrar();
}

function mostrar() {
    document.getElementById("imagen").src = caminoActual.content[posicionActual].img;
    document.getElementById("texto").innerText = caminoActual.content[posicionActual].text;
    if (!haySiguiente()) {
        botonSiguiente.disabled = true;
        mostrarOpciones();
    } else {
        botonSiguiente.disabled = false;
    }
}

function mostrarOpciones() {
    for (let opciones of caminoActual.options) {
        var botonNuevo = document.createElement("button");
        var textoBoton = document.createTextNode(opciones.text);
        botonNuevo.appendChild(textoBoton);
        botonNuevo.addEventListener('click', seleccionarOpcion);
        opcionesContenedor.appendChild(botonNuevo);
    }
}

botonSiguiente.addEventListener('click', () => {
    posicionActual++;
    mostrar();
})

function haySiguiente() {
    return caminoActual.content.length - 1 !== posicionActual;
}

function ocultarOpciones(opcionElegida) {
    for (let opcion of opcionesContenedor.children) {
        if (opcion.innerText !== opcionElegida) {
            opcion.style.opacity = 0;
        }
    }
}

function eliminarOpciones() {
    opcionesContenedor.innerHTML = "";
}

function eliminarRespuesta() {
    respuesta.innerText = "";
}

function seleccionarOpcion(e) {
    let textoOpcion = e.target.innerText;
    ocultarOpciones(textoOpcion);
    let respuesta = caminoActual.options.find(opcion => opcion.text === textoOpcion);
    document.getElementById("respuesta").innerText = respuesta.answer;
    if (respuesta.next) {
        setTimeout(() => {
            eliminarOpciones();
            eliminarRespuesta();
            cargarCamino(respuesta.next, respuesta.position)
        }, 1000)
    } else {
        alert("finish")
    }
}