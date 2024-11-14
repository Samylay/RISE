package com.samylayaida.rise.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest;
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() throws IOException, InterruptedException {
        String url = "https://tcdpdyrkeqmryndvrvph.supabase.co/rest/v1/Activity";
        String apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZHBkeXJrZXFtcnluZHZydnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDgzNjUsImV4cCI6MjA0NzA4NDM2NX0.tCNdQ5IKj3igoM-RvRNNmUMXNIjmq0gVqQRYMIgl_5Q";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("apikey", apiKey)
                .header("Authorization", "Bearer " + apiKey)
                .build();
        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        return "Hello, World!";
    }
}
