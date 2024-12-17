<?php 
include 'setup.php';
session_start(); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['id'])) {
        $id = $_POST['id'];

        if ($id == $_SESSION['user_id']) {
            echo "No puedes eliminarte a ti mismo";
            exit;
        }
        
        $stmt = $con->prepare("DELETE FROM usuarios WHERE idusuarios = ?");
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            echo 1; // Éxito
        } else {
            echo "Error al eliminar el usuario: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "ID de usuario no proporcionado";
    }
}
?>