
package service;
package com.booking.booking.service;
import com.booking.booking.model.Hotels;
import com.booking.booking.util.ApiResponse;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;
@Service
public class UserService {
  private Firestore firestore;

    public HotelsService(){
        this.firestore = FirestoreClient.getFirestore();

    }

    private Hotels documentSnapshotToHotel(DocumentSnapshot document)
    {
        Hotels hotel = null;
        if(document.exists()){
            ArrayList<String> amenities = (ArrayList<String>) document.get("amenities");
            hotel = new Hotels(document.getId(), document.getString("name"), document.getString("description"), document.getLong("rating"), document.getString("address"), document.getString("contactInformation"),amenities,document.getTimestamp("createdAt"));
            }
        return hotel;

    }
    public ArrayList<Hotels> getAllHotels()throws ExecutionException, InterruptedException {
        CollectionReference hotelsCollection = firestore.collection("Hotels");
        ApiFuture<QuerySnapshot> future = hotelsCollection.get();

        ArrayList<Hotels> bookingsList = new ArrayList<>();

        for(DocumentSnapshot document: future.get().getDocuments()){
            Hotels hotels = documentSnapshotToHotel(document);
            if(hotels != null)
                bookingsList.add(hotels);
        }
        return bookingsList;

    }

    public Hotels getHotelsById(String hotelID) throws ExecutionException, InterruptedException {
        CollectionReference bookingsCollection = firestore.collection("Hotels");
        ApiFuture<DocumentSnapshot> future = bookingsCollection.document(hotelID).get();
        DocumentSnapshot document = future.get();
        return documentSnapshotToHotel(document);
    }
    public String createHotels(Hotels hotels) throws ExecutionException, InterruptedException {
        String hotelsId = null;
        ApiFuture<DocumentReference> future = firestore.collection("Hotels").add(hotels);
        DocumentReference postRef = future.get();
        hotelsId = postRef.getId();
        return hotelsId;

    }
    public void updateHotels(String id, Map<String, String> updatedValues){
        String[] allowed = {"name", "description", "address"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updatedValues.entrySet())
        {
            String key = entry.getKey();
            if(list.contains(key))
            {
                formattedValues.put(key, entry.getValue());
            }
        }
        DocumentReference hotelsDoc = firestore.collection("Hotels").document(id);
        if(hotelsDoc != null)
            hotelsDoc.update(formattedValues);
    }
    public void deleteHotel(String roomID) throws ExecutionException, InterruptedException {
        CollectionReference hotelsCollection = firestore.collection("Users");
        ApiFuture<DocumentSnapshot> future = hotelsCollection.document(roomID).get();
        DocumentSnapshot document = future.get();
        if (document.getId().equals(roomID)) {
            hotelsCollection.document(roomID).delete();
        }

    }

}

}
