package com.assignment.todo.exception;

public class TaskOperationException extends RuntimeException{
    public TaskOperationException(String message) {
        super(message);
    }
}
