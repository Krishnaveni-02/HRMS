import React, { Component } from "react";
import ApplicantService from '../services/ApplicantService';

export default class ApplicantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        applicants: []
    }
  }

  componentDidMount() {
      ApplicantService.getApplicants().then((res) => {
          this.setState({applicants: res.data});
      });
  }

  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Gender</th>
              <th>Full Address</th>
              <th>Role</th>
              <th>Resume</th>
              <th>Level and Status</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.applicants.map(
                    applicant => 
                    <tr key={applicant.id}>
                        <td>{applicant.id}</td>
                        <td>{applicant.first_name}</td>
                        <td>{applicant.last_name}</td>
                        <td>{applicant.email}</td>
                        <td>{applicant.gender}</td>
                        <td>{applicant.address},{applicant.city},{applicant.state}</td>
                        <td>{applicant.appliedRole}</td>
                        <td></td>
                        <td>Applied</td>
                    </tr>
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
