package com.haiul.Online.Food.Ordering.response;

import com.haiul.Online.Food.Ordering.model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
    public String jwt;
    private String message;
    private USER_ROLE role;
}
