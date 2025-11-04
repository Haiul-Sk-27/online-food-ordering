package com.haiul.Online.Food.Ordering.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User owner;

    private String name;

    private String title;

    private String description;
    private String cuisineType;

    @OneToOne
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_info_id", referencedColumnName = "id")
    private ContactInformation contactInformation;

    private String openingHours;

    @OneToMany(mappedBy = "restaurant",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();

    @ElementCollection
    @Column(length = 1000)
    private List<String> images;

    private LocalDateTime registrationDate;

    private  boolean open;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant",cascade = CascadeType.ALL)
    private List<Food> foods = new ArrayList<>();

}
