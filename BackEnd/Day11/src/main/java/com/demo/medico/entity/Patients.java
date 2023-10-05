package com.demo.medico.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="PatientsInfo")
public class Patients {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String patientName;
	private String patientAge;
	private String patientGender;
	private String patientConsultation;
	private String patientInsurance;
	private String patientPreivousConsultation;
	public Patients(Long id, String patientName, String patientAge, String patientGender, String patientConsultation,
			String patientInsurance, String patientPreivousConsultation) {
		super();
		this.id = id;
		this.patientName = patientName;
		this.patientAge = patientAge;
		this.patientGender = patientGender;
		this.patientConsultation = patientConsultation;
		this.patientInsurance = patientInsurance;
		this.patientPreivousConsultation = patientPreivousConsultation;
	}
	public Patients() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getPatientAge() {
		return patientAge;
	}
	public void setPatientAge(String patientAge) {
		this.patientAge = patientAge;
	}
	public String getPatientGender() {
		return patientGender;
	}
	public void setPatientGender(String patientGender) {
		this.patientGender = patientGender;
	}
	public String getPatientConsultation() {
		return patientConsultation;
	}
	public void setPatientConsultation(String patientConsultation) {
		this.patientConsultation = patientConsultation;
	}
	public String getPatientInsurance() {
		return patientInsurance;
	}
	public void setPatientInsurance(String patientInsurance) {
		this.patientInsurance = patientInsurance;
	}
	public String getPatientPreivousConsultation() {
		return patientPreivousConsultation;
	}
	public void setPatientPreivousConsultation(String patientPreivousConsultation) {
		this.patientPreivousConsultation = patientPreivousConsultation;
	}
	
}
