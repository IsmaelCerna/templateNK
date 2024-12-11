<?php 
include 'setup.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 
    $username = $_POST['username'];

    $query = "INSERT INTO usuarios (email, password, username) VALUES ('$email', '$password', '$username')";
    if (mysqli_query($con, $query)) {
        echo 1;
    } else {
        echo "Error: " . mysqli_error($con);
    }
}
?>
