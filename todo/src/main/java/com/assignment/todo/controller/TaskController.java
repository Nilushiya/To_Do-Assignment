package com.assignment.todo.controller;

import com.assignment.todo.dto.TaskCreateDto;
import com.assignment.todo.entity.Task;
import com.assignment.todo.mapper.TaskMapper;
import com.assignment.todo.service.TaskService;
import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    private final TaskMapper taskMapper;

    @PostMapping
    public ResponseEntity<Task> addTask(@RequestBody TaskCreateDto taskCreateDto, @AuthenticationPrincipal Jwt jwt) {
        String userId = jwt.getSubject();
        Task task = taskMapper.toEntity(taskCreateDto, userId);
        Task savedTask = taskService.addTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getRecentTasks( @AuthenticationPrincipal Jwt jwt) {
        String userId = jwt.getSubject();
        List<Task> tasks = taskService.getRecentTasks(userId);
        return ResponseEntity.ok(tasks);
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<Task> updateStatus(@PathVariable Long taskId) {
        Task updatedTask = taskService.updateStatus(taskId);
        return ResponseEntity.ok(updatedTask);
    }
}
