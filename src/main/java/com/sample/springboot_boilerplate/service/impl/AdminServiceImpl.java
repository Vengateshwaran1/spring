package com.sample.springboot_boilerplate.service.impl;

import com.sample.springboot_boilerplate.Db.AdmHandler;
import com.sample.springboot_boilerplate.dto.AdminDTO;
import com.sample.springboot_boilerplate.dto.UserDTO;
import com.sample.springboot_boilerplate.entity.Admin;
import com.sample.springboot_boilerplate.exception.ResourceNotFoundException;
import com.sample.springboot_boilerplate.mapper.AdminMapper;
import com.sample.springboot_boilerplate.repository.AdminRepository;
import com.sample.springboot_boilerplate.service.AdminService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;
    private final AdminMapper adminMapper;
    private final AdmHandler admHandler;

    public AdminServiceImpl(AdminRepository adminRepository, AdminMapper adminMapper, AdmHandler admHandler) {
        this.adminRepository = adminRepository;
        this.adminMapper = adminMapper;
        this.admHandler = admHandler;
    }


    //@Override
    //public List<ProductDTO> getProductList(Integer id) {
      //  List<Object[]> orgs = orgHandler.getProductList(id);
      // List<ProductDTO> products = new ArrayList<>();

      //  for (Object[] org : orgs) {
        //    ProductDTO dto = new ProductDTO();
        //    dto.setId(Integer.parseInt(Objects.toString(org[0])));
        //    dto.setName((String) org[1]);
        //    products.add(dto);
        //}

        //return products;
    //}

    @Override
    public AdminDTO getAdminById(String id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Organization not found with Admin ID: " + id));

        return adminMapper.toDTO(admin);
    }
}