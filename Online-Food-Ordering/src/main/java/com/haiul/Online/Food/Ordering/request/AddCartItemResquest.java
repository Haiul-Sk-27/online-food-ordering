package com.haiul.Online.Food.Ordering.request;

import lombok.Data;

import java.util.List;

@Data
public class AddCartItemResquest {

    private Long foodId;

    private int quantity;

    private List<String> ingredients;
}
