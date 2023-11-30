package com.example.crowncompass.service;
import com.example.crowncompass.models.User;
import com.example.crowncompass.util.ApiResponse;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;
@Service


public class UserService{
    private Firestore firestore;

    public UserService(){
        this.firestore = FirestoreClient.getFirestore();

    }

    private User documentSnapshotToHotel(DocumentSnapshot document) {
        User user = null;
        if (document.exists())
            user = new User(document.getId(), document.getTimestamp("createdAt"), document.getString("email"), document.getString("password"),document.getTimestamp("createdAt") ,document.getGeoPoint("userLocation"),document.getString("username")  );
        return user;


    }
        public ArrayList<User> getAllUser ()throws ExecutionException, InterruptedException {
            CollectionReference userCollection = firestore.collection("User");
            ApiFuture<QuerySnapshot> future = userCollection.get();

            ArrayList<User> bookingsList = new ArrayList<>();

            for (DocumentSnapshot document : future.get().getDocuments()) {
                User user = documentSnapshotToHotel(document);
                if (user != null)
                    bookingsList.add(user);
            }
            return bookingsList;

        }

        public User getUserById (String userID) throws ExecutionException, InterruptedException {
            CollectionReference bookingsCollection = firestore.collection("User");
            ApiFuture<DocumentSnapshot> future = bookingsCollection.document(userID).get();
            DocumentSnapshot document = future.get();
            return documentSnapshotToHotel(document);
        }
        public String createUser (User user) throws ExecutionException, InterruptedException {
            String userId = null;
            ApiFuture<DocumentReference> future = firestore.collection("User").add(user);
            DocumentReference postRef = future.get();
            userId = postRef.getId();
            return userId;

        }
        public void updateUser (String id, Map < String, String > updatedValues){String[] allowed = {"username", "email", "password, userLocation"};
            List<String> list = Arrays.asList(allowed);
            Map<String, Object> formattedValues = new HashMap<>();

            for (Map.Entry<String, String> entry : updatedValues.entrySet()) {
                String key = entry.getKey();
                if (list.contains(key)) {
                    formattedValues.put(key, entry.getValue());
                }
            }

            DocumentReference userDoc = firestore.collection("User").document(id);

            if (userDoc != null) {
                try {
                    userDoc.update(formattedValues);
                    System.out.println("Update successful!");
                } catch (FirestoreException e) {
                    System.err.println("Error updating document: " + e.getMessage());
                }
            } else {
                System.err.println("Document with ID " + id + " not found!");
            }

        }
        public void deleteHotel (String roomID) throws ExecutionException, InterruptedException {
            CollectionReference userCollection = firestore.collection("Users");
            ApiFuture<DocumentSnapshot> future = userCollection.document(roomID).get();
            DocumentSnapshot document = future.get();
            if (document.getId().equals(roomID)) {
                userCollection.document(roomID).delete();
            }

        }

    }


