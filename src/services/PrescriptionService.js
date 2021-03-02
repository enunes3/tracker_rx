import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/v1/prescriptions";

class PrescriptionService {
    getPrescriptions(){
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }
    createPrescription(prescription) {
        return axios.post(PRESCRIPTION_API_BASE_URL, prescription);
    }
    getPrescriptionById(prescriptionId){
        return axios.get(PRESCRIPTION_API_BASE_URL + '/' + prescriptionId);
    }
    updatePrescription(prescription, prescriptionId){
        return axios.put(PRESCRIPTION_API_BASE_URL + '/' + prescriptionId, prescription);
    }
    deletePrescription(prescriptionId){
        return axios.delete(PRESCRIPTION_API_BASE_URL + '/' + prescriptionId)
    }
}

export default new PrescriptionService();