import React from 'react';
import { Button } from 'reactstrap';


const EmployeeList =(props) =>{
    console.log(props, '<-props in employee list')
    const employeeList= props.employee.map((employee)=>{
        return(
            <li key={employee._id}>
                <span>{employee.name}</span><br/>
                <span>{employee.position}</span><br/>
                <span>{employee.birthDate}</span><br/>
                <span>{employee.department}</span><br/>
                <span>{employee.annualSalary}</span><br/>
                <Button onClick={props.showModal.bind(null, employee)} color='warning' active>Edit</Button> {' '}
                <Button onClick={props.deleteEmployee.bind(null, employee._id)} color='warning' active>Delete</Button><br/>
            </li>
        )   
    })
    return (
        <div>
          <h3>Employees</h3>
          <ul>
            {employeeList}
          </ul>
        </div>
        )
}



export default EmployeeList;