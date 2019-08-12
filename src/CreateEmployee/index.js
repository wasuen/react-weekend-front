import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateEmployee extends Component{

    state={
        name:'',
        position:'',
        birthDate: '',
        department: '',
        annualSalary: ''
    }

    updateEmployee = (e) =>{
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }

    render(){
        return(
            <Form onSubmit={this.props.addEmployee.bind(null, this.state)}>
                <FormGroup>
                    <Label htmlFor="name">Name:
                        <Input type='text' name="name" onChange={this.updateEmployee} value={this.state.name}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="position">Position:
                        <Input type='text' name="position" onChange={this.updateEmployee} value={this.state.position}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="birthDate">Birthday:
                        <Input type='date' name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="department">Department:
                        <Input type='text' name="department" onChange={this.updateEmployee} value={this.state.department}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="annualSalary">Annual Salary:
                        <Input type='text' name="annualSalary" onChange={this.updateEmployee} value={this.state.annualSalary}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Button type='submit' color='warning' size='lg' active>
                        Create Employee
                    </Button>
                </FormGroup>
            </Form>

        )
    }
}

export default CreateEmployee;