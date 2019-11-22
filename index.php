<?php include 'includes/layout/header.php'; ?>

<div class="contenedor-barra">
    <h1>Agenda de contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>Añada un contacto <span>Todos los campos son obligatorios</span></legend>

        <?php include 'includes/layout/formulario.php'; ?>
        
    </form>
</div>

<div class="bg-blanco contenedor sombra contactos">
    <div class="contenedor-contactos">
        <h2>Contactos</h2>

        <input type="text" id="buscar" class="buscador sombra" placeholder="Buscar contactos...">

        <p class="total-contactos">
            <span>2</span>
            Contactos
        </p>

        <div class="contenedor-tabla">
            <table id="listado-contactos" class="listado-contactos">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nicolas</td>
                        <td>Ripcurl</td>
                        <td>1235456</td>
                        <td>
                            <a href="editar.php?id=1" class="btn-editar btn">
                                <i class="fas fa-user-edit"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>Leonardo</td>
                        <td>Ripcurl</td>
                        <td>1235456</td>
                        <td>
                            <a href="editar.php?id=1" class="btn-editar btn">
                                <i class="fas fa-user-edit"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>PEdrito</td>
                        <td>Ripcurl</td>
                        <td>1235456</td>
                        <td>
                            <a href="editar.php?id=1" class="btn-editar btn">
                                <i class="fas fa-user-edit"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
 


<?php include 'includes/layout/footer.php'; ?>
