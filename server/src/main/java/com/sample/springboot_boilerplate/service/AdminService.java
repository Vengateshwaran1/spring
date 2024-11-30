package com.sample.springboot_boilerplate.service;

import com.sample.springboot_boilerplate.dto.AdminDTO;
import com.sample.springboot_boilerplate.dto.UserDTO;

import java.util.List;

public interface AdminService {
    AdminDTO getAdminById(String id);
   // List<UserDTO> getUserList(String id);
}