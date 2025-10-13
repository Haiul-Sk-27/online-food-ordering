package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.model.User;

public interface UserService {
    User findUserByJwtToken(String jwt) throws Exception;
    User findUserByEmail(String email) throws Exception;
}
