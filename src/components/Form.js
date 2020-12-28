import React, { Component } from 'react'

export class Form extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             username:""
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    
    handleLastnameChange = (event) =>{
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.lastname}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input 
                        type ="text" 
                        value = {this.state.username} 
                        onChange = {this.handleUsernameChange}>
                    </input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        type ="text" 
                        value = {this.state.lastname} 
                        onChange = {this.handleLastnameChange }>
                    </input>
                </div>
                <button type = "Submit">Submit</button>
            </form>
        )
    }
}

export default Form
