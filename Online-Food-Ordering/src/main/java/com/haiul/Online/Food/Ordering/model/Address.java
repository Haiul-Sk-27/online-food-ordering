package com.haiul.Online.Food.Ordering.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
