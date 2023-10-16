package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Patients;
import com.example.demo.repository.PatientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

	@Autowired
    private  PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patients> getAllPatients() {
        return patientRepository.findAll();
    }

    public Optional<Patients> getPatientById(int id) {
        return patientRepository.findById(id);
    }

    public Patients createPatient(Patients Patient) {
        return patientRepository.save(Patient);
    }

    public Patients updatePatient(int id, Patients updatedPatient) {
        Optional<Patients> existingPatientOptional = patientRepository.findById(id);

        if (existingPatientOptional.isPresent()) {
            Patients existingPatient = existingPatientOptional.get();
            existingPatient.setPatientName(updatedPatient.getPatientName());
            existingPatient.setPatientAge(updatedPatient.getPatientAge());
            existingPatient.setPatientGender(updatedPatient.getPatientGender());
            existingPatient.setPatientInsurance(updatedPatient.getPatientInsurance());
            existingPatient.setPatientConsultation(updatedPatient.getPatientConsultation());
            existingPatient.setPatientPreviousConsultation(updatedPatient.getPatientPreviousConsultation());

            return patientRepository.save(existingPatient);
        } else {
            throw new RuntimeException("Patient not found with ID: " + id);
        }
    }

    public void deletePatient(int id) {
        patientRepository.deleteById(id);
    }

	public void deleteAll() {
		
		patientRepository.deleteAll();
		// TODO Auto-generated method stub
		
	}
}
