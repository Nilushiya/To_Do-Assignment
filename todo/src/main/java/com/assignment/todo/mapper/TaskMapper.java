package com.assignment.todo.mapper;

import com.assignment.todo.dto.TaskCreateDto;
import com.assignment.todo.dto.TaskDto;
import com.assignment.todo.entity.Task;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskDto toDto(Task task);

    @Mapping(target = "status", constant = "PENDING")
    @Mapping(target = "createdAt", expression = "java(java.time.LocalDateTime.now())")
    @Mapping(target = "completedAt", ignore = true)
    @Mapping(target = "userId", expression = "java(userId)")
    Task toEntity(TaskCreateDto createDto, @Context String userId);


}
