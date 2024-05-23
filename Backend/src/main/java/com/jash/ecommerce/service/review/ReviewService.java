package com.jash.ecommerce.service.review;

import com.jash.ecommerce.entity.Reviews;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.request.ReviewRequest;

import java.util.List;

public interface ReviewService {
    Reviews createReviews(ReviewRequest reviewsRequest , User user) throws ProductException;
    List<Reviews> getProductsReviews(Long productId);
}
