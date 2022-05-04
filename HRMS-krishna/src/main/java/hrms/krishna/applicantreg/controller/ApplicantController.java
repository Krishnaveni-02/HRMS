package hrms.krishna.applicantreg.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hrms.krishna.applicantreg.EH.ApplicantNotFoundException;
import hrms.krishna.applicantreg.model.Applicant;
import hrms.krishna.applicantreg.model.SubmitResponse;
import hrms.krishna.applicantreg.repository.ApplicantRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrms")
public class ApplicantController {
	
	@Autowired
	ApplicantRepository applicantrepo;
	
	// retrieve all users
	@GetMapping(path="/allapplicants",produces="application/json")
	public List<Applicant> getAllApplicants() {
		return applicantrepo.findAll();
	}
	
	// retrieve by id
	@GetMapping("/allapplicants/{id}")
	public ResponseEntity<Applicant> getApplicantById(@PathVariable int id) {
		Applicant applicant = applicantrepo.findById(id)
				.orElseThrow(() -> new ApplicantNotFoundException("Applicant not found with id: "+id));
		return ResponseEntity.ok(applicant);
	}
	
	// save applicant
	
	@PostMapping("/allapplicants")
	public ResponseEntity<SubmitResponse> addApplicant(@Valid @RequestBody Applicant applicant,BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<SubmitResponse>(HttpStatus.BAD_REQUEST);
		}
		applicantrepo.save(applicant);
		return ResponseEntity.ok(new SubmitResponse("Successfully Applied!"));
	}
	
	// delete applicant by id
	
	@DeleteMapping("/allapplicants/{id}") 
	public void deleteApplicant(@PathVariable int id) {
		applicantrepo.deleteById(id);
	}

}
