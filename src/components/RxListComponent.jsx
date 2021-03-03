import React, { Component } from 'react'
import PrescriptionService from '../services/PrescriptionService'
import '../App.css'

class RxListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prescriptions : []
        }
        this.addPrescription = this.addPrescription.bind(this);
        this.editPrescription = this.editPrescription.bind(this);
        this.deletePrescription = this.deletePrescription.bind(this);
    }

    deletePrescription(id){
        //rest api call
        window.confirm("Are you positive you would like to delete this prescription?")
        PrescriptionService.deletePrescription(id).then( res=> {
            this.setState({prescriptions: this.state.prescriptions.filter(prescription => prescription.id !== id)});
        });
        
    }
    editPrescription(id){
        this.props.history.push (`/update-prescription/${id}`); 
    }

        //promise
        //storing res.data inside Employee array
    componentDidMount() {
        PrescriptionService.getPrescriptions().then((res) => {
            this.setState({ prescriptions : res.data});
        });
    }

    addPrescription() {
       this.props.history.push ('/add-prescription'); 
    }

    

    render() {
        return (
            <div>
                <h2 className = "text-center">List of Prescriptions</h2>
                    <div className = "row">
                        <button style={{marginLeft: "30px"}} className = "btn btn-primary" onClick = {this.addPrescription}>Add Prescription</button>
                    </div>
                    <br></br>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Medication Name</th>
                                    <th>Dosage</th>
                                    <th>Quantity</th>
                                    <th>Date & Time</th>
                                    <th>Notes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.prescriptions.map(
                                        prescription =>
                                            <tr key = {prescription.id}>
                                                <td> {prescription.rx_name} </td>
                                                <td> {prescription.dosage} </td>
                                                <td> {prescription.quantity} </td>
                                                <td> {prescription.date_created} </td>
                                                <td> {prescription.notes} </td>

                                                <td> 
                                                    <button onClick = {() => this.editPrescription(prescription.id)}  className = "btn btn-info">Update</button>
                                                    <button style={{marginLeft: "15px"}} onClick = {() => this.deletePrescription(prescription.id)} className = "btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

export default RxListComponent;

                   

