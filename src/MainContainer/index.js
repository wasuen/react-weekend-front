import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee'
import EmployeeList from '../EmployeeList';
import EditEmployee from '../EditEmployee';



class MainContainer extends Component {

    state={
        employees:[],
        editEmployeeId: null,
        employeeToEdit: {
            _id: null,
            name:'',
            position:'',
            birthDate: '',
            department: '',
            annualSalary: ''
        },
        showEditModal: false,
    }

    componentDidMount() {
        this.getEmployee();
    }

    addEmployee = async (employee, e) => {
        e.preventDefault();
        console.log(employee, e, 'addEmployee function')
        try {
            const createEmployee = await fetch('http://localhost:9000/api/v1/employee', {
            method:'POST',
            body: JSON.stringify(employee),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                }
            })

            if(createEmployee.status !== 200){
                throw Error('Resource not found')
            }

            const createEmployeeResponse = await createEmployee.json();
            console.log(createEmployeeResponse.data, 'createEmployeeResponse')
            this.setState({
                employees: [...this.state.employees, createEmployeeResponse.data]
            })


        } catch(err) {
            console.log(err, 'addEmployee')
            return err
        }
    }

    getEmployee = async () => {
        try{

            const responseGetEmployee = await fetch('http://localhost:9000/api/v1/employee');
            console.log(responseGetEmployee)

            if(responseGetEmployee.status !== 200){
                //fetch won't reject a 404
                // throw error ends the try and send the error to the catch
                throw Error('404 from server');
            }
            // parse the json from a string into a js object we can manipulate
            const employeeResponse = await responseGetEmployee.json();
            // in the browser console
            console.log(employeeResponse, 'employeeResponse <')

            this.setState({
                employees: [...employeeResponse.data]
            })

        } catch(err) {
            console.log(err, 'getEmployee errors');
            return err
        }
    }
    
    handleFormChange = (e) => {

        this.setState({
          employeeToEdit: {
            ...this.state.employeeToEdit, 
            [e.target.name]: e.target.value
          }
        })
    
      }
    

    
    closeAndEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editRequest = await fetch('http://localhost:9000/api/v1/employee/' + this.state.employeeToEdit._id, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.employeeToEdit),
            headers: {
              'Content-Type': 'application/json'
            }
          })
    
          if(editRequest.status !== 200){
            throw Error('editResquest not working')
          }
    
          const editResponse = await editRequest.json();
    
          const editedEmployeeArray = this.state.employees.map((employee) => {
            if(employee._id === editResponse.data._id){
              employee = editResponse.data
            }
    
            return employee
          });

          this.setState({
            employees: editedEmployeeArray,
            showEditModal: false
          })

        } catch(err) {
            console.log(err)
            return err
        }
      }
    
    deleteEmployee = async (id) => {
        console.log(id, ' delete employee ID')
    
        try {
    
          const deleteEmployee = await fetch('http://localhost:9000/api/v1/employee/' + id, {
            method: 'DELETE',
            credentials: 'include'
          });
    
          if(deleteEmployee.status !== 200){
            throw Error('Something happend on delete')
          }
    
          const deleteEmployeeJson = await deleteEmployee.json();
    
          this.setState({
            employees: this.state.employees.filter((employee) => employee._id !== id)
          })
    
        } catch(err){
          console.log(err);
          return err
        }
      }

    showModal = (employee) => {
        console.log(employee, ' employeeID in show Modal')
        this.setState({
          employeeToEdit: employee,
          showEditModal: !this.state.showEditModal
        })
    }

    render() {
        return(
            <div className="mainContainer">
                <h1>Employees</h1>
                <CreateEmployee addEmployee={this.addEmployee} />
                <EmployeeList employee={this.state.employees} showModal={this.showModal} deleteEmployee={this.deleteEmployee}/>
                {this.state.showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}

export default MainContainer;