package com.alexpro.courierservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alexpro.courierservices.entities.Order;
import com.alexpro.courierservices.service.AdminService;
import com.alexpro.courierservices.service.OrderService;

@RestController
@RequestMapping(value = "/courierServices")
@CrossOrigin("*")
public class OrderController {

	@Autowired
	private OrderService service;

	@Autowired
	private AdminService adminService;
	
//	@GetMapping(value = "/validationPassword", params = {"login", "password"})
//	public ResponseEntity<Boolean> login(@RequestParam String login, @RequestParam String password ){
//		Boolean obj = adminService.login(login,password);
//		System.out.println("Tipo do retorno: "+obj);
//		return ResponseEntity.ok().body(obj);
//	}
	
	@GetMapping(value = "/validationPassword/{login}/{password}")
	public ResponseEntity<Boolean> login(@PathVariable String login, @PathVariable String password ){
		Boolean obj = adminService.login(login,password);
		return ResponseEntity.ok().body(obj);
	}
	
	
	
	@GetMapping("/{orderNumber}")
	public ResponseEntity<Order> getOrder(@PathVariable String orderNumber) {
		return ResponseEntity.ok().body(service.getOrder(orderNumber));
	}
	
	@GetMapping("/allOrders")
	public ResponseEntity<List<Order>> getAllOrders() {
		return ResponseEntity.ok().body(service.getAllOrders());
	}
	
	
	@PostMapping
	public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
		return ResponseEntity.ok().body(service.saveOrder(order));
	}
	
	@PutMapping
	public ResponseEntity<Order> updateOrder(@RequestBody Order order) {
		return ResponseEntity.ok().body(service.updateOrder(order));
	}
	
}
