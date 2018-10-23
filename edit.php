<?php
include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];
if ("PUT" === $method) {
    $request = file_get_contents('php://input');
    $edit = json_decode($request);
    $firstname = $edit->firstname;
    $secondname = $edit->secondname;
    $gender = $edit->gender;
    $age = $edit->age;
    $id = $edit->id;
    $gender = $edit->gender;
    $job = $edit->job;
    $sql = "UPDATE `webpage_admin`.`users` 
    SET `firstname` = '$firstname',
    `secondname` = '$secondname', 
    `gender` = '$gender', 
    `job` = '$job', 
    `age` = '$age' 
    WHERE (`id` = '$id');";
    $conn->query($sql);
    echo json_encode();
}
?>