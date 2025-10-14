package com.haiul.Online.Food.Ordering.controller;


import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.request.CreateRestaurantRequest;
import com.haiul.Online.Food.Ordering.response.MessageResponse;
import com.haiul.Online.Food.Ordering.service.RestaurantService;
import com.haiul.Online.Food.Ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurentController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Restaurant> createRestaurent(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.createRestaurant(req,user);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant>updateRestaurant(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurant(id,req);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse>deleteRestaurant(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        restaurantService.deleteRestaurant(id);

        MessageResponse res = new MessageResponse();
        res.setMessage("Restaurent is delete successfully");

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant>updateRestaurantStatus(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant =  restaurantService.updateRestaurantStatus(id);

        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<Restaurant>findRestauentByUserId(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt
    )throws  Exception{
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant =  restaurantService.getRestaurantByUserId(user.getId());

        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }

}
