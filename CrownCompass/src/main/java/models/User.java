package models;

import com.google.cloud.firestore.annotation.DocumentId;
import com.google.firebase.database.annotations.Nullable;
import com.google.protobuf.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //creates setters and getters automatically
@AllArgsConstructor //creates constructor with all values automatically
@NoArgsConstructor //creates no argument constructor automatically

public class User {
    @DocumentId
    private @Nullable String id;
    private String username;
    private Timestamp createdAt; //use google cloud timestamp
    private String email;
    private String password;




}
