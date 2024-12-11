<?php 
include 'setup.php';

// Obtener datos de la tabla 'usuarios'
$query = "SELECT idusuarios AS id, username, email FROM usuarios";
$result = mysqli_query($con, $query);

$users = [];

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($users);
?>