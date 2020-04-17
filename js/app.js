const formularioContactos = document.querySelector('#contacto'),
    listadoContactos = document.querySelector('#listado-contactos tbody');

eventListeners();

function eventListeners() {
    //cuando el formulario se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);

    //Listener para eliminar el boton
    if (listadoContactos) {

        listadoContactos.addEventListener('click', eliminarContacto);
    }
}

function leerFormulario(e) {
    e.preventDefault(e); //recomendable cuando usamos js o ajax-- previene accion por defecto

    //leer los datos de los inputs
    const nombre = document.querySelector('#nombre').value,
        empresa = document.querySelector('#empresa').value,
        telefono = document.querySelector('#telefono').value,
        accion = document.querySelector('#accion').value;

    if (nombre === '' || empresa === '' || telefono === '') {
        //2 parametros texto y clases
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
        //mostrarNotificacion('Contacto correcto', 'error' );
    } else {
        //pasa la validacion crear llamado a Ajax
        const infoContacto = new FormData();
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('accion', accion);

        //console.log(...infoContacto);
        if (accion === 'crear') {
            //crear nuevo contacto
            insertarBD(infoContacto);
        } else {
            //editar contacto

        }
    }
}

/*inserta en la bdatos via ajax */
function insertarBD(datos) {
    //llamado a ajax

    //crear el objeto
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('POST', 'includes/modelos/modelo-contacto.php', true);

    //pasar los datos
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(JSON.parse(xhr.responseText));

            //leemos la respuesta de php
            const respuesta = JSON.parse(xhr.responseText);
            //console.log(respuesta.empresa);
            //inserta un nuevo elemento a la tabla
            const nuevoContacto = document.createElement('tr');

            nuevoContacto.innerHTML = `
                <td>${respuesta.datos.nombre}</td>
                <td>${respuesta.datos.empresa}</td>
                <td>${respuesta.datos.telefono}</td>
            `;

            //crear un contenedor para botones
            const contenedorAcciones = document.createElement('td');

            //crear icono editar
            const iconoEditar = document.createElement('i');
            iconoEditar.classList.add('fas', 'fa-user-edit');

            //crea el enlace para editar
            const btnEditar = document.createElement('a');
            btnEditar.appendChild(iconoEditar);
            btnEditar.href = `editar.php?${respuesta.datos.id_insertado}`;
            btnEditar.classList.add('btn', 'btn-editar');

            //agregarlo al padre.
            contenedorAcciones.appendChild(btnEditar);

            //crear icono borrar
            const iconoEliminar = document.createElement('i');
            iconoEliminar.classList.add('far', 'fa-trash-alt');

            //crear boton eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.appendChild(iconoEliminar);
            btnEliminar.setAttribute('data-id', respuesta.datos.id_insertado);
            btnEliminar.classList.add('btn', 'btn-borrar');

            //agregarlo al padre.
            contenedorAcciones.appendChild(btnEliminar);

            //agregar al tr
            nuevoContacto.appendChild(contenedorAcciones);

            //agregar con los contactos

            listadoContactos.appendChild(nuevoContacto);

            //resetear el form
            document.querySelector('form').reset();

            //mostrar la notficacion
            mostrarNotificacion('Contacto creado correctamente', 'correcto');
        }
    }

    //enviar datos
    xhr.send(datos);
}

//Eliminar el contacto
function eliminarContacto(e) {
    if (e.target.parentElement.classList.contains('btn-borrar')) {
        //tomar el id
        const id = e.target.parentElement.getAttribute('data-id');

        //preguntar al usuario
        const respuesta = confirm('¿Estás seguro?');

        if (respuesta) {

            //llamado a ajax
            const xhr = new XMLHttpRequest();
            // crear conexxiion
            xhr.open('GET', `includes/modelos/modelo-contacto.php?id=${id}&accion=borrar`, true);
            //leer respuesta
            xhr.onload = function() {
                    if (this.status === 200) {
                        const resultado = JSON.parse(xhr.responseText);

                        if (resultado.respuesta == 'correcto') {
                            //eliminar registro del dom
                            console.log(e.target.parentElement.parentElement.parentElement);
                            e.target.parentElement.parentElement.parentElement.remove();

                            //mostrar notificacion
                            mostrarNotificacion('Contacto eliminado.', 'correcto');
                        } else {
                            //mostramos una notificacion
                            mostrarNotificacion('Hubo un error...', 'error');
                        }

                    }
                }
                //enviar la peticion
            xhr.send();
        }
    }
}



//notificiacion en pantalla.
function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    //formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    //ocultar y mostrar la notificacion

    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                notificacion.remove();
            }, 500)

        }, 3000);
    }, 100);
}