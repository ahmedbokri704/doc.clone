import React, { Component } from 'react'
import './App.css';


const Section5 = props => {
        return (
         <section id="section5" className="container">
          {props.worldcard.map((element, index) => (
           <div className="card6">
             <a href=""> <img src={element.image}/></a>
           <div className="card-title">
            <p>{element.p}</p>
             <button>See openings</button>
           </div>
           </div>))}
         </section>  
)}
export default Section5;