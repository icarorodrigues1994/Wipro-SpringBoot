package com.alexpro.courierservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alexpro.courierservices.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

	
	Order findByOrderNumber(String orderNumber);
}
