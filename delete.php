<?php
include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];
if ("DELETE" === $method) {
    $request = file_get_contents('php://input');
    $user = json_decode($request);
    $sql = "DELETE FROM `webpage_admin`.`users` WHERE (`id` = $user->id)";
    $conn ->query($sql);
    echo json_encode();
}
?>