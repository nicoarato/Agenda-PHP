<div class="campos">
            <div class="campo">
                <label for="nombre">Nombre</label>
                <input 
                    type="text" 
                    placeholder="Nombre de contacto" 
                    id="nombre"
                    value="<?php echo (isset($contacto['nombre'])) ? $contacto['nombre'] : ''; ?>"
                >
            </div>
            <div class="campo">    
                <label for="empresa">Empresa</label>
                <input 
                    type="text" 
                    placeholder="Nombre de la empresa" 
                    id="empresa"
                    value="<?php echo (isset($contacto['empresa'])) ? $contacto['empresa'] : ''; ?>"
                >
            </div>
            <div class="campo">
                <label for="telefono">Teléfono</label>
                <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    id="telefono"
                    value="<?php echo (isset($contacto['telefono'])) ? $contacto['telefono'] : ''; ?>"
                >
            </div>
</div>

<div class="campo enviar">
    <?php 
        $textBtn = (isset($contacto['telefono'])) ? 'Guardar' : 'Añadir';
        $accion = (isset($contacto['telefono'])) ? 'editar' : 'crear';
    
    ?>
    <input type="hidden" id="accion" value="<?php echo $accion;?>">
    
    <?php if (isset($contacto['id'])) { ?>
        <input type="hidden" id="id" value="<?php echo $contacto['id'];?>">
    <?php } ?>
    
    <input type="submit" value="<?php echo $textBtn;?>">
</div>