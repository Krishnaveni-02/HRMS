package hrms.krishna.applicantreg.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;

@Entity
@Table(name="applicant_data")
public class Applicant implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@NotBlank(message="First Name is required.")
	//@Min(3)
	private String First_name;
	
	@NotBlank(message="Last Name is required.")
	//@Min(3)
	private String Last_name;
	
	@NotBlank(message="Mother Name is required.")
	//@Min(3)
	private String Mother_name;
	
	@NotBlank(message="Father Name is required.")
	//@Min(3)
	private String Father_name;
	
	@NotBlank(message="Fill your Date of Birth.")
	private String DOB;
	
	@NotNull(message="Email is required.")
	@Email(message = "Email is not well formatted.")
	private String Email;
	
	private String Gender;
	@NotBlank(message="Fill the address.")
	
	private String Address;
	@NotBlank(message="Fill the correct city name.")
	
	private String City;
	@NotBlank(message="State is required.")
	
	private String State;
	@NotNull(message="Pincode is required.")
	
	private int Pincode;
	
	@NotNull(message="Interested Field is required.")
	private String InterestedField;
	
	private String AppliedRole;
	
	public Applicant() {
		super();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirst_name() {
		return First_name;
	}
	public void setFirst_name(String first_name) {
		First_name = first_name;
	}
	public String getLast_name() {
		return Last_name;
	}
	public void setLast_name(String last_name) {
		Last_name = last_name;
	}
	public String getMother_name() {
		return Mother_name;
	}
	public void setMother_name(String mother_name) {
		Mother_name = mother_name;
	}
	public String getFather_name() {
		return Father_name;
	}
	public void setFather_name(String father_name) {
		Father_name = father_name;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String dob) {
		DOB = dob;
	}

	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public int getPincode() {
		return Pincode;
	}
	public void setPincode(int pincode) {
		Pincode = pincode;
	}
	public String getAppliedRole() {
		return AppliedRole;
	}
	public String getInterestedField() {
		return InterestedField;
	}

	public void setInterestedField(String interestedField) {
		InterestedField = interestedField;
	}

	public void setAppliedRole(String appliedRole) {
		AppliedRole = appliedRole;
	}

	public Applicant(int id, @NotBlank(message = "First Name is required.") String first_name,
			@NotBlank(message = "Last Name is required.") String last_name,
			@NotBlank(message = "Mother Name is required.") String mother_name,
			@NotBlank(message = "Father Name is required.") String father_name,
			@NotBlank(message = "Fill your Date of Birth.") String dOB,
			@NotNull(message = "Email is required.") @javax.validation.constraints.Email(message = "Email is not well formatted.") String email,
			String gender, @NotBlank(message = "Fill the address.") String address,
			@NotBlank(message = "Fill the correct city name.") String city,
			@NotBlank(message = "State is required.") String state,
			@NotNull(message = "Pincode is required.") int pincode, @NotNull(message = "Interested Field is required.") String interestedField, String appliedRole, FileDB file_obj) {
		super();
		this.id = id;
		First_name = first_name;
		Last_name = last_name;
		Mother_name = mother_name;
		Father_name = father_name;
		DOB = dOB;
		Email = email;
		Gender = gender;
		Address = address;
		City = city;
		State = state;
		Pincode = pincode;
		InterestedField = interestedField;
	}

	@Override
	public String toString() {
		return "Applicant [id=" + id + ", First_name=" + First_name + ", Last_name=" + Last_name + ", Mother_name="
				+ Mother_name + ", Father_name=" + Father_name + ", DOB=" + DOB + ", Email=" + Email + ", Gender="
				+ Gender + ", Address=" + Address + ", City=" + City + ", State=" + State + ", Pincode=" + Pincode
				+ ", InterestedField=" + InterestedField + ", AppliedRole=" + AppliedRole + "]";
	}

	/*@OneToOne
	@JoinColumn(name="file_id")
	private FileDB file_obj;*/
	
}
