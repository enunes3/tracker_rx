import React, { Component } from 'react'
import PrescriptionService from '../services.js/PrescriptionService'

class RxListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prescriptions : []
        }
        this.addPrescription = this.addPrescription.bind(this);
    }

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
                        <button className = "btn btn-primary" onClick = {this.addPrescription}>Add Prescription</button>
                    </div>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Medication Name</th>
                                    <th>Dosage</th>
                                    <th>Quantity</th>
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
                                                <td> {prescription.notes} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default RxListComponent;

// import React, { Component } from 'react';
// class RxListComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             rx_name : '',
//             dosage : '',
//             quantity: '',
//             notes: ''
//         };

//         handleChange = ({ target }) => {
//             this.setState({ [target.name]: target.value });
//          };
//     }

//     render(){
//         return(
//             <div>
//                 <h2>List of Prescriptions</h2>

//                 <form>
//                     < input 
//                         type = "text"
//                         name = "rx_name"
//                         placeholder = "Prescription Name"
//                         value={this.state.rx_name}
//                         onChange={this.handleChange}    
//                     />

//                     < input 
//                         type = "text"
//                         name = "dosage"
//                         placeholder = "Dosage"
//                         value={this.state.dosage}
//                         onChange={this.handleChange} 
//                     />
//                     <label htmlFor = "quantity-select">Quantity</label>
//                         <select 
//                             value={this.state.dosage} 
//                             onChange={this.handleChange} 
//                             name="quantity" 
//                             id="quantity-select">
//                                 <option value="0.5">0.5 capsule</option>
//                                 <option value="1">1 capsule</option>
//                                 <option value="1.5">1.5 capsules</option>
//                                 <option value="2">2 capsules</option>
//                                 <option value="2.5">2.5 capsules</option>
//                                 <option value="3">3 capsules</option>
//                         </select>
//                     < input 
//                         type = "text"
//                         name = "notes"
//                         placeholder = "Notes"
//                         value={this.state.notes}
//                         onChange={this.handleChange}
//                     />
//                     <button type = "submit">Submit</button>
//                 </form>
//             </div>
//             );
//     }
// }
