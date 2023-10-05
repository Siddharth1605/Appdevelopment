package com.demo.medico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.medico.entity.Patients;
import com.demo.medico.repository.PatientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    PatientRepository repo;

    public List<Patients> getAllPatients() {
        return repo.findAll();
    }

    public ResponseEntity<Optional<Patients>> getPatientById(long id) {
        Optional<Patients> patient = repo.findById(id);
        return ResponseEntity.ok(patient);
    }

    public String createPatient(Patients patient) {
        repo.save(patient);
        return "New patient is created successfully";
    }

    public Patients updatePatient(Patients patient, long id) {
        // Check if the patient with the given ID exists before updating
        if (repo.existsById(id)) {
            patient.setId(id); // Ensure the correct ID is set
            return repo.save(patient);
        } else {
            // Handle the case where the patient with the given ID doesn't exist
            throw new IllegalArgumentException("Patient with ID " + id + " not found");
        }
    }

    public String deletePatientById(long id) {
        repo.deleteById(id);
        return "Patient is deleted successfully";
    }

    public String deleteAllPatients() {
        repo.deleteAll();
        return "All patients are deleted successfully";
    }
}
