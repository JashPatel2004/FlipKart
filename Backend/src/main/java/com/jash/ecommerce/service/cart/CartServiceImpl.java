package com.jash.ecommerce.service.cart;

import com.jash.ecommerce.entity.Cart;
import com.jash.ecommerce.entity.CartItem;
import com.jash.ecommerce.entity.Product;
import com.jash.ecommerce.entity.User;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.repository.CartRepository;
import com.jash.ecommerce.request.AddItemRequest;
import com.jash.ecommerce.service.cartItem.CartItemService;
import com.jash.ecommerce.service.product.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CartServiceImpl implements CartService{

    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;

    public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }

    @Override
    @Transactional
    public Cart createCart(User user) {
        Cart cart=new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getProductId());

        CartItem cartItem = cartItemService.isCartItemExist(cart,product, req.getSize(), userId);

        if (cartItem == null){
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setCart(cart);
            newItem.setQuantity(req.getQuantity());
            newItem.setUserId(userId);
            newItem.setPrice(req.getQuantity()* product.getDiscountedPrice());
            newItem.setSize(req.getSize());

            CartItem createCartItem = cartItemService.createCartItem(newItem);
            cart.getCartItems().add(createCartItem);
        }
        return "Item Added";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        int totalPrice=0;
        int totalDiscountedPrice=0;
        int totalItem=0;

        for (CartItem cartItem : cart.getCartItems()){
            totalPrice+=cartItem.getPrice();
            totalDiscountedPrice+=cartItem.getDiscountedPrice();
            totalItem+=cartItem.getQuantity();
        }

        cart.setTotalPrice(totalPrice);
        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalItem(totalItem);
        cart.setDiscount(totalPrice-totalDiscountedPrice);
        return  cartRepository.save(cart);
    }
}
