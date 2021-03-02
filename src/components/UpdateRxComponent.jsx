import React, { Component } from 'react'
import PrescriptionService from '../services/PrescriptionService'
import '../App.css'

 class UpdateRxComponent extends Component {
     constructor(props) {
         super(props)

         this.state = {
            id: this.props.match.params.id,
            rx_name: '',
            dosage : '',
            quantity: '',
            notes: ''
            
         }
        this.changeRxNameHandle = this.changeRxNameHandle.bind(this);
        this.changeDosageHandler = this.changeDosageHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.updatePrescription = this.updatePrescription.bind(this);
     }
        //receiving a response from the data and setting it to the State
     componentDidMount(){
        PrescriptionService.getPrescriptionById(this.state.id).then( (res) => {
            let prescription = res.data;
            this.setState({
                rx_name: prescription.rx_name,
                dosage: prescription.dosage, 
                quantity: prescription.quantity, 
                notes: prescription.notes
            });
        });
     }

     updatePrescription (event) {
        event.preventDefault(); 
        let prescription = { rx_name: this.state.rx_name, dosage: this.state.dosage, quantity: this.state.quantity, notes: this.state.notes};
        console.log('prescription =>' + JSON.stringify(prescription));
        PrescriptionService.updatePrescription(prescription, this.state.id).then(res =>{
            this.props.history.push('/rxlist');
        })
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

    cancel() {
        this.props.history.push('/rxlist');
    }

    render() {
        return (
            <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className = "text-center">Update Prescription</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label>Medication Name</label>
                                    <br></br>
                                        < input 
                                            placeholder = "ex. Tylenol"                                  
                                            name = "rx_name"
                                            value={this.state.rxName}
                                            onChange={this.changeRxNameHandle}    
                                        /> 
                                <div className = "form-group">
                                    <label>Dosage</label>                                              <br></br>
                                        < input 
                                            placeholder = "ex. 325mg"
                                            name = "dosage"
                                            value={this.state.dosage}
                                            onChange={this.changeDosageHandler}    
                                        /> 
                                </div>
                                <div className = "form-group">
                                    <label>Quantity</label>
                                    <br></br>
                                        < input 
                                            placeholder = "ex. 2"
                                            name = "quantity"
                                            value={this.state.quantity}
                                            onChange={this.changeQuantityHandler}    
                                        /> 
                                </div>
                                            {/*<label>Date & Time</label> */}
                                <div className = "form-group">
                                    <label>Notes</label>
                                        <br></br>
                                            < input 
                                                placeholder = "Notes"
                                                className = "notes"
                                                value={this.state.notes}
                                                onChange={this.changeNotesHandler}    
                                            /> 
                                </div>
                                <button className = "btn btn-success" onClick = {this.updatePrescription}>Save</button>      
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>    
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



export default UpdateRxComponent;
