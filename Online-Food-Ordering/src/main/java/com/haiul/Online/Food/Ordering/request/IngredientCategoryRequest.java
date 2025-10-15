package com.haiul.Online.Food.Ordering.request;

import lombok.Data;

@Data
public class IngredientCategoryRequest {
    private String name;
    private Long restaurenId;
}
