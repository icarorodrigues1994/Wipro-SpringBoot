package com.alexpro.courierservices.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Date;
import java.util.Random;

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
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy", timezone = "GMT-3")
	private Date orderDate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy", timezone = "GMT-3")
	private Date deliveredDate;
	private double weight;
	private double cost;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER) 
	private PersonSend personSend;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER) 
	private PersonReceived personReceived;

	public Order() {
		orderNumber = randomNumberAccount();
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

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
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

	public Date getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(Date deliveredDate) {
		this.deliveredDate = deliveredDate;
	}
	
	public String randomNumberAccount() {
		String numberAccount = "";
		Random random = new Random();
		for (int j = 0; j < 6; j++) {
			numberAccount += Integer.toString(random.nextInt(10));
		}
		return numberAccount;
	}
	

}
