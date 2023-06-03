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
var estoyActuando = false;

// Acción actual
var accion = 'PINTAR';

/* -------------- FUNCTIONS ----------------------- */

// DEFINO PARA EL PINCEL, EL COLOR SELECCIONADO EN EL INPUT:COLOR
function seleccionarColor() {
    
    // Defino la acción actual
    accion = 'PINTAR';
    
    // Actualizo la bandera
    estoyActuando = false;

    // Actualizo el color en la variable global
    color = document.getElementById('color').value;
}

// DEFINO PARA EL PINCEL, EL COLOR DE FONDO DE LA PIZARRA
function seleccionarBorrador() {
    
    // Defino la acción actual
    accion = 'BORRAR';

    // Actualizo la bandera
    estoyActuando = false;
}

// CAMBIO EL ESTADO DE LA BANDERA (actuando o no)
function cambiarEstado() {

    // Actualizo el valor de las variables globales
    estoyActuando = ! estoyActuando;
}

// ACTÚO SOBRE UN PUNTO DE LA PIZARRA (si estoy actuando)
function actuar() {

    if( estoyActuando ) {
        
        switch( accion ) {
            case 'PINTAR':
                this.style.backgroundColor = color;
                break;
            case 'BORRAR':
                this.style.backgroundColor = backgroundColor;
                break;
            default:
                break;
        }
    }
}
