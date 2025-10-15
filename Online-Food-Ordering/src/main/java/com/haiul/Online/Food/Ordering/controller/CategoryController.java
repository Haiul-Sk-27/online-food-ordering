package com.haiul.Online.Food.Ordering.controller;

import com.haiul.Online.Food.Ordering.model.Category;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.service.CategoryService;
import com.haiul.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @PutMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category,
                                                   @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        Category createCategory = categoryService.createCategory(category.getName(),user.getId());

        return new ResponseEntity<>(createCategory, HttpStatus.CREATED);


    }

    @PutMapping("/category/restaurent")
    public ResponseEntity<List<Category>> getRestaurantCategory(
                                                   @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        List<Category> createCategory = categoryService.findCategoryByRestaurentId(user.getId());

        return new ResponseEntity<>(createCategory, HttpStatus.CREATED);


    }
}
