<?php
include("connection.php");

class User
{
    public $id;
    public $firstname;
    public $secondname;
    public $gender;
    public $job;
    public $age;
}
$sql = "SELECT * FROM webpage_admin.users";
$result = $conn->query($sql);
$users = array();
while ($row = $result->fetch_assoc()) {
    $user = new User;
    $user->id = $row["id"];
    $user->firstname = $row["firstname"];
    $user->secondname = $row["secondname"];
    $user->gender = $row["gender"];
    $user->job = $row["job"];
    $user->age = $row["age"];
    array_push($users, $user);
}

$userJason = json_encode($users);
echo $userJason;

?>