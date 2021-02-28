package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.PrescriptionRepository;
import com.example.demo.model.Prescription;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PrescriptionController {

		@Autowired
		private PrescriptionRepository prescriptionRepository;
		
		
		//get all prescriptions
		@GetMapping("/prescriptions")
		public List<Prescription> getAllPrescriptions(){
			return prescriptionRepository.findAll();
		}
		
		//create prescription rest api
		@PostMapping("/prescriptions")
		public Prescription createPrescription(@RequestBody Prescription prescription) {
			return prescriptionRepository.save(prescription);
		}
}
