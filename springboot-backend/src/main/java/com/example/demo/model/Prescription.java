package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prescriptions")
public class Prescription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "rx_name")
	private String rx_name;
	
	@Column(name = "dosage")
	private String dosage;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "notes")
	private String notes;
	
	//default constructor
	//hibernate uses proxys to create proxy objects
	public Prescription() {
		
	}
	
	public Prescription(String rx_name, String dosage, int quantity, String notes) {
		super();
		this.rx_name = rx_name;
		this.dosage = dosage;
		this.quantity = quantity;
		this.notes = notes;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRx_name() {
		return rx_name;
	}
	public void setRx_name(String rx_name) {
		this.rx_name = rx_name;
	}
	public String getDosage() {
		return dosage;
	}
	public void setDosage(String dosage) {
		this.dosage = dosage;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	
}
