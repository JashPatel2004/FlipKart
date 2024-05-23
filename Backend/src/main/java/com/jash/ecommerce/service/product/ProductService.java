package com.jash.ecommerce.service.product;

import com.jash.ecommerce.entity.Product;
import com.jash.ecommerce.exception.ProductException;
import com.jash.ecommerce.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);
    public String deleteProduct(Long productId) throws ProductException;
    public Product updateProduct(Long productId,Product req) throws ProductException;
    public Product findProductById(Long productId) throws ProductException;
    public List<Product> findProductByCategory(String category);
    public Page<Product> getAllProducts(String category,List<String> colors,List<String> sizes,
                                        Integer minPrice,Integer maxPrice,Integer minDiscount,
                                        String sort,String stock,Integer pageNumber,Integer pageSize);
}
