package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentService {
	
	@Autowired
    private AppointmentRepository appointmentRepository;
	
	
	public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

	
	public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }


}
