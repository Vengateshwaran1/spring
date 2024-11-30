package com.sample.springboot_boilerplate.service;

public interface AuthService {

    // Simulate database lookup
    boolean authUser(String userid, String password);

    // Add a method for user signup
    void signupUser(String email, String password, String name);
    //userExistsByEmail
    public boolean userExistsByEmail(String email);
}
