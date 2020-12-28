import React, { Component } from 'react';
/*
function Great(){
    return <h1>hello there</h1>
}*/
const Great = props =>{
    console.log(props)
    return (
        <div>
            <h1>hello {props.name} {props.lastname}</h1>
            {props.children}
        </div>
        
    )

} 

export default Great;