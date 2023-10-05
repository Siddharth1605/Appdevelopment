package com.demo.medico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.medico.entity.Doctors;
import com.demo.medico.repository.DoctorRepository;
import com.demo.medico.service.DoctorService;

@RestController
@RequestMapping("/api/v1/doctors")
public class DoctorController {

	@Autowired
	DoctorService service;
	
	@GetMapping
	public List<Doctors> getDoctors()
	{
		return service.getAllDoctors();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Optional<Doctors>> getdoctor(@PathVariable long id)
	{
		return service.getDoctorById(id);
	}
	
	@PostMapping
	public String create(@RequestBody Doctors d)
	{
		return service.createDoctor(d);
	}
	
	@PutMapping("{id}")
	public Doctors update(@RequestBody Doctors d)
	{
		return service.updateDoctor(d);
	}
	
	@DeleteMapping("{id}")
	public String deleteDoctor(@PathVariable long id)
	{
		return service.deleteDoctorById(id);
	}
	
	@DeleteMapping
	public String delete()
	{
		return service.deleteAllDoctors();
	}
	
}
