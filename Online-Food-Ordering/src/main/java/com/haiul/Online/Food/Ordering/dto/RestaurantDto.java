package com.haiul.Online.Food.Ordering.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantDto {
    private String title;

    @Column(length = 1000)
    private List<String> images;


}
