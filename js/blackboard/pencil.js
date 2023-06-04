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
function cambiarEstado( self ) {

    // Actualizo el valor de las variables globales
    estoyActuando = ! estoyActuando;
    
    actuar( (self==undefined) ? this : self );
}

// SELECCIONO UN PUNTO DE LA TABLA
function seleccionar() {
    cambiarEstado(this);
    cambiarEstado(this);
}

// ACTÚO SOBRE UN PUNTO DE LA PIZARRA (si estoy actuando)
function actuar( self ) {

    if( estoyActuando ) {
        let point = null;
        if( this!=undefined && this.style!=undefined ) {
            point = this;
        } 
        else if( self!=undefined && self.style!=undefined ) {
            point = self;
        } 
        else if( self.target!=undefined && self.target.style!=undefined ) {
            point = self.target;
        }
        
        switch( accion ) {
            case 'PINTAR':
                point.style.backgroundColor = color;
                break;
            case 'BORRAR':
                point.style.backgroundColor = backgroundColor;
                break;
        }
    }
}
