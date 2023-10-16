package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Appointment;
import com.example.demo.service.AppointmentService;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	
	
	 @GetMapping
	    public List<Appointment> getAllAppointments() {
	        return appointmentService.getAllAppointments();
	    }
	 
	 @PostMapping
	    public Appointment createAppointment(@RequestBody Appointment appointment) {
	        return appointmentService.createAppointment(appointment);
	    }

}
