package com.haiul.Online.Food.Ordering.controller;

import com.haiul.Online.Food.Ordering.dto.RestaurantDto;
import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.service.RestaurantService;
import com.haiul.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @GetMapping("/api/restaurant")
    public ResponseEntity<List<Restaurant>> searchRestaurants(
            @RequestHeader("Authorization") String jwt,
            @RequestParam String keyword
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService. searchRestaurants(keyword);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> getAllRestaurants(
            @RequestHeader("Authorization") String jwt
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService.getAllRestaurants();

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    )throws  Exception {
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(id);
        return  new ResponseEntity<>(restaurant,HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    )throws  Exception {
        User user = userService.findUserByJwtToken(jwt);

        RestaurantDto restaurent = restaurantService.addToFavorites(id,user);
        return  new ResponseEntity<>(restaurent,HttpStatus.OK);
    }
}
