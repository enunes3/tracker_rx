import axios from 'axios';


//API endpoint that appends the additional info needed to do the certain actions & works as the middleman to get the work done.
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

//exporting object of class so we can use object in other components
export default new PrescriptionService();