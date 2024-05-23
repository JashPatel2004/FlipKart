package com.jash.ecommerce.controller;

import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.CartitemException;
import com.jash.ecommerce.exception.UserException;
import com.jash.ecommerce.response.ApiResponse;
import com.jash.ecommerce.service.cartItem.CartItemService;
import com.jash.ecommerce.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart_item")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private UserService userService;

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> removeCartItem(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable Long id) throws UserException, CartitemException {
        User user=userService.findUserProfileByJwt(jwt);
        cartItemService.removeCartItem(user.getId(), id);

        ApiResponse res=new ApiResponse();
        res.setMessage("Cart item deleted succesfully.");
        res.setStatus(true);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
