package com.richardella.employeemanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.richardella.employeemanagement.model.Employee;
import com.richardella.employeemanagement.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/employees/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRespository;
	
	//Get all employees
	@GetMapping("/all")
	public Iterable<Employee> getAllEmployees() {
		
		return employeeRespository.findAll();
	}
 	

}
