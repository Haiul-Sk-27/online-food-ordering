package com.haiul.Online.Food.Ordering.repository;

import com.haiul.Online.Food.Ordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
