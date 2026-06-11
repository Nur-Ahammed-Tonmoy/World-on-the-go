import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleCountryVisited}) => {

    
    const [visited, setVisited]= useState(false);
    const handleVisisted =()=>{
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        handleCountryVisited(country);
    }

    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.name.common}  />
            <h3>NAME: {country.name.common}</h3>
            <p>Population: {country.population.population }</p>
            <p>
                Area: {country.area.area>300000? "large country" : "small country"}
            </p>
            <button onClick={handleVisisted}>{visited ? "visited" :"not visited"}</button>
        </div>
    );
};

export default Country;