package com.jash.ecommerce.controller;

import com.jash.ecommerce.entity.Product;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.request.CreateProductRequest;
import com.jash.ecommerce.response.ApiResponse;
import com.jash.ecommerce.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req){
        Product product=productService.createProduct(req);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException{
        productService.deleteProduct(productId);
        ApiResponse res=new ApiResponse();
        res.setMessage("Product deleted succesfully.");
        res.setStatus(true);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PutMapping("/{productId}/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product req,@PathVariable Long productId) throws ProductException{
        Product product=productService.updateProduct(productId,req);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] req){

        for(CreateProductRequest product:req){
            productService.createProduct(product);
        }
        ApiResponse res=new ApiResponse();
        res.setMessage("Product created succesfully.");
        res.setStatus(true);
        return new ResponseEntity<>(res,HttpStatus.CREATED);
    }
}
