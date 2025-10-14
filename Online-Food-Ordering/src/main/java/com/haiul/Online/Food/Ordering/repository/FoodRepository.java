package com.haiul.Online.Food.Ordering.repository;

import com.haiul.Online.Food.Ordering.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food,Long> {

    List<Food> findbyRestaurantId(Long restaurantId);

    @Query("SELECT FROM Food f WHERE f.neme LIKE N:keyword's OR f.foodCategory.name LIKE %:keywords")
    List<Food> searchFood(@Param(("keyword"))String keyword);
}
