package com.haiul.Online.Food.Ordering.repository;

import com.haiul.Online.Food.Ordering.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmail(String userName);
}
