package com.example.crowncompass.service;
import com.example.crowncompass.models.User;
import com.example.crowncompass.util.ApiResponse;
import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.google.protobuf.util.Timestamps;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.ParseException;
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
        public void updateUser (String id, Map < String, Object > updatedValues) throws ParseException {
        String[] allowed = {"updatedAt", "userLocation", "createdAt", "username"};
            List<String> list = Arrays.asList(allowed);
            Map<String, Object> formattedValues = new HashMap<>();
            Log logger = LogFactory.getLog(this.getClass());

            for (Map.Entry<String, Object> entry : updatedValues.entrySet()) {
                String key = entry.getKey();

                if (list.contains(key)) {
                    switch(key) {
                        case "createdAt":
                        case "updatedAt":
                            formattedValues.put(key, Timestamp.fromProto(Timestamps.parse((String) entry.getValue())));
                            break;

                        case "userLocation":
                            double latitude, longitude;
                            HashMap<String,Double> latlon = (HashMap<String,Double>) entry.getValue();
                            latitude = latlon.get("latitude");
                            longitude = latlon.get("longitude");
                            GeoPoint geoPoint = new GeoPoint(latitude,longitude);
                            formattedValues.put(key,geoPoint);
                            break;
                        default:
                            formattedValues.put(key, (String) entry.getValue());
                            break;
                    }
                }
            }

            DocumentReference userDoc = firestore.collection("User").document(id);
            logger.info(formattedValues);
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
        public void deleteUsers (String userID) throws ExecutionException, InterruptedException {
            CollectionReference userCollection = firestore.collection("User");
            DocumentReference future = userCollection.document(userID);
            future.delete();


        }

    }


