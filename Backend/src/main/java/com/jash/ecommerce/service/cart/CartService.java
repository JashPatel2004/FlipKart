package com.jash.ecommerce.service.cart;

import com.jash.ecommerce.entity.Cart;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.CartitemException;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.exception.UserException;
import com.jash.ecommerce.request.AddItemRequest;

public interface CartService {

    Cart createCart(User user);
    String addCartItem(Long userId, AddItemRequest req) throws ProductException;
    Cart findUserCart(Long userId);
    String removeCartItem(Long userId, Long itemId) throws UserException, CartitemException;
}
