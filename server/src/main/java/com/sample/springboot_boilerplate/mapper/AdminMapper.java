package com.sample.springboot_boilerplate.mapper;

import com.sample.springboot_boilerplate.dto.AdminDTO;
import com.sample.springboot_boilerplate.entity.Admin;
import org.springframework.stereotype.Component;

@Component
public class AdminMapper {

    public AdminDTO toDTO(Admin admin) {
        return new AdminDTO(
                admin.getId(),
                admin.getName(),
                admin.getEmail()
        );
    }
}
