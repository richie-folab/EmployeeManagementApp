package com.richardella.employeemanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.richardella.employeemanagement.exception.ResourceNotFoundException;
import com.richardella.employeemanagement.model.Employee;
import com.richardella.employeemanagement.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
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
	
	//create a new employee
	@PostMapping("/new")
	public Employee createNewEmployee(@RequestBody Employee employee) {
		return employeeRespository.save(employee);
	}
	
	@GetMapping("/{id}")
 	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		Employee employee =  employeeRespository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee with id " + id + " does not exist"));
		
		return ResponseEntity.ok(employee);
	}

}
