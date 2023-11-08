package com.example.crowncompass.models;

import com.google.protobuf.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //creates setters and getters automatically
@AllArgsConstructor //creates constructor with all values automatically
@NoArgsConstructor //creates no argument constructor automatically
public class Payment {
    private String amount;
    private Timestamp createdAt;
    private String id;
    private Timestamp paymentDate;
    private boolean paymentStatus;
    private Timestamp updatedAt;

}
