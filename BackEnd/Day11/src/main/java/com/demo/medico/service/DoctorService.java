package com.demo.medico.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.medico.entity.Doctors;
import com.demo.medico.repository.DoctorRepository;

@Service
public class DoctorService {
	@Autowired
	DoctorRepository repo;
	
	public List<Doctors> getAllDoctors()
	{
		return repo.findAll();
	}
	
	public ResponseEntity<Optional<Doctors>> getDoctorById(long id)
	{
		Optional<Doctors> doctor = repo.findById(id);
		return ResponseEntity.ok(doctor);
	}
	
	public String createDoctor(Doctors d)
	{
		repo.save(d);
		return "New doctor is created successfully";
	}
	
	public Doctors updateDoctor(Doctors d)
	{
		return repo.save(d);
	}
	
	public String deleteDoctorById(long id)
	{
		repo.deleteById(id);
		return "Doctor is deleted successfully";
	}
	public String deleteAllDoctors()
	{
		repo.deleteAll();
		return "All doctors are deleted successfully";
	}
}
