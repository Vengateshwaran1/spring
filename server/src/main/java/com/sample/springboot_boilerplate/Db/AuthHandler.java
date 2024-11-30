package com.sample.springboot_boilerplate.Db;

import java.util.List;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Repository
public class AuthHandler {

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    public List<Object[]> authUser(String empEmail, String password) {
        StringBuilder query = new StringBuilder();
        query.append("select * from user where email = :empEmail and password = :password ");

        Query nativeQuery = entityManager.createNativeQuery(query.toString());
        nativeQuery.setParameter("empEmail", empEmail);
        nativeQuery.setParameter("password", password);
        return nativeQuery.getResultList();
    }



    @Transactional
    public void saveUser(String email,  String password, String name) {
        String query = "INSERT INTO user (email,password, username) VALUES (:email,:password, :name)";
        Query nativeQuery = entityManager.createNativeQuery(query);
        nativeQuery.setParameter("email", email);
        nativeQuery.setParameter("password", password);
        nativeQuery.setParameter("name", name);
        nativeQuery.executeUpdate();
    }

    //  userExistsByEmail
    @SuppressWarnings("unchecked")
    public List<Object[]> userExistsByEmail(String email) {
        StringBuilder query = new StringBuilder();
        query.append("select * from user where email = :email ");

        Query nativeQuery = entityManager.createNativeQuery(query.toString());
        nativeQuery.setParameter("email", email);
        return nativeQuery.getResultList();
    }
    

}
