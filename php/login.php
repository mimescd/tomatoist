<?php

function loginUser() {
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    echo $mysqli->host_info . "\n";
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!($stmt = $mysqli->prepare("SELECT FROM`user` WHERE username = ?, password = ?"))) {
        echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
//    $id = 1;
//    if (!$stmt->bind_param("ssss", $username, $email, $password, $username)) {
//        echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
//    }

    if (!$stmt->execute(array($username, $password))) {
        echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    }
}

function validateUser() {
    
}

$mysqli = new mysqli("mysql.thecurtisplace.com.", "mimescd", "Eu565uo9!", "pomotodo");

loginUser();

?>