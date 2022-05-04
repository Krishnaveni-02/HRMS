package hrms.krishna.applicantreg.repository;

import org.springframework.stereotype.Repository;

import hrms.krishna.applicantreg.model.Applicant;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Integer> {

}
