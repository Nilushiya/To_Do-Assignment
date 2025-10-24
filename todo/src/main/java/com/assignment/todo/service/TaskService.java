package com.assignment.todo.service;

import com.assignment.todo.entity.Task;

import java.util.List;

public interface TaskService {
    Task addTask(Task task);

    List<Task> getRecentTasks(String userId);

    Task updateStatus(Long taskId);
}
