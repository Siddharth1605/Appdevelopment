package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Doctors;

public interface DoctorRepository extends JpaRepository<Doctors, Integer> {

}
