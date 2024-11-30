package com.sample.springboot_boilerplate.dto;

public class SignupResponse {
    private String userid;
    private String name;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
