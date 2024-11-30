package com.sample.springboot_boilerplate.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sample.springboot_boilerplate.Db.AuthHandler;
import com.sample.springboot_boilerplate.service.AuthService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthHandler authHandler;

    @Override
    public boolean authUser(String userid, String password) {
        List<Object[]> emp = authHandler.authUser(userid, password);
        return emp.size() > 0;

    }


    @Override
    public void signupUser(String email, String password, String name) {
    authHandler.saveUser(email, password, name);
    }


    //userExistsByEmail
    @Override
    public boolean userExistsByEmail(String email) {
        List<Object[]> ema = authHandler.userExistsByEmail(email);
        return ema.size() > 0;

    }



}
