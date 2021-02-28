import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/v1/prescriptions";

class PrescriptionService {
    getPrescriptions(){
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }
}

export default new PrescriptionService();