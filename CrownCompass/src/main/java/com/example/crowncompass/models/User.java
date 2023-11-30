package com.example.crowncompass.models;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.GeoPoint;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.firebase.database.annotations.Nullable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.ref.Reference;

@Data //creates setters and getters automatically
@AllArgsConstructor //creates constructor with all values automatically
@NoArgsConstructor //creates no argument constructor automatically

public class User {
    @DocumentId
    private @Nullable String id;
    private Timestamp createdAt; //use google cloud timestamp
    private String email;
    private String password;
    private Timestamp updatedAt;
    private GeoPoint userLocation;
    private String username;




}
