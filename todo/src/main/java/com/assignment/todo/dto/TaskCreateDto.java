package com.assignment.todo.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskCreateDto {
    private String title;
    private String description;
}
