package com.demo.medico.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.medico.entity.Patients;
import com.demo.medico.service.PatientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/patients")
public class PatientController {

    @Autowired
    PatientService service;

    @GetMapping
    public List<Patients> getPatients() {
        return service.getAllPatients();
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Patients>> getPatient(@PathVariable long id) {
        return service.getPatientById(id);
    }

    @PostMapping
    public String create(@RequestBody Patients patient) {
        return service.createPatient(patient);
    }

    @PutMapping("{id}")
    public Patients update(@RequestBody Patients patient, @PathVariable long id) {
        return service.updatePatient(patient, id);
    }

    @DeleteMapping("{id}")
    public String deletePatient(@PathVariable long id) {
        return service.deletePatientById(id);
    }

    @DeleteMapping
    public String deleteAll() {
        return service.deleteAllPatients();
    }
}
