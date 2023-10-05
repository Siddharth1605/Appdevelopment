package com.demo.medico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.medico.entity.Patients;

public interface PatientRepository extends JpaRepository<Patients, Long>{

}
