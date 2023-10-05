package com.demo.medico.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="DoctorsInfo")
public class Doctors {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 private String doctorName;
	 private String doctorAge;
	 private String doctorGender;
	 private String doctorQuallification;
	 private int doctorExperience;
	 private String doctorRating;
	public Doctors(Long id, String doctorName, String doctorAge, String doctorGender, String doctorQuallification,
			int doctorExperience, String doctorRating) {
		super();
		this.id = id;
		this.doctorName = doctorName;
		this.doctorAge = doctorAge;
		this.doctorGender = doctorGender;
		this.doctorQuallification = doctorQuallification;
		this.doctorExperience = doctorExperience;
		this.doctorRating = doctorRating;
	}
	public Doctors() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getDoctorAge() {
		return doctorAge;
	}
	public void setDoctorAge(String doctorAge) {
		this.doctorAge = doctorAge;
	}
	public String getDoctorGender() {
		return doctorGender;
	}
	public void setDoctorGender(String doctorGender) {
		this.doctorGender = doctorGender;
	}
	public String getDoctorQuallification() {
		return doctorQuallification;
	}
	public void setDoctorQuallification(String doctorQuallification) {
		this.doctorQuallification = doctorQuallification;
	}
	public int getDoctorExperience() {
		return doctorExperience;
	}
	public void setDoctorExperience(int doctorExperience) {
		this.doctorExperience = doctorExperience;
	}
	public String getDoctorRating() {
		return doctorRating;
	}
	public void setDoctorRating(String doctorRating) {
		this.doctorRating = doctorRating;
	}
	 
}
