import React, { Component } from 'react'
import './App.css';


const Section5 = props => {
        return (
         <section id="section5" class="container">
          {props.worldcard.map((element, index) => (
           <div class="card6">
             <a href=""> <img src={element.image}/></a>
           <div class="card-title">
            <p>{element.p}</p>
             <button>See openings</button>
           </div>
           </div>))}
         </section>  
)}
export default Section5;