<?php
$json = file_get_contents('php://input');
$id = json_decode($json);

// // Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
// header('Content-Type: application/json');
// header('Cache-Control: no-cache, must-revalidate');
// header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Configuración BASE DE DATOS
$host = "localhost";
$user = "root";
$dbname = "ajax";
$pass = "";
// Creamos la conexión al servidor.
$conexion = mysqli_connect($host, $user, $pass, $dbname);
mysqli_query($conexion, "SET NAMES 'utf8'");
//
$id = $_POST["id"];
$sql = "DELETE FROM `viajescomprados` WHERE id=" . $id;
if ($conexion->query($sql) === TRUE) {
    echo "OK";
} else {
    echo "NO";
}
