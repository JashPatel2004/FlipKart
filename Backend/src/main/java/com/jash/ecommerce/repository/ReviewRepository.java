package com.jash.ecommerce.repository;

import com.jash.ecommerce.entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Reviews,Long> {

    @Query("select r FROM Reviews r WHERE r.product.id= :productId")
    List<Reviews> getAllReviews(@Param("productId") Long productId);
}
