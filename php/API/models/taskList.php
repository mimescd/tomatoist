<?php

class TaskList {

    public $userId;
    public $todos;
    public $taskListName;

    public function save($userId, $todos, $taskListName) {
        //connect to the database
        $mysqli = new mysqli("mysql.thecurtisplace.com.", "mimescd", "Eu565uo9!", "pomotodo");
        
        
        
        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }
        echo $mysqli->host_info . "\n";
        
        

        if (!($stmt = $mysqli->prepare("INSERT INTO `taskList` (userId, todos,  taskListName) VALUES (?,?,?)"))) {
            echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
        }
        $id = 1;
        if (!$stmt->bind_param("iss", $userId, $todos, $taskListName)) {
            echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
        }

        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }

        //get the array version of this todo item
        $userArray = $this->toArray();
        return $userArray;
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
