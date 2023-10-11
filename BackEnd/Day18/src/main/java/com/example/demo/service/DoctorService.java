package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctors;
import com.example.demo.repository.DoctorRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

	@Autowired
    private DoctorRepository doctorRepository;

    public List<Doctors> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Optional<Doctors> getDoctorById(int id) {
        return doctorRepository.findById(id);
    }

    public Doctors createDoctor(Doctors Doctor) {
        return doctorRepository.save(Doctor);
    }

    public Doctors updateDoctor(int id, Doctors updatedDoctor) {
        Optional<Doctors> existingDoctorOptional = doctorRepository.findById(id);

        if (existingDoctorOptional.isPresent()) {
            Doctors existingDoctor = existingDoctorOptional.get();
            existingDoctor.setDoctorName(updatedDoctor.getDoctorName());
            existingDoctor.setDoctorAge(updatedDoctor.getDoctorAge());
            existingDoctor.setDoctorRating(updatedDoctor.getDoctorRating());
            existingDoctor.setDoctorGender(updatedDoctor.getDoctorGender());
            existingDoctor.setDoctorExperience(updatedDoctor.getDoctorExperience());
            existingDoctor.setDoctorQualification(updatedDoctor.getDoctorQualification());

            return doctorRepository.save(existingDoctor);
        } else {
            return null;
        }
    }

    public void deleteDoctor(int id) {
        doctorRepository.deleteById(id);
    }
}
