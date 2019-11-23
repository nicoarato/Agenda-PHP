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
            telefono = document.querySelector('#telefono').value;

    if(nombre === '' || empresa === '' || telefono === '' ){
        //2 parametros texto y clases
        mostrarNotificacion('Todos los campos son obligatorios', 'error' );
        //mostrarNotificacion('Contacto correcto', 'error' );
    }else {

        console.log(nombre);
    }
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
