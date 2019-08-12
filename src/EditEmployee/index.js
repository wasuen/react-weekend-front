import React from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

const EditEmployee = (props) =>  {

  return (
    <div>
      <h4> Edit Employee</h4>
      <Form onSubmit={props.closeAndEdit}>
                <Label htmlFor="name">Edit Name:
                    <Input type='text' name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
                </Label>
                <Label htmlFor="position">Edit Position:
                    <Input type='text' name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
                </Label>
                <Label htmlFor="birthDate">Edit Birthday:
                    <Input type='date' name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
                </Label>
                <Label htmlFor="department">Edit Department:
                    <Input type='text' name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
                </Label>
                <Label htmlFor="annualSalary">Edit Annual Salary:
                    <Input type='text' name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
                </Label>
                <Button type='submit'>
                    Edit
                </Button>
            </Form>
    </div>
    )
  }

export default EditEmployee;
