<?php
include 'setup.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $email = $_POST['email'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido";
        exit;
    }

    $query = "UPDATE usuarios SET email = ? WHERE idusuarios = ?";
    $stmt = mysqli_prepare($con, $query);
    mysqli_stmt_bind_param($stmt, 'si', $email, $id);

    if (mysqli_stmt_execute($stmt)) {
        echo 1; // Éxito
    } else {
        echo "Error: " . mysqli_error($con);
    }
}
?>
