/** Copyright © Andrés Fernández Burón
 *  November of 2021
 * 
 *  Blackboard with vanilla Javascript
 *  Application made using HTML, CSS, and JavaScript with the W3C event model.
 * 
 *  File with the main script script of the application.
 * 
 */
"use strict";

/* -------------- THE SCRIPT ---------------------- */

// Cuándo se ha terminado de cargar el documento HTML y el DOM
window.onload = function() {
    
    document.getElementById('this-year').innerText = getStrYear();

    // Muestro el panel de ayuda
    mostrarPopupAyuda();

    // Añado el listener al evento CHANGE del INPUT:COLOR para seleccionar el color del pincel
    document.getElementById('color').addEventListener('change', seleccionarColor);

    // Añado el listener al evento CHANGE del INPUT:COLOR para seleccionar el color del pincel
    document.getElementById('fondo').addEventListener('change', updateBackgroundColor);

    // Añado el listener al evento CLICK de los BUTTON para pintar, borrar, etc
    document.getElementById('btnPintar').addEventListener('click', seleccionarColor);
    document.getElementById('btnBorrar').addEventListener('click', seleccionarBorrador);
    
    // Añado el listener al evento CLICK del BUTTON para mostrar/ocultar el panel de opciones
    document.getElementById('btnOpciones').addEventListener('click', alternarrMenuOPciones);
    document.getElementById('opciones').style.display = 'none';

    document.getElementById('btnAyuda').addEventListener('click', mostrarPopupAyuda);

    // Añado el listener al evento CHANGE del INPUT:NUMBER para seleccionar el número de píxeles por punto
    document.getElementById('pixelesPorPunto').addEventListener('change', updatePixelsPerPoint);

    // Creo e Inicializo la pizarra
    initBlackboard();

};
