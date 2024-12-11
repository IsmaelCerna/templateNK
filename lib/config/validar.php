<?php
session_start();
include("setup.php");

$username=$_POST["username"];
$password=$_POST["password"];

$selDatos=mysqli_query($con,"SELECT * FROM usuarios WHERE username ='$username' LIMIT 1");
if($datDatos=mysqli_fetch_assoc($selDatos)){
    if($username==$datDatos["username"] && $password==$datDatos["password"]){
        $_SESSION["seguridad"]=1;
        echo "1";
    } else {
        echo "2";
    }
} else {
    echo "2";
}

?>