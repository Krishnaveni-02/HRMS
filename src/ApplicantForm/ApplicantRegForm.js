import React, { Component } from "react";
import "./ApplicantRegForm.css";

export default class ApplicantRegForm extends Component {
  render() {
    return (
      <section className="h-100 h-custom gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <h3
                          className="fw-normal mb-5"
                          style={{ color: "#4835d4" }}
                        >
                          General Information
                        </h3>
                
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="fn"
                                className="form-control form-control-lg"
                                placeholder=" "
                              />
                              <label
                                className="form-label"
                                htmlFor="fn"
                              >
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="ln"
                                className="form-control form-control-lg"
                                placeholder=" "
                              />
                              <label
                                className="form-label"
                                htmlFor="ln"
                              >
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="pos"
                              className="form-control form-control-lg"
                              placeholder=" "
                            />
                            <label
                              className="form-label"
                              htmlFor="pos"
                            >
                              Position
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="interestedfield"
                                className="form-control form-control-lg"
                                placeholder=" "
                              /> 
                              <label
                                className="form-label"
                                htmlFor="interestedfield"
                              >
                                Interested Field
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 bg-indigo">
                      <div className="p-5">
                        <h3 className="fw-normal mb-5 text-white">Contact Details</h3>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-outline2">
                            <input
                              type="text"
                              id="street"
                              className="form-control form-control-lg form-control2 bg-indigo"
                              placeholder=" "
                            />
                            <label
                              className="form-label form-label2"
                              htmlFor="street"
                            >
                              Street + Nr
                            </label>
                          </div>
                        </div>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea3"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea3"
                            >
                              Additional Information
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea4"
                              >
                                Zip Code
                              </label>
                            </div>
                          </div>
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea5"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea5"
                              >
                                Place
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea6"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea6"
                            >
                              Country
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea7"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea7"
                              >
                                Code +
                              </label>
                            </div>
                          </div>
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea8"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea8"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea9"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea9"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                          <input
                            className="form-check-input me-3"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="form2Example3"
                          >
                            I do accept the{" "}
                            <a href="#!" className="text-white">
                              <u>Terms and Conditions</u>
                            </a>{" "}
                            of your site.
                          </label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
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
    );
  }
}
