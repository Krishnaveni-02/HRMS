import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ApplicantReg from "./ApplicantForm/ApplicantReg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormSuccess from "./ApplicantForm/FormSuccess";
import ApplicantList from "./ApplicantList/ApplicantList";
import JobList from "./Jobs/JobList";
import Reg from "./ApplicantForm/Reg";
import ApplicantRegForm from "./ApplicantForm/ApplicantRegForm";

function App() {
  return (
    <div> 
        <Router>
          <Switch>
            <Route exact path="/" component={ApplicantReg} />
            <Route exact path="/applicantRegForm" component={ApplicantRegForm} />
            <Route path="/submitForm"  component={FormSuccess} />
            <Route path="/applicantList" component={ApplicantList} />
            <Route path="/jobLandingPage" component={JobList} />
            <Route path="/reg" component={Reg} />
          </Switch>
          </Router>
    </div>
  );
}

export default App;
