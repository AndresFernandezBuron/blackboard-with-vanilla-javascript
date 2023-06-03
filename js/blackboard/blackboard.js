/** Copyright © Andrés Fernández Burón
 *  November of 2021
 * 
 *  Blackboard with vanilla Javascript
 *  Application made using HTML, CSS, and JavaScript with the W3C event model.
 * 
 *  File with functions to create, initialize and set the HTML blackboard.
 * 
 */
"use strict";

/* -------------- GLOBAL VARS --------------------- */

// El número de filas y columnas de la pizarra
var numFilas = 50;
var numColumnas = 50;

// El color de fondo seleccionado
var backgroundColor = 'rgb(0, 0, 0)';

// El número de píxeles por punto de la pizarra
var pixelesPorPunto = 5;

/* -------------- FUNCTIONS ----------------------- */

// INICIALIZO LA PIZARRA
function initBlackboard() {
    setDefaultValues();
    createBlackboard();
    addListenersToBlackboard();
    
    seleccionarColor();
    updatePixelsPerPoint();
}

// DEFINO EN LOS INPUT DEL HTML, LOS VALORES POR DEFECTO
function setDefaultValues() {
    document.getElementById('filas').value = numFilas;
    document.getElementById('columnas').value = numColumnas;
    document.getElementById('pixelesPorPunto').value = pixelesPorPunto;
    document.getElementById('fondo').value = backgroundColor;
}

// AÑADO LA TABLE DE LA PIZARRA AL HTML
function createBlackboard() {
    document.getElementById('pizarra').innerHTML = '';

    // Las filas
    for(let i=0 ; i<numFilas ; i++) {        
        let fila = document.createElement('tr');
        
        // Las columnas
        for(let j=0 ; j<numColumnas ; j++) {
            fila.appendChild( document.createElement('td') );
        }

        document.getElementById('pizarra').appendChild( fila );
    }
}

// AÑADO LOS LISTENERS A LA PIZARRA 
function addListenersToBlackboard() {
    let all = document.querySelectorAll('#pizarra td');
    
    for(let i=0 ; i<all.length ; i++) {
        all[i].addEventListener('click', cambiarEstado);
        all[i].addEventListener('dblclick', actuar);
        all[i].addEventListener('mousemove', actuar);

        all[i].style.height = pixelesPorPunto + 'px';
        all[i].style.width = pixelesPorPunto + 'px';

        all[i].style.backgroundColor = backgroundColor;
    }
}

// ACTUALIZO EL COLOR DE FONDO DE LA PIZARRA
function updateBackgroundColor() {
    let newColor = document.getElementById('fondo').value;
    
    let all = document.querySelectorAll('#pizarra td');
    for(let i=0 ; i<all.length ; i++) {
        if( all[i].style.backgroundColor==backgroundColor ) {
            all[i].style.backgroundColor = newColor;
        }
    }

    backgroundColor = newColor;
}

// ACTUALIZO EL TAMAÑO DE LOS PUNTOS QUE COMPONEN LA PIZARRA
function updatePixelsPerPoint() {
    if( esResolucionValida(numFilas, numColumnas, pixelesPorPunto) ) { 
        let all = document.querySelectorAll('#pizarra td');
        
        for(let i=0 ; i<all.length ; i++) {
            all[i].style.height = document.getElementById('pixelesPorPunto').value + 'px';
            all[i].style.width = document.getElementById('pixelesPorPunto').value + 'px';
        }
    } else {
        let msg = '<p>'+pixelesPorPunto+'px no es una resolución valida para este tamaño</p>';
        msg += '<p>('+numFilas+'*'+numColumnas+').</p>';
        PopUp.showError(msg);
    }
}

// DEVUELVO BOOL, EN FUNCION DE SI ES UNA RESOLUCIÓN VÁLIDA O NO
function esResolucionValida(alto, ancho, pixelesPorPunto) {

    // ...

    if( alto*pixelesPorPunto > window.innerHeight*0.8 ) {
        return false;
    }
    if( ancho*pixelesPorPunto > window.innerWidth*0.8 ) {
        return false;
    }
    
    return true;
}
