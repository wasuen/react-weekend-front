import React from 'react';


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
                <button onClick={props.showModal.bind(null, employee)}>Edit</button>
                <button onClick={props.deleteEmployee.bind(null, employee._id)}>Delete</button><br/>
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