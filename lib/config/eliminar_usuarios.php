<?php 
include 'setup.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        
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