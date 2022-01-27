package com.richardella.employeemanagement.repository;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.richardella.employeemanagement.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
