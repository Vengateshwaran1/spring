package com.sample.springboot_boilerplate.controller;

import com.sample.springboot_boilerplate.dto.SignupRequest;
import com.sample.springboot_boilerplate.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class SignupController {

    private final AuthService authService;

    @PostMapping("/signup")
public ResponseEntity<String> signup(@RequestBody SignupRequest signupRequest) {
    try {
        // Check if the user already exists
        if (authService.userExistsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.status(400).body("Signup failed: Email already in use.");
        }

        // Proceed with signup
        authService.signupUser(
            signupRequest.getEmail(),
            signupRequest.getPassword(),
            signupRequest.getName()
        );

        return ResponseEntity.ok("Signup successful!");
    } catch (Exception e) {
        return ResponseEntity.status(500).body("Signup failed: " + e.getMessage());
    }
}

}
