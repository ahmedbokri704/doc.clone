import React, { Component } from 'react'
import './App.css';


const Section2_1 = props => {
        return (
     <div>              
        <span>{props.span}</span>    
       <h2>{props.h2}</h2>   
       <img className="computer_figure" src={props.image}/>   
     </div>)}

export default Section2_1;