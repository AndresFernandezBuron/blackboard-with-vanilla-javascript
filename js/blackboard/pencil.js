/** Copyright © Andrés Fernández Burón
 *  November of 2021
 * 
 *  Blackboard with vanilla Javascript
 *  Application made using HTML, CSS, and JavaScript with the W3C event model.
 * 
 *  File with functions to give functionality to the pencil (paint, erase, etc).
 * 
 */
"use strict";

/* -------------- GLOBAL VARS --------------------- */

// El color seleccionado
var color = 'rgb(255, 255, 255)';

// Bandera para saber si estoy pintando
var estoyPintando = false;

/* -------------- FUNCTIONS ----------------------- */

// DEFINO PARA EL PINCEL, EL COLOR DE FONDO DE LA PIZARRA
function seleccionarBorrador() {

    // Actualizo el color en la variable global
    color = document.querySelector('#pizarra td').style.backgroundColor;

}

// DEFINO PARA EL PINCEL, EL COLOR SELECCIONADO EN EL INPUT:COLOR
function seleccionarColor() {

    // Actualizo el color en la variable global
    color = document.getElementById('color').value;
}

// CAMBIO EL ESTADO DEL PINCEL (pintando o no)
function cambiarEstado() {

    // Actualizo el valor de las variables globales
    estoyPintando = ! estoyPintando;

    if( estoyPintando ) {
        this.style.backgroundColor = color;
    }
}

// PINTO UN PUNTO DE LA PIZARRA (si estoy pintando)
function pintar() {
    if( estoyPintando ) {
        this.style.backgroundColor = color;
    }
}






