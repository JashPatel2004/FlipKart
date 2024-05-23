package com.jash.ecommerce.controller;

import com.jash.ecommerce.entity.Cart;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.exception.UserException;
import com.jash.ecommerce.request.AddItemRequest;
import com.jash.ecommerce.response.ApiResponse;
import com.jash.ecommerce.service.cart.CartService;
import com.jash.ecommerce.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    public CartService cartService;
    @Autowired
    public UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException{
        User user=userService.findUserProfileByJwt(jwt);
        Cart cart=cartService.findUserCart(user.getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
                                                     @RequestHeader("Authorization") String jwt)
            throws UserException, ProductException{
        User user=userService.findUserProfileByJwt(jwt);
        cartService.addCartItem(user.getId(),req);
        ApiResponse res=new ApiResponse();
        res.setMessage("Item succesfully added to cart.");
        res.setStatus(true);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }
}
