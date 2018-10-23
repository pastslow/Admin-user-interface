<?php
include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];
if ("POST" === $method) {
    $request = file_get_contents('php://input');
    $addUser = json_decode($request);
    $firstName = $addUser->firstname;
    $secondname = $addUser->secondname;
    $gender = $addUser->gender;
    $job = $addUser->job;
    $age = $addUser->age;

    $sql = "INSERT INTO `webpage_admin`.`users` (`firstname`, `secondname`, `gender`, `job`, `age`) 
    VALUES ('$firstName', '$secondname', '$gender', '$job', '$age');";
    $conn->query($sql);
    echo json_encode($addUser);
}
?>