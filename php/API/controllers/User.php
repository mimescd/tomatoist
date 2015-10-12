<?php

class User {

    private $_params;

    /*
      public $userId;
      public $email;
      public $password;
      public $taskListId;
     */

    public function __construct($params) {
        $this->_params = $params;
    }

    public function createAction() {
        $user = new UserEntry();
        $user->email = $this->_params['email'];
        $user->password = $this->_params['password'];
        $user->username = $this->_params['username'];

        //pass the user's username and password to authenticate the user
        $user->save($this->_params['username'], $this->_params['password'], $this->_params['email']);

        //return the todo item in array format
        return $user->toArray();
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
