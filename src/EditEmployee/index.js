import React from 'react';

const EditEmployee = (props) =>  {

  return (
    <div>
      <h4> Edit Employee</h4>
      <form onSubmit={props.closeAndEdit}>
                <label htmlFor="name">Edit Name:
                    <input type='text' name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
                </label>
                <label htmlFor="position">Edit Position:
                    <input type='text' name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
                </label>
                <label htmlFor="birthDate">Edit Birthday:
                    <input type='date' name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
                </label>
                <label htmlFor="department">Edit Department:
                    <input type='text' name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
                </label>
                <label htmlFor="annualSalary">Edit Annual Salary:
                    <input type='text' name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
                </label>
                <button type='submit'>
                    Edit
                </button>
            </form>
    </div>
    )
  }

export default EditEmployee;
