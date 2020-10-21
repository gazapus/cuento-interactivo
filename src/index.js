let botonComenzar = document.getElementById("comenzar_boton");
let contenedorComenzar = document.getElementById("comenzar_contenedor");
let contenedorCuento = document.getElementsByTagName("main")[0];
let botonSiguiente = document.getElementById("siguiente_boton");
let opcionesContenedor = document.getElementById("opciones_contenedor");
let respuestaContenedor = document.getElementById("respuesta_contenedor");
let texto = document.getElementById("texto");
let spinner = document.getElementById("modal")

const CAMINOS = [
    inicio, inicio_caminos, inicio_desayuno, inicio_sueño,
    monte_platano, monte_alucinacion, monte_picnic, monte_gazapos_adultos, monte_platano2, monte_platano3, monte_platano_vuelta,
    lago_gazaposo, lago_gazaposo2, lago_juego_arbol, lago_picnic, lago_juego, lago_sueño, lago_vuelta,
    bosque_colibri, bosque_exploracion, bosque_sabio, bosque_hongos, bosque_exploracion_correcta, bosque_exploracion_incorrecta, bosque_despacito, bosque_correr,
    ultimo
]
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

botonSiguiente.addEventListener('animationend', habiliarBotonSiguiente)

botonSiguiente.addEventListener('animationstart', deshabilitarBotonSiguiente)

function comenzar() {
    contenedorComenzar.style.display = "none";
    contenedorCuento.style.display = "flex";
    aparecer(contenedorCuento, 1000, () => cargarCamino('inicio', 0));
}

function cargarSiguienteImagen(imagenURL, callback) {
    let previaImagen = document.getElementsByTagName("img")[0];
    let siguienteImagen = document.createElement("img");
    siguienteImagen.setAttribute("src", imagenURL);
    siguienteImagen.classList.add("animate__animated", "animate__fadeIn", "invisible");
    contenedorCuento.insertBefore(siguienteImagen, previaImagen);
    document.getElementsByTagName("img")[0].addEventListener('load', callback)
}

function cargarCamino(nombre, posicion) {
    modal.classList.remove("invisible");
    caminoActual = CAMINOS.find(camino => camino.name === nombre);
    posicionActual = posicion;
    cargarSiguienteImagen(caminoActual.content[posicionActual].img, () => {
        modal.classList.add("invisible");
        mostrar();
    })
}

function eliminarImagenPrevia() {
    let previusImage = document.getElementsByTagName("img")[1];
    contenedorCuento.removeChild(previusImage);
}

function mostrarImagenActual() {
    let currentImage = document.getElementsByTagName("img")[0];
    currentImage.classList.remove("invisible");
    reaparecer(currentImage, 1000);
}

function mostrarTextoActual() {
    texto.innerText = caminoActual.content[posicionActual].text;
    texto.scrollTop = 0;
    aparecer(texto, 1000);
}

function deshabilitarBotonSiguiente(){
    botonSiguiente.disabled = true;
    botonSiguiente.classList.add("siguiente_boton_disabled");
}

function habiliarBotonSiguiente() {
    botonSiguiente.style.display = 'block';
    botonSiguiente.disabled = false;
    botonSiguiente.classList.remove("siguiente_boton_disabled");
}

function ocultarBotonSiguiente(){
    botonSiguiente.style.display = 'none';
}

function mostrar() {
    eliminarImagenPrevia();
    mostrarImagenActual();
    mostrarTextoActual();
    if (haySiguiente()) {
        deshabilitarBotonSiguiente();
        cargarSiguienteImagen(caminoActual.content[posicionActual + 1].img, habiliarBotonSiguiente )    
    } else {
        ocultarBotonSiguiente();
        mostrarOpciones();
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
        }, 4000)
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
        respuestaContenedor.innerHTML = "";
        document.getElementsByTagName("img")[0].src = "./src/images/black.png";
        texto.innerText = "";
        opcionesContenedor.innerHTML = "";
        aparecer(contenedorComenzar, 1000);
    });
}

