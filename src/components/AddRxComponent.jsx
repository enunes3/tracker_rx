import React, { Component, useState } from 'react'


 class AddRxComponent extends Component {
     constructor(props) {
         super(props)

         this.state = {
            // id: this.props.match.params.id,
            rx_name: '',
            dosage : '',
            quantity: '',
            notes: ''
            
         }
        this.changeRxNameHandle = this.changeRxNameHandle.bind(this);
        this.changeDosageHandler = this.changeDosageHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.savePrescription = this.savePrescription.bind(this);
     }

     savePrescription (event) {
        event.preventDefault(); 
        let prescription = { rx_name: this.state.rx_name, dosage: this.state.dosage, quantity: this.state.quantity, notes: this.state.notes};
        console.log('prescription =>' + JSON.stringify(prescription));
     }

     changeRxNameHandle(event) {
        this.setState({rx_name: event.target.value});
        // console.log(rx_name);
        }
    changeDosageHandler(event){
        this.setState({dosage: event.target.value});
        }

    changeQuantityHandler(event){
        this.setState({quantity: event.target.value});
        }

    changeNotesHandler(event){
            this.setState({notes: event.target.value});
    }

    // cancel = () => {
    //     this.props.history.push('/add-employee');
    // }

    render() {
        return (
            <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className = "text-center">Add Prescription</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label>Medication Name</label>
                                        < input 
                                            placeholder = "Prescription Name"                                  
                                            name = "rx_name"
                                            value={this.state.rxName}
                                            onChange={this.changeRxNameHandle}    
                                        /> 
                                <div className = "form-group">
                                    <label>Dosage</label>                                              
                                        < input 
                                            placeholder = "Dosage"
                                            name = "dosage"
                                            value={this.state.dosage}
                                            onChange={this.changeDosageHandler}    
                                        /> 
                                </div>
                                <div className = "form-group">
                                    <label>Quantity</label>
                                        < input 
                                            placeholder = "Quantity"
                                            name = "quantity"
                                            value={this.state.quantity}
                                            onChange={this.changeQuantityHandler}    
                                        /> 
                                </div>
                                            {/*<label>Date & Time</label> */}
                                <div className = "form-group">
                                    <label>Notes</label>
                                            < input 
                                                placeholder = "Notes"
                                                name = "notes"
                                                value={this.state.notes}
                                                onChange={this.changeNotesHandler}    
                                            /> 
                                </div>
                                <button className = "btn btn-success" onClick = {this.savePrescription}>Save</button>          
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
}



export default AddRxComponent;


// import React, { Component } from 'react';
// import PrescriptionService from '../services.js/PrescriptionService';

// class AddRxComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             rx_name : '',
//             dosage : '',
//             quantity: '',
//             notes: ''
//         }
//         this.changeRxNameHandler = this.changeRxNameHandler.bind(this);
//         this.changeDosageHandler = this.changeDosageHandler.bind(this);
//         this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
//         this.changeNotesHandler = this.changeNotesHandler.bind(this);
//         this.savePrescription = this.savePrescription.bind(this);
//     }
//     savePrescription = (event) => {
//         event.preventDefault(); 
//         let prescription = { rx_name: this.state.rx_name, dosage: this.state.dosage, quantity: this.state.quantity, notes: this.state.notes};
//         console.log('prescription =>' + JSON.stringify(prescription));

//         PrescriptionService.createPrescription(prescription).then(res => {
//             this.props.history('/rxlist');
//         });
//      }
// changeRxNameHandle(event) {
//     this.setState({rx_name: event.target.value});
//     // console.log(rx_name);
// }
//     changeRxNameHandler = (event) => {
//         this.setState({rx_name: event.target.value});
//     }

//     changeDosageHandler(event){
//         this.setState({dosage: event.target.value});
//     }

//     changeQuantityHandler(event){
//         this.setState({quantity: event.target.value});
//     }

//     changeNotesHandler(event){
//         this.setState({notes: event.target.value});
//     }

//     render() {
//         return (
//             <div>
//                 <h2>List of prescriptions</h2>
//                     <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 <h3 className = "text-center">Add Prescription</h3>
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label>Medication Name</label>
//                                             < input 
//                                                 placeholder = "Prescription Name"
//                                                 name = "rx_name"
//                                                 value={this.state.rx_name}
//                                                 onChange={this.changeRxNameHandler}    
//                                             /> 
//                                         </div>
//                                         <div className = "form-group">
//                                             <label>Dosage</label>
//                                                 < input 
//                                                     placeholder = "Dosage"
//                                                     name = "dosage"
//                                                     value={this.state.dosage}
//                                                     onChange={this.changeDosageHandler}    
//                                                 /> 
//                                         </div>
//                                         <div className = "form-group">
//                                             <label>Quantity</label>
//                                                 < input 
//                                                     placeholder = "Quantity"
//                                                     name = "quantity"
//                                                     value={this.state.quantity}
//                                                     onChange={this.changeQuantityHandler}    
//                                                 /> 
//                                         </div>
//                                             {/*<label>Date & Time</label> */}
//                                         <div className = "form-group">
//                                             <label>Notes</label>
//                                                 < input 
//                                                     placeholder = "Notes"
//                                                     name = "notes"
//                                                     value={this.state.notes}
//                                                     onChange={this.changeNotesHandler}    
//                                                 /> 
//                                         </div>
//                                         <button className = "btn btn-success" >Save</button>

//                                     </form>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//             </div>
//         );
//     }
// }

// export default AddRxComponent;