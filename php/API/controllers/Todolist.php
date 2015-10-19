<?php

class TodoList {

    private $_params;

    /*
      public $userId;
      public $todos;
      public $taskListId;
     */

    public function __construct($params) {
        $this->_params = $params;
    }

    public function createAction() {
        $taskList = new TaskList();
        $taskList->userId = $this->_params['userId'];
        $taskList->todos = $this->_params['todos'];
        $taskList->taskListName = $this->_params['taskListName'];

        //pass the user's username and password to authenticate the user
        $taskList->save($this->_params['userId'], $this->_params['todos'], $this->_params['taskListName']);

        //return the todo item in array format
        return $taskList->toArray();
    }

    public function readAction() {
        //read all the todo items
    }

    public function updateAction() {
        //update a todo item
        $todos
        $todo = new Todo();
        
        $todo->title = $this->_params['title'];
        $todo->description = $this->_params['description'];
        $todo->due_date = $this->_params['due_date'];
        $todo->is_done = 'false';
    }

    public function deleteAction() {
        //delete a todo item
    }

}
