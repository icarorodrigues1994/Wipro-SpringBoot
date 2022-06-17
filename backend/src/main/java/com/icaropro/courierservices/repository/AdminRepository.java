package com.alexpro.courierservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.alexpro.courierservices.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

	
	Admin findByLogin(String login);
	Admin findByPassword(String password);
	
	@Query(value = "SELECT * FROM admin a where (a.login = :login AND a.password= :password)", nativeQuery = true)
	Admin findAdminByLoginAndPassword(@Param(value = "login") String login,
			@Param(value = "password") String password);
	
}
