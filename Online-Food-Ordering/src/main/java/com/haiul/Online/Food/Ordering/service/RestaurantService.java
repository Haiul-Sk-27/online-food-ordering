package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.dto.RestaurantDto;
import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.request.CreateRestaurantRequest;
import java.util.List;

public interface RestaurantService {

    Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRequest) throws Exception;

    Restaurant deleteRestaurant(Long restaurantId) throws Exception;

    List<Restaurant> getAllRestaurants();

    List<Restaurant> searchRestaurants(String query);

    Restaurant getRestaurantByUserId(Long userId) throws Exception;

    RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception;

    Restaurant findRestaurantByUserId(Long id) throws Exception;

    Restaurant findRestaurantById(Long id) throws Exception;

    Restaurant updateRestaurantStatus(Long id) throws Exception;
}
