<?php 

//credenciales de bdatos
define('DB_USUARIO', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('DB_NOMBRE', 'agendaphp');

$conn = new mysqli(DB_HOST, DB_USUARIO, DB_PASSWORD,DB_NOMBRE);
//ultimo parametro es el puerto

//para chekear la conexion
//echo $conn->ping();