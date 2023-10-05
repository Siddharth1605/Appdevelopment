package com.demo.medico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.medico.entity.Doctors;

public interface DoctorRepository extends JpaRepository<Doctors, Long>{

}
