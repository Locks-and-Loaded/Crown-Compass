package com.example.crowncompass.models;


import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor

public class TheService {
    private Timestamp createdAt;
    private String description;
    private String facebookLink;
    private String id;
    private String instagramLink;
    private String serviceLink;
    private Timestamp updatedAt;

}
