package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.dto.RestaurantDto;
import com.haiul.Online.Food.Ordering.model.Address;
import com.haiul.Online.Food.Ordering.model.Restaurant;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.repository.AddressRepository;
import com.haiul.Online.Food.Ordering.repository.RestaurantRepository;
import com.haiul.Online.Food.Ordering.repository.UserRepository;
import com.haiul.Online.Food.Ordering.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;;

    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {

        Address address = new Address();
        Address savedAddress = addressRepository.save(address);

        Restaurant restaurant = new Restaurant();
        restaurant.setAddress(savedAddress);
        restaurant.setCuisineType(req.getCuisineType());
        restaurant.setDescription(req.getDescription());
        restaurant.setImages(req.getImages());
        restaurant.setName(req.getName());
        restaurant.setOpeningHours(req.getOpeningHours());
        restaurant.setRegistrationDate(LocalDateTime.now());
        restaurant.setOwner(user);
        restaurant.setOpen(true);

        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRequest) throws Exception {
        Restaurant restaurant = findRestaurantByUserId(restaurantId);

        if (updateRequest.getCuisineType() != null) {
            restaurant.setCuisineType(updateRequest.getCuisineType());
        }

        if (updateRequest.getDescription() != null) {
            restaurant.setDescription(updateRequest.getDescription());
        }

        if (updateRequest.getName() != null) {
            restaurant.setName(updateRequest.getName());
        }

        return restaurantRepository.save(restaurant);
    }


    @Override
    public Restaurant deleteRestaurant(Long restaurantId) throws Exception {

        Restaurant restaurant = findRestaurantByUserId(restaurantId);
        restaurantRepository.delete(restaurant);

        return restaurant;
    }

    @Override
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurants(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }


    @Override
    public Restaurant getRestaurantByUserId(Long userId) throws Exception {
        return restaurantRepository.findByOwnerId(userId)
                .orElseThrow(() -> new Exception("Restaurent not found with owner id " + userId));
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);

        RestaurantDto dto = new RestaurantDto();
        dto.setId(restaurant.getId());
        dto.setTitle(restaurant.getTitle());
        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());

        boolean isFavorite = false;
        List<Restaurant> favorites = user.getFavorites();

        for (Restaurant favorite : favorites) {
            if (favorite.getId().equals(restaurantId)) {
                isFavorite = true;
                break;
            }
        }

        if (isFavorite) {
            favorites.removeIf(fav -> fav.getId().equals(restaurantId));
        } else {
            favorites.add(dto);
        }



        userRepository.save(user);

        return dto;
    }

    @Override
    public Restaurant findRestaurantByUserId(Long id) throws Exception {
        Optional<Restaurant> opt = restaurantRepository.findById(id);

        if(opt.isEmpty()){
            throw new Exception("resturent not found with id"+id);
        }
        return opt.get();
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
       Optional<Restaurant> opt = restaurantRepository.findById(id);

       if(opt.isEmpty()){
           throw new Exception("Resturant not fund with id"+id);
       }

       return opt.get();
    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {

        Restaurant restaurant = findRestaurantByUserId(id);
        restaurant.setOpen(!restaurant.isOpen());

        return restaurantRepository.save(restaurant);
    }
}
