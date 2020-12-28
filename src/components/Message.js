import React, { Component } from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMsg()}>Submit</button>
            </div>
        )
    }  

    changeMsg(){
        this.setState({
            message: "your msg is submitted"
        })
    }
}

export default Message;