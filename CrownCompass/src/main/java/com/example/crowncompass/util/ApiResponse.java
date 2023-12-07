package com.example.crowncompass.util;

public record ApiResponse(boolean success, String message, Object data, Object error) {

        }

