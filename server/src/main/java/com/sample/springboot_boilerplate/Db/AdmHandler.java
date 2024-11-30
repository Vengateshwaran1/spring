package com.sample.springboot_boilerplate.Db;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdmHandler {

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    public List<Object[]> getAdminById(String id) {
        StringBuilder query = new StringBuilder();
        query.append("select admin_id,name,email from admin where admin_id = :id ");

        Query nativeQuery = entityManager.createNativeQuery(query.toString());
        return nativeQuery.setParameter("id", id).getResultList();
    }

   // @SuppressWarnings("unchecked")
   // public List<Object[]> getProductList(Integer id) {
     //   StringBuilder query = new StringBuilder();
     //   query.append("select id, product_name from t_product where org_id = :id ");

     //   Query nativeQuery = entityManager.createNativeQuery(query.toString());
     //   return nativeQuery.setParameter("id", id).getResultList();
    //}
}

