<?php
session_start();
include("setup.php");

if (!isset($_POST["username"]) || !isset($_POST["password"])) {
    echo "3"; 
    exit;
}

$username = $_POST["username"];
$password = $_POST["password"];


if (empty($username) || empty($password)) {
    echo "3";
    exit;
}

$stmt = $con->prepare("SELECT idusuarios, username, password FROM usuarios WHERE username = ? LIMIT 1");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($datDatos = $result->fetch_assoc()) {
    if ($password == $datDatos["password"]) {
        $_SESSION["seguridad"] = 1;
        $_SESSION["user_id"] = $datDatos["idusuarios"]; 
        echo "1"; // Éxito
    } else {
        echo "2"; 
    }
} else {
    echo "2"; 
}

$stmt->close();
?>