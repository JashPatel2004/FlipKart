package com.jash.ecommerce.service.review;

import com.jash.ecommerce.entity.Product;
import com.jash.ecommerce.entity.Reviews;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.repository.ReviewRepository;
import com.jash.ecommerce.request.ReviewRequest;
import com.jash.ecommerce.service.product.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    private ReviewRepository reviewRepository;
    private ProductService productService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
    }
    @Override
    @Transactional
    public Reviews createReviews(ReviewRequest reviewsRequest, User user) throws ProductException {
        Product product = productService.findProductById(reviewsRequest.getProductid());
        Reviews reviews = new Reviews();
        reviews.setUser(user);
        reviews.setProduct(product);
        reviews.setCreatedAt(LocalDateTime.now());
        reviews.setReview(reviewsRequest.getReview());
        return reviewRepository.save(reviews);
    }

    @Override
    public List<Reviews> getProductsReviews(Long productId) {
        return reviewRepository.getAllReviews(productId);
    }
}
