package com.jash.ecommerce.controller;

import com.jash.ecommerce.entity.Reviews;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.exception.UserException;
import com.jash.ecommerce.request.ReviewRequest;
import com.jash.ecommerce.service.review.ReviewService;
import com.jash.ecommerce.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private UserService userService;
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<Reviews> createReview(@RequestBody ReviewRequest req,
                                                @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user=userService.findUserProfileByJwt(jwt);
        Reviews reviews=reviewService.createReviews(req,user);
        return new ResponseEntity<>(reviews, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Reviews>> getProductReviews(@PathVariable Long productId) throws UserException,ProductException{
        List<Reviews> reviews=reviewService.getProductsReviews(productId);
        return new ResponseEntity<>(reviews,HttpStatus.CREATED);
    }
}
