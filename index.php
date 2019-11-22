<?php include 'includes/layout/header.php'; ?>

<div class="contenedor-barra">
    <h1>Agenda de contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>Añada un contacto <span>Todos los campos son obligatorios</span></legend>

        <div class="campos">
            <div class="campo">
                <label for="nombre">Nombre</label>
                <input type="text" placeholder="Nombre de contacto" id="nombre">
            </div>
            <div class="campo">    
                <label for="empresa">Empresa</label>
                <input type="text" placeholder="Nombre de contacto" id="empresa">
            </div>
            <div class="campo">
                <label for="telefono">Teléfono</label>
                <input type="tel" placeholder="Teléfono" id="telefono">
            </div>
            <div class="campo enviar">
                <input type="submit" value="Añadir">
            </div>
        </div>
    </form>
</div>
 


<?php include 'includes/layout/footer.php'; ?>