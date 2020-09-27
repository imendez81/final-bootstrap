(function(){
    "use strict";

    var nombre =  document.getElementById('nombre');

    var telefono =  document.getElementById('telefono');

    var correo =  document.getElementById('correo');

    document.addEventListener('DOMContentLoaded', function(){

    var errorDiv = document.getElementById('error');

    nombre.addEventListener('blur', validarCampos);
    telefono.addEventListener('blur', validarCampos);
    /*correo.addEventListener('blur', validarCampos);*/

    function validarCampos(){
        if(this.value ==''){
            nombre.setCustomValidity('Inserte su nombre');
            /*correo.setCustomValidity('Inserte su correo electrónico');*/
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = "Este campo es obligatorio";
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
        } else {
            nombre.setCustomValidity('');
            errorDiv.style.display = 'none';
            this.style.border = 'none';
            errorDiv.style.border = 'none';
        }
    };
    
    /*window.addEventListener('load', iniciar, false);*/

    }); // DOM CONTENT LOADED
})();
