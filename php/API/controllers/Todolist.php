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
        $taskList->taskListId = $this->_params['taskListId'];

        //pass the user's username and password to authenticate the user
        $taskList->save($this->_params['userId'], $this->_params['todos'], $this->_params['taskListId']);

        //return the todo item in array format
        return $taskList->toArray();
    }

    public function readAction() {
        //read all the todo items
    }

    public function updateAction() {
        //update a todo item
    }

    public function deleteAction() {
        //delete a todo item
    }

}
