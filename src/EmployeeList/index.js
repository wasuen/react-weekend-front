import React from 'react';
import { Button, Table } from 'reactstrap';
import { TableStyle } from './style';



const EmployeeList =(props) =>{
    console.log(props, '<-props in employee list')
    const employeeList= props.employee.map((employee)=>{
        return(
          <TableStyle>
            <Table key={employee._id} width='100px' hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Birth Date</th>
                  <th>Department</th>
                  <th>Annual Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{employee.name}</th>
                  <th>{employee.position}</th>
                  <th>{employee.birthDate}</th>
                  <th>{employee.department}</th>
                  <th>{employee.annualSalary}</th>
                </tr>
              </tbody>
                <Button onClick={props.showModal.bind(null, employee)} color='warning' active>Edit</Button>
                <Button onClick={props.deleteEmployee.bind(null, employee._id)} color='warning' active>Delete</Button>
            </Table>
          </TableStyle>
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