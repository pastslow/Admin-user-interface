<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!--  ========================== Css external import ===================-->
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="nav">
        <h1 class="text-white">Admin interface</h1>
        <h1 class="text-success glyphicon glyphicon-plus"></h1>
    </div>

    <div id="users" class="users">
    </div>
    <div id="deleteModal">
    <?php
    include("deleteUserModal.php");
    ?>
    </div>
    <div id="editModal">
    <?php
    include("editUserModal.php");
    ?>
    </div>


</body>
<script src="js/jobs.js"></script>
<script src="js/edit.js"></script>
<script src="js/loadUsers.js"></script>
<script src="js/deleteUsers.js"></script>
</html>
