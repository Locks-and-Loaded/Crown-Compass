package com.example.crowncompass.models;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.GeoPoint;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.firebase.database.annotations.Nullable;

import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.ref.Reference;
import java.text.ParseException;
import java.util.HashMap;

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

    public void setCreatedAt(String createdAt) throws ParseException {
        this.createdAt = Timestamp.fromProto(Timestamps.parse(createdAt));
    }
    public void setUpdatedAt(String updatedAt) throws ParseException {
        this.updatedAt = Timestamp.fromProto(Timestamps.parse(updatedAt));
    }

    public void setUserLocation(HashMap<String,Double> userLocation) {
      GeoPoint geoPoint = new GeoPoint(userLocation.get("latitude"),userLocation.get("longitude"));
      this.userLocation = geoPoint;
    }
}
