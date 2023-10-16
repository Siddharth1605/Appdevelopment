package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Patients;
import com.example.demo.service.PatientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
    private  PatientService patientService;

    @GetMapping
    public List<Patients> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Optional<Patients> getPatientById(@PathVariable int id) {
        return patientService.getPatientById(id);
    }

    @PostMapping
    public Patients createPatient(@RequestBody Patients Patient) {
        return patientService.createPatient(Patient);
    }

    @PutMapping("/{id}")
    public Patients updatePatient(@PathVariable int id, @RequestBody Patients updatedPatient) {
        return patientService.updatePatient(id, updatedPatient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable int id) {
        patientService.deletePatient(id);
    }
    @DeleteMapping
    public void deletePatient() {
    	patientService.deleteAll();
    }
}
