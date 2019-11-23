const formularioContactos = document.querySelector('#contacto');

eventListeners();

function eventListeners(){
    //cuando el formulario se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
    e.preventDefault(e); //recomendable cuando usamos js o ajax-- previene accion por defecto
 
    //leer los datos de los inputs
    const   nombre = document.querySelector('#nombre').value,
            empresa = document.querySelector('#empresa').value,
            telefono = document.querySelector('#telefono').value,
            accion = document.querySelector('#accion').value;

    if(nombre === '' || empresa === '' || telefono === '' ){
        //2 parametros texto y clases
        mostrarNotificacion('Todos los campos son obligatorios', 'error' );
        //mostrarNotificacion('Contacto correcto', 'error' );
    }else {
        //pasa la validacion crear llamado a Ajax
        const infoContacto = new FormData();
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('accion', accion);

        //console.log(...infoContacto);
        if(accion === 'crear'){
            //crear nuevo contacto
            insertarBD(infoContacto);
        }else{
            //editar contacto

        }
    }
}

/*inserta en la bdatos via ajax */
function insertarBD(datos){
    //llamado a ajax
    
    //crear el objeto
    const xhr = new XMLHttpRequest(); 

    //abrir la conexion
    xhr.open('POST', 'includes/modelos/modelo-contacto.php', true );

    //pasar los datos
    xhr.onload = function(){
        if(this.status === 200){
            console.log(JSON.parse(xhr.responseText));

            //leemos la respuesta de php
            const respuesta = JSON.parse(xhr.responseText);
            console.log(respuesta.empresa);
        }
    }

    //enviar datos
    xhr.send(datos);
}

//notificiacion en pantalla.
function mostrarNotificacion(mensaje, clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    //formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    //ocultar y mostrar la notificacion

    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout( () => {
            notificacion.classList.remove('visible');
            setTimeout( () => {
                notificacion.remove();               
            }, 500)

        }, 3000);
    }, 100);
}
