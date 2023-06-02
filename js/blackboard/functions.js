/** Copyright © Andrés Fernández Burón
 *  November of 2021
 * 
 *  Blackboard with vanilla Javascript
 *  Application made using HTML, CSS, and JavaScript with the W3C event model.
 * 
 *  File with util functions for the program.
 * 
 */
"use strict";

/* -------------- FUNCTIONS ----------------------- */

// MUESTRO EL POP-UP DE AYUDA
function mostrarPopupAyuda() {
    let msg = '<p>Para pintar, haz click en la pizarra y arrastra el cursor.';
    msg += '<br>Para dejar de pintar, vuelve a hacer click en la pizarra.</p>';
    msg += '<br><p>Para pintar un solo punto, haz doble click en la pizarra.</p>';
    msg += '<br><p>Para  alternar entre pintar y borrar, haz click en los botones PINTAR y BORRAR.</p>';
    msg += '<br><p>Para cambiar el color del pincel, el color del fondo de la pizarra o el número de píxeles por punto, utiliza el menú.</p>';
    msg += '<br><p>Para volver a ver este mensaje, haz click en el botón AYUDA.</p>';
    PopUp.show( msg );    
}



