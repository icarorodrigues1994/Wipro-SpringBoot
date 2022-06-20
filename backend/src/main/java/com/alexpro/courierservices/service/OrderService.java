package com.alexpro.courierservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexpro.courierservices.entities.Order;
import com.alexpro.courierservices.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public Order getOrder(String orderNumber) {
		Order order = orderRepository.findByOrderNumber(orderNumber);

		if (order != null) {
			return order;
		} else {
			return null;
		}
	}

	public List<Order> getAllOrders() {
		List<Order> orders = orderRepository.findAll();

		if (orders != null) {
			return orders;
		} else {
			return null;
		}
	}

	public Order saveOrder(Order order) {
		return orderRepository.save(order);
	}
	
	public Order updateOrder(String orderNumber, Order newOrder) {
		Order order = orderRepository.findByOrderNumber(orderNumber);
		
		order.setOrderStatus(newOrder.getOrderStatus());
		order.setDeliveredDate(newOrder.getDeliveredDate());
		return orderRepository.save(order);
	}
}
