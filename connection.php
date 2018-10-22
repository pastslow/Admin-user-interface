<?php
// ======================== server connection info ==========================//
$servername = "localhost";
$username = "root";
$password = "root";
$database = "webpage_admin";
// ========================== verify connection =============================//
$conn = new mysqli($servername, $username, $password, $database);
if($conn ->connect_error){
    die("Connection failed" . $conn ->connect_error);
}else{
    //echo("Connection successfully");
}

?>