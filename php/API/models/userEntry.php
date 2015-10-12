<?php

class UserEntry {

    public $userId;
    public $email;
    public $password;
    public $taskListId;

    public function save($username, $password, $email) {
        //connect to the database
        $mysqli = new mysqli("mysql.thecurtisplace.com.", "mimescd", "Eu565uo9!", "pomotodo");

        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }
        echo $mysqli->host_info . "\n";
        

        if (!($stmt = $mysqli->prepare("INSERT INTO `user` (username, email, password, tasklist_id) VALUES (?,?,?,?)"))) {
            echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
        }
        $id = 1;
        if (!$stmt->bind_param("ssss", $username, $email, $password, $username)) {
            echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
        }

        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }

        //get the array version of this todo item
        $userArray = $this->toArray();
        return $userArray;
    }

    function registerUser() {
        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }
        echo $mysqli->host_info . "\n";
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];
//if ($username != "" && $email != "" && $email != "") {
        if (!($stmt = $mysqli->prepare("INSERT INTO `user` (username, email, password, tasklist_id) VALUES (?,?,?,?)"))) {
            echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
        }
        $id = 1;
        if (!$stmt->bind_param("ssss", $username, $email, $password, $username)) {
            echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
        }

        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }
    }

    public function toArray() {
        //return an array version of the todo item
        return array(
            'todo_id' => $this->todo_id,
            'title' => $this->title,
            'description' => $this->description,
            'due_date' => $this->due_date,
            'is_done' => $this->is_done
        );
    }

}
