package com.jash.ecommerce.service.cartItem;

import com.jash.ecommerce.entity.Cart;
import com.jash.ecommerce.entity.CartItem;
import com.jash.ecommerce.entity.Product;
import com.jash.ecommerce.exception.CartitemException;
import com.jash.ecommerce.exception.UserException;

public interface CartItemService {

    CartItem createCartItem(CartItem cartItem);

    void updateCartItem(Long userId, Long id, int quantity) throws CartitemException, UserException;

    CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

    void removeCartItem(Long userId, Long cartItemId) throws CartitemException, UserException;

    CartItem findCartItemById(Long cartItemId) throws CartitemException;
}
