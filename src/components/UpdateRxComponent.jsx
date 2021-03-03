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
            //time_taken: new Date(),
            notes: ''
            
         }
        this.changeRxNameHandle = this.changeRxNameHandle.bind(this);
        this.changeDosageHandle = this.changeDosageHandle.bind(this);
        this.changeQuantityHandle = this.changeQuantityHandle.bind(this);
        this.changeNotesHandle = this.changeNotesHandle.bind(this);
        this.updatePrescription = this.updatePrescription.bind(this);
     }

        //receiving a response from the data and setting it to the state
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
    changeDosageHandle(event){
        this.setState({dosage: event.target.value});
        }

    changeQuantityHandle(event){
        this.setState({quantity: event.target.value});
        }

    changeNotesHandle(event){
            this.setState({notes: event.target.value});
    }
        //user clicks cancel -> bring them to rx list
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
                                    <label>Dosage</label>                                            
                                    <br></br>
                                        < input 
                                            placeholder = "ex. 325mg"
                                            name = "dosage"
                                            value={this.state.dosage}
                                            onChange={this.changeDosageHandle}    
                                        /> 
                                </div>
                                <div className = "form-group">
                                    <label>Quantity
                                    <br></br>
                                        <select 
                                            value={this.state.quantity}
                                            onChange={this.changeQuantityHandle} 
                                            name="quantity">
                                                <option value="0.5">0.5 capsule</option>
                                                <option value="1">1 capsule</option>
                                                <option value="1.5">1.5 capsules</option>
                                                <option value="2">2 capsules</option>
                                                <option value="2.5">2.5 capsules</option>
                                                <option value="3">3 capsules</option>
                                        </select>
                                        {/* < input 
                                            placeholder = "ex. 2"
                                            name = "quantity"
                                            value={this.state.quantity}
                                            onChange={this.changeQuantityHandle}    
                                        />  */}
                                    </label>      
                                </div>

                                    {/*<label>Date & Time</label> */}

                                <div className = "form-group">
                                    <label>Notes</label>
                                        <br></br>
                                            < textarea name = "notes"
                                                placeholder = "Notes"
                                                value={this.state.notes}
                                                onChange={this.changeNotesHandle}    
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


