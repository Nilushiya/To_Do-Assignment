package com.assignment.todo.service;

import com.assignment.todo.entity.Task;
import com.assignment.todo.enums.Status;
import com.assignment.todo.exception.TaskNotFoundException;
import com.assignment.todo.exception.TaskOperationException;
import com.assignment.todo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImp implements TaskService{
    private final TaskRepository taskRepository;
    @Override
    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getRecentTasks(String userId) {
        List<Task> tasks = taskRepository.findTop5ByUserIdAndStatusOrderByCreatedAtDesc(userId, Status.PENDING);
        return tasks;
    }

    @Override
    public Task updateStatus(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with ID: " + taskId));

        if (task.getStatus() == Status.COMPLETED) {
            throw new TaskOperationException("Cannot update a task that is already completed");
        }

        task.setStatus(Status.COMPLETED);
        task.setCompletedAt(LocalDateTime.now());
        return taskRepository.save(task);
    }
}
