package com.assignment.todo.repository;

import com.assignment.todo.entity.Task;
import com.assignment.todo.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findTop5ByUserIdAndStatusOrderByCreatedAtDesc(String userId, Status status);
}
