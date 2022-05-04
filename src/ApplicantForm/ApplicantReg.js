import React, { Component } from "react";
import "./ApplicantReg.css";
//import Select from "react-select";
import axios from "axios";
//import { useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import UploadService from "../services/upload-files.service";

const Jobs = [
  { label: "Professor", value: 1 },
  { label: "Assistant Professor", value: 2 },
  { label: "Game Developer Trainer", value: 3 },
  { label: "Coding Trainer", value: 4 },
];

export default class DemoPic extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
    //this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.applicantChange = this.applicantChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onAppliedRoleValue = this.onAppliedRoleValue.bind(this);

    //upload files
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  /*changeFirstNameHandler = (event) => {
    this.setState({ first_name: event.target.value });
  };*/

  initialState = {
    first_name: "",
    last_name: "",
    mother_name: "",
    father_name: "",
    dob: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    interestedfield:"",
    appliedRole: "",

    //files
    selectedFiles: undefined,
    currentFile: undefined,
    progress: 0,
    message: "",

    fileInfos: [],
  };

  resetForm = () => {
    this.setState(() => this.initialState);
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const applicant = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mother_name: this.state.mother_name,
      father_name: this.state.father_name,
      dob: this.state.dob,
      email: this.state.email,
      gender: this.state.gender,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      pincode: this.state.pincode,
      appliedRole: this.state.appliedRole,
      interestedfield: this.state.interestedfield,
    };

    axios
      .post("http://localhost:8080/hrms/allapplicants", applicant)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true });
          setTimeout(() => this.setState({ show: false }), 3000);
          alert("Job applied successfully!!");
        } else {
          this.setState({ show: false });
        }
      });

      this.props.history.push('/submitForm'); 

    this.setState(this.initialState);
  };

  applicantChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeValue = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onAppliedRoleValue = (event) => {
    this.setState({
      appliedRole: event.target.value,
    });
  };

  //file upload
  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {
      first_name,
      last_name,
      mother_name,
      father_name,
      dob,
      email,
      gender,
      address,
      city,
      state,
      pincode,
      interestedfield,
      appliedRole,
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;
    return (
      <div>
        <section className="h-100 bg-dark">
          <div className="container py-5 h-100">
            <div className="content">
              <h1 className="display-1 mb-lg-0 text_shadows">
                Want to be hired in CUTM?
              </h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample"
                        className="img-fluid"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem",
                        }}
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h2 className="mb-5 text-info text-uppercase">
                          APPLY FOR A JOB
                        </h2>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="firstname"
                                name="first_name"
                                value={first_name}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label className="form-label" htmlFor="firstname">
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="lastname"
                                name="last_name"
                                value={last_name}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label className="form-label" htmlFor="lastname">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="mothername"
                                name="mother_name"
                                value={mother_name}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="mothername"
                              >
                                Mother's name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="fathername"
                                name="father_name"
                                value={father_name}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="fathername"
                              >
                                Father's name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="dob"
                            name="dob"
                            value={dob}
                            className="form-control form-control-lg"
                            placeholder=" "
                            onChange={this.applicantChange}
                            required
                          />
                          <label className="form-label" htmlFor="dob">
                            DOB
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="emailid"
                            name="email"
                            value={email}
                            className="form-control form-control-lg"
                            placeholder=" "
                            onChange={this.applicantChange}
                            required
                          />
                          <label className="form-label" htmlFor="emailid">
                            Email ID
                          </label>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Female"
                              //checked={this.state.gender === "Female"}
                              onChange={this.onChangeValue}
                              id="femaleGender"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Male"
                              //checked={this.state.gender === "Male"}
                              onChange={this.onChangeValue}
                              id="maleGender"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Other"
                              //checked={this.state.gender === "Other"}
                              onChange={this.onChangeValue}
                              id="otherGender"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            className="form-control form-control-lg"
                            placeholder=" "
                            onChange={this.applicantChange}
                            required
                          />
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label className="form-label" htmlFor="city">
                                City
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="state"
                                name="state"
                                value={state}
                                className="form-control form-control-lg"
                                placeholder=" "
                                onChange={this.applicantChange}
                                required
                              />
                              <label className="form-label" htmlFor="state">
                                State
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={pincode}
                            className="form-control form-control-lg"
                            placeholder=" "
                            onChange={this.applicantChange}
                            required
                          />
                          <label className="form-label" htmlFor="pincode">
                            Pincode
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="interestedfield"
                            name="interestedfield"
                            value={interestedfield}
                            className="form-control form-control-lg"
                            placeholder=" "
                            onChange={this.applicantChange}
                            required
                          />
                          <label className="form-label" htmlFor="interestedfield">
                            Interested Field
                          </label>
                        </div>
                        <div
                          className="form-outline mb-4"
                          onChange={this.onAppliedRoleValue}
                        >
                          <select
                            className="form-control form-control-lg"
                            placeholder="select role"
                          >
                            <option value="Professor" name="applied_role">
                              Professor
                            </option>
                            <option
                              value="Assistant Professor"
                              name="applied_role"
                            >
                              Assistant Professor
                            </option>
                            <option value="Gaming Trainer" name="applied_role">
                              Gaming Trainer
                            </option>
                            value={appliedRole}
                          </select>
                        </div>

                        <div className="form-outline mb-4">
                          {currentFile && (
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-info progress-bar-striped"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progress + "%" }}
                              >
                                {progress}%
                              </div>
                            </div>
                          )}
                          <input
                            id="uploadcv"
                            className="form-control form-control-lg"
                            placeholder=" "
                            type="file"
                            onChange={this.selectFile}
                          />
                          <div className="small text-muted mt-2">
                            Upload your CV/Resume or any other relevant file.
                            Max file size 10 MB
                          </div>
                          <button
                            className="btn btn-success"
                            disabled={!selectedFiles}
                            onClick={this.upload}
                          >
                            Upload
                          </button>

                          <div className="alert alert-light" role="alert">
                            {message}
                          </div>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="submit"
                            className="btn btn-light btn-lg button1"
                            onClick={this.resetForm}
                          >
                            RESET ALL
                          </button>

                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2 btnsubmit"
                            onClick={this.submitForm}
                          >
                            SUBMIT FORM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
