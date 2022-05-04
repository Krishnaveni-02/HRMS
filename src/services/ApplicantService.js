import axios from "axios";

class ApplicantService {
    getApplicants() {
        return axios.get("http://localhost:8080/hrms/allapplicants");
    }
}

export default new ApplicantService()