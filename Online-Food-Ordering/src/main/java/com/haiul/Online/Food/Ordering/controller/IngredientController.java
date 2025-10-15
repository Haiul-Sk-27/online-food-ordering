package com.haiul.Online.Food.Ordering.controller;

import com.haiul.Online.Food.Ordering.model.IngredientCategory;
import com.haiul.Online.Food.Ordering.model.IngredientsItem;
import com.haiul.Online.Food.Ordering.request.IngredientCategoryRequest;
import com.haiul.Online.Food.Ordering.request.IngredientRequest;
import com.haiul.Online.Food.Ordering.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createingredientitem(
            @RequestBody IngredientCategoryRequest req
            ) throws Exception {
        IngredientCategory item = ingredientsService.createIngredientCategory(req.getName(),req.getRestaurenId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createingredientitanItem(
            @RequestBody IngredientRequest req
    ) throws Exception {
        IngredientsItem item = ingredientsService.createIngredientitem(
                req.getRestaurantId(),
                req.getName(),
                req.getCateforyId()
        );
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping("{id}/stoke")
    public ResponseEntity<IngredientsItem> updateIngredientStock(
            @PathVariable Long id
    ) throws Exception {
        IngredientsItem item = ingredientsService.updateStock(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @PostMapping("/restaurent/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredient(@PathVariable Long id) throws Exception {
        List<IngredientsItem> items = ingredientsService.findRestaurentsIngredients(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @PostMapping("/restaurent/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategories(@PathVariable Long id) throws Exception {
        List<IngredientCategory> items = Collections.singletonList(ingredientsService.findIngredientCategoryById(id));
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

}
