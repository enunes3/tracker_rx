import React, { Component } from 'react';

class RxListComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            todo: 
            [
                {id: 1, description : 'rx1', done:false, targetDate: new Date()},
                {id: 2, description : 'rx2', done:false, targetDate: new Date()},
                {id: 3, description : 'rx3', done:false, targetDate: new Date()},
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
                     <th>id</th>
                     <th>description</th>
                     <th>is it done?</th>
                     <th>date</th>   
                 </tr>
             </thead>
             <tbody>
                 {
                     this.state.todo.map (
                         todo => 
                            <tr key = {todo.id}>
                                {/* <td>{todo.id}</td> */}
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
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