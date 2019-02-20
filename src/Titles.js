import React from 'react';
import hello from './tof.png';
const Titles = (params) =>{
    return (
        <div>
        <img src={hello} alt="hello"></img>
            <h1 className="title-container__title"> MY WEATHER APP </h1>
            <p> It will help you to find the weather in different cities easly .</p>
           
        </div> 
        
        )
}
export default Titles;