<?php

function loginUser() {
    $mysqli = new mysqli("mysql.thecurtisplace.com.", "mimescd", "Eu565uo9!", "pomotodo");
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    echo $mysqli->host_info . "\n";
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $mysqli->prepare("SELECT * FROM `user` WHERE username = ? and password = ?");
    if (!$stmt) {
        http_response_code(404);
        echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
    if (!$stmt->bind_param("ss", $username, $password)) {
        http_response_code(404);
        echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    if (!($result = $stmt->execute() )) {
        http_response_code(404);
        echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    } else if ($result->num_rows === 0) {
        echo $result->num_rows;
        echo "Invalid Username or Password";
        http_response_code(404);
    } else {
        passAuthentication($username, $password);
    }
}

function validateUser() {
    
}

function passAuthentication($username, $password) {
    session_start();
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
    http_response_code(200);
}

loginUser();
?>