package com.haiul.Online.Food.Ordering.controller;

import com.haiul.Online.Food.Ordering.model.Food;
import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.request.CreateFoodRequest;
import com.haiul.Online.Food.Ordering.response.MessageResponse;
import com.haiul.Online.Food.Ordering.service.FoodService;
import com.haiul.Online.Food.Ordering.service.RestaurantService;
import com.haiul.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PutMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req, @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food = foodService.createFood(req,req.getCategory(),restaurant);

        return  new ResponseEntity<>(food, HttpStatus.CREATED);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id , @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

       foodService.deleteFood(id);

       MessageResponse res = new MessageResponse();
       res.setMessage("food delete successfully");

        return  new ResponseEntity<>(res, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Food> updateAvailibilityStatus(@PathVariable Long id , @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Food food = foodService.updateAvailibilityStatus(id);



        return  new ResponseEntity<>(food, HttpStatus.OK);
    }
}
