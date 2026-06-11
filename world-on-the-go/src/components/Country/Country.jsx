import React from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country.flags.flags.png);
    const handleVisisted =()=>{
        console.log("clicked");
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.name.common}  />
            <h3>NAME: {country.name.common}</h3>
            <p>Population: {country.population.population }</p>
            <p>
                Area: {country.area.area>300000? "large country" : "small country"}
            </p>
            <button onClick={handleVisisted}>Not Visited</button>
        </div>
    );
};

export default Country;