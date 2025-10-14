package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.model.Category;
import com.haiul.Online.Food.Ordering.model.Food;
import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantsFood(Long restaurantID,boolean isVegitrain,boolean isNonveg,boolean isSeasonal,String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailibilityStatus(Long foodId) throws Exception;
}

