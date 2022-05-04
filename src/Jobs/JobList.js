import React, { Component } from "react";
import "./JobList.css";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardText,
  CCardFooter,
  CButton,
} from "@coreui/react";

export default class JobList extends Component {
  render() {
    return (
      <div>
        <div className="head">--:: LIST OF JOBS ::--</div>
        <br></br>
        <div className="jlcards">
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage
                  orientation="top"
                  src="/images/assistant-professor.jpg"
                />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: ASSISTANT PROFESSOR</div>
                  <div className="cctext">
                    <CCardText>
                      <div>QUALIFICATION:- Master's Degree</div>
                      <div>REQUIRED SKILLS:- </div>
                      <li>Deep interest in the related subject</li>
                      <li>Creativity to find innovative ideas for teaching</li>
                      <li>Desire to learn new things Perfect communication</li>
                      <li>Thorough research</li>
                      <li>Problem-solving ability</li>
                      <li> Time management</li>
                      <li>Positive confidence</li>
                    </CCardText>
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage orientation="top" src="/images/prof.jpg" />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: PROFESSOR</div>
                  <div className="cctext">
                    <CCardText>
                      <div>QUALIFICATION:- Master's Degree</div>
                      <div>REQUIRED SKILLS:- </div>
                      <li>
                        The art of expressing thoughts before dignitaries.
                      </li>

                      <li>
                        Capability to understand new and creative ways of
                        teaching.
                      </li>

                      <li>
                        Ability to manage time between teaching and
                        administrative work
                      </li>

                      <li>Be prepared to solve any problem of the students.</li>
                    </CCardText>
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage
                  height="390"
                  orientation="top"
                  src="/images/gaming.jpeg"
                />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: GAMING TRAINER</div>
                  <div className="cctext">
                    <div>QUALIFICATION:- Master's Degree</div>
                    <div>REQUIRED SKILLS:- </div>
                    <li>Coming up with new and appealing game ideas</li>
                    <li>Developing gameplay ideas</li>
                    <li>Experimenting with themes and genres</li>
                    <li>Developing plots and storylines</li>
                    <li>Developing characters</li>
                    <li>
                      Developing maps, scenarios, and levels of difficulty
                    </li>
                    <li>Coming up with ways of winning and losing the game</li>
                    <li>
                      Developing user interface (menus and controls) concepts
                    </li>
                    <li>Improving existing games</li>
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <br />
        <div className="jlcards">
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage orientation="top" src="/images/3D.jpeg" />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: 3D Designer</div>
                  <div className="cctext">
                    <CCardText>
                      <div>QUALIFICATION:- Bachelor Degree</div>
                      <div>REQUIRED SKILLS:- </div>
                      <li>
                        3D artists in medical illustration must have a working
                        knowledge of biology.
                      </li>
                      <li>
                        A strong portfolio of previous work and completed
                        projects.
                      </li>
                      <li>
                        Strong working knowledge of industry-standard software,
                        including 3ds Max, V-Ray, SketchUp, and Maya.
                      </li>
                      <li>Excellent creativity and artistic skills.</li>
                      <li>
                        An eye for composition, realism, texture, color, and
                        lighting.
                      </li>
                      <li>Good communication and teamwork skills.</li>
                      <li>Excellent time management skills.</li>
                      <li>
                        Willingness to remain up-to-date on the latest creative
                        software and hardware.
                      </li>
                    </CCardText>
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage
                  orientation="top"
                  src="/images/ANIMATIONDESIGNER.jpeg"
                />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: ANIMATION DESIGNER</div>
                  <div className="cctext">
                    <CCardText>
                      <div>
                        QUALIFICATION:- Bachelor's Degree in Animation, Computer
                        Graphics
                      </div>
                      <div>REQUIRED SKILLS:- </div>
                      <li>Creativity and imagination.</li>
                      <li>Patience and attention to detail.</li>
                      <li>Drawing skills.</li>
                      <li>
                        Computer literacy and familiarity with graphics
                        software.
                      </li>
                      <li>Communication and presentation skills.</li>
                      <li>
                        Ability to meet deadlines and work as part of a team.
                      </li>
                    </CCardText>
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 jlcard">
                <CCardImage
                  height="390"
                  orientation="top"
                  src="/images/flexible-account-manager.png"
                />
                <CCardBody className="jlcard-body">
                  <div className="cct">ROLE: REMOTE ACCOUNTS MANAGER</div>
                  <div className="cctext">
                    <div>
                      QUALIFICATION:- Bachelor's degree in business, marketing,
                      communications, public relations,
                    </div>
                    <div>REQUIRED SKILLS:- </div>
                    <li>Multitask</li>
                    <li>Communicate well both verbally and in writing</li>
                    <li>Display empathy and emotional intelligence</li>
                    <li>Negotiate, Solve problems</li>
                    <li>
                      Responsibilities:-{" "}
                      <li>
                        Making the client aware of other services and actions
                        that may lead to greater success
                      </li>
                      <li>
                        Monitoring the client's budget, explaining costs, and
                        negotiating new terms if necessary
                      </li>
                    </li>
                    {/*<li>
                    Making the client aware of other services and actions that
                    may lead to greater success
                  </li>
                  <li>
                    Monitoring the client's budget, explaining costs, and
                    negotiating new terms if necessary
                  </li>
                  <li>
                    Monitoring the client's budget, explaining costs, and
                    negotiating new terms if necessary
                  </li>
                  <li>
                    Providing progress reports to clients and upper management
                  </li>
    <li>Teaching junior employees how to service the account</li>*/}
                  </div>
                </CCardBody>
                <CCardFooter>
                  <CButton href="/">APPLY</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </div>
    );
  }
}
