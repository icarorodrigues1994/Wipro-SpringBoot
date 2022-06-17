package com.alexpro.courierservices.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexpro.courierservices.entities.Admin;
import com.alexpro.courierservices.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository repository;

	public Boolean login(String login, String password) {
		Admin admin = repository.findAdminByLoginAndPassword(login, password);
		if (admin != null) {
//			return admin;
			System.out.println("Retonour true");
			return true;
		} else {
//			return admin;
			System.out.println("Retonour false");
			return false;
		}
	}

}
