/** Copyright © Andrés Fernández Burón
 *  November of 2021
 * 
 *  Blackboard with vanilla Javascript
 *  Application made using HTML, CSS, and JavaScript with the W3C event model.
 * 
 *  File with the static class PopUp.
 *  It has functions to handle pop-up messages.
 * 
 */
"use strict";

/* ---- STATIC CLASS POPUP --------------------------------------------------------- */
class PopUp {

    // SHOW A POP-UP MESSAGE
    static showError( message ) {
        PopUp.show( message, 'error' )
    }

    // SHOW A POP-UP MESSAGE
    static show( message, cssClass='' ) {

        let parrafo = document.createElement('div');
        if(cssClass!='')    parrafo.className = cssClass;
        parrafo.innerHTML = message;
        
        let btnCerrar = document.createElement('button');
        btnCerrar.id = 'btnCerrarDialogo';
        btnCerrar.innerText = 'ACEPTAR';
        btnCerrar.onclick = PopUp.close;

        let feedback = document.createElement('div');
        feedback.id = 'feedback';
        feedback.appendChild(parrafo);
        feedback.appendChild(btnCerrar);

        document.querySelector('body').appendChild(feedback);
    }

    // CLOSE A POP-UP MESSAGE
    static close() {
        document.getElementById('btnCerrarDialogo').onclick = null;
        document.getElementById('feedback').remove();
    }

}
