function desvanecer(elemento, tiempo, callback, opacidadActual = 1) {
    if(opacidadActual > 0) {
        opacidadActual = opacidadActual - 100 / tiempo;
        elemento.style.opacity = opacidadActual;
        setTimeout(() => desvanecer(elemento, tiempo, callback, opacidadActual), 50)
    } else {
        setTimeout(callback, 1000)
    }
}

function aparecer(elemento, tiempo, callback, opacidadActual = 0) {
    if(opacidadActual < 1) {
        opacidadActual = opacidadActual + 100 / tiempo;
        elemento.style.opacity = opacidadActual;
        setTimeout(() => aparecer(elemento, tiempo, callback, opacidadActual), 50)
    } else {
        setTimeout(callback, 1000)
    }
}