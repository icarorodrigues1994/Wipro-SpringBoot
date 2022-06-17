package com.alexpro.courierservices.entities;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.alexpro.courierservices.entities.enums.OrderStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tb_orders")
public class Order implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String orderNumber;
	private OrderStatus orderStatus;
	private Instant orderDate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss", timezone = "GMT-3")
	private Instant deliveredDate;
	private double weight;
	private double cost;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER) 
	private PersonSend personSend;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER) 
	private PersonReceived personReceived;

	public Order() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Instant getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Instant orderDate) {
		this.orderDate = orderDate;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public PersonSend getPersonSend() {
		return personSend;
	}

	public void setPersonSend(PersonSend personSend) {
		this.personSend = personSend;
	}

	public PersonReceived getPersonReceived() {
		return personReceived;
	}

	public void setPersonReceived(PersonReceived personReceived) {
		this.personReceived = personReceived;
	}

	public Instant getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(Instant deliveredDate) {
		this.deliveredDate = deliveredDate;
	}
	

}
