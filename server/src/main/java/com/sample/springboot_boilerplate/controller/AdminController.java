package com.sample.springboot_boilerplate.controller;

import com.sample.springboot_boilerplate.dto.AdminDTO;
import com.sample.springboot_boilerplate.dto.UserDTO;
import com.sample.springboot_boilerplate.exception.ResourceNotFoundException;
import com.sample.springboot_boilerplate.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/org")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/me/{id}")
    public ResponseEntity<?> getAdminById(@PathVariable String id) {
        try {
            AdminDTO admin = adminService.getAdminById(id);
            return ResponseEntity.ok(admin); // 200 OK
        } catch (ResourceNotFoundException ex) {
            // Return 404 Not Found with error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Admin not found with Admin ID: " + id);
        } catch (Exception e) {
            // Return 500 Internal Server Error for any unexpected issues
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal server error occurred");
        }
    }
}