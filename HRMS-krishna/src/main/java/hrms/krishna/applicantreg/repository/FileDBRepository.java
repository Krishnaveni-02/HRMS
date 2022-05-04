package hrms.krishna.applicantreg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hrms.krishna.applicantreg.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
