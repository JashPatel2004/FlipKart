package com.jash.ecommerce.service.rating;

import com.jash.ecommerce.entity.Rating;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.request.RatingRequest;

import java.util.List;

public interface RatingService {

    Rating createRating(RatingRequest ratingRequest , User user) throws ProductException;
    List<Rating> getProductsRating(Long productId);
}
