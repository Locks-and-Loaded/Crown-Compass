package com.example.crowncompass.controller;
import com.example.crowncompass.models.User;
import com.example.crowncompass.service.UserService;
import com.example.crowncompass.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/User")

public class UserController{
    @Autowired

    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllUser(){
        try{
            return ResponseEntity.ok(new ApiResponse(true, "Success", userService.getAllUser(), null));
        }
        catch(Exception e){
            return ResponseEntity.status(500).body(new ApiResponse(false,"An error occurred.", null, e.getMessage()));
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getUserById(@PathVariable String id){
        try{
            return ResponseEntity.ok(new ApiResponse(true, "Success", userService.getUserById(id), null));
        }
        catch(Exception e){
            return ResponseEntity.status(500).body(new ApiResponse(false,"An error occurred.", null, e.getMessage()));
        }

    }
    @PostMapping
    public ResponseEntity<ApiResponse> createNewUser(@RequestBody User user){
        try{
            return ResponseEntity.ok(new ApiResponse(true,"Success", userService.createUser(user),null));
        } catch (ExecutionException e){
            return ResponseEntity.status(401).body(new ApiResponse(false, "An error occured", null, e.getMessage()));
        } catch (InterruptedException e){
            return ResponseEntity.status(500).body(new ApiResponse(false,"An error occurred", null, e.getMessage()));
        }
    }
    @PutMapping("/{user}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String user,@RequestBody Map<String, String> j ){
        try{
            userService.updateUser(user,j);
            return ResponseEntity.ok(new ApiResponse(true,"Update Success",null,null));
        } catch (Exception e){
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id){
        try{
            userService.deleteHotel(id);
            return ResponseEntity.ok(new ApiResponse(true,"Update Success",null,null));
        } catch (Exception e){
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }

    }


}

