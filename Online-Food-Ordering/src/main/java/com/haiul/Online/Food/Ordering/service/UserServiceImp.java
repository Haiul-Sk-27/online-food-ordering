package com.haiul.Online.Food.Ordering.service;

import com.haiul.Online.Food.Ordering.config.JwtProvider;
import com.haiul.Online.Food.Ordering.model.User;
import com.haiul.Online.Food.Ordering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt); // get email from JWT
        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email); // use instance, not class

        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }
}