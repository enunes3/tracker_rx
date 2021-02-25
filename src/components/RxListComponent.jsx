import React, { Component } from 'react';

class RxListComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            todo: 
            [
                {id: 1, rxName: 'rxName', dose: '50mg', quantity: '2', targetDate: new Date(), notes: ''},
                {id: 2, rxName: 'rx2Name', dose: '', quantity: '0.5', targetDate: new Date(), notes: ''},
                {id: 3, rxName: 'rx3Name', dose: '', quantity: '1', targetDate: new Date(), notes: 'migraine'},
                //done:false, 
            ]
        }
    }

    render(){
      return (
        <div >
         <h1> RxListComponent </h1> 
         <div className = "container">
         <table className = "table">
             <thead>
                 <tr>
                     {/* <th>id</th> */}
                     <th>Prescription Name</th>
                     <th>Dosage</th>
                     <th>Quantity</th>
                     <th>Date</th> 
                     <th>Notes</th>
                     {/* <th>isdone</th>  */}
                 </tr>
             </thead>
             <tbody>
                 {
                     this.state.todo.map (
                         todo => 
                             <tr key = {todo.id}>
                            {/*<tr>
                                <td>{todo.id}</td>*/}
                                <td>{todo.rxName}</td>
                                <td>{todo.dose}</td>
                                <td>{todo.quantity}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td>{todo.notes}</td>
                                {/* <td>{todo.done.toString()}</td> */}
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