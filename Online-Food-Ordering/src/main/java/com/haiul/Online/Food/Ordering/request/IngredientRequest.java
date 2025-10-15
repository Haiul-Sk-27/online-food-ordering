package com.haiul.Online.Food.Ordering.request;

import lombok.Data;

@Data
public class IngredientRequest {

    private String name;
    private Long cateforyId;
    private Long restaurantId;
}
