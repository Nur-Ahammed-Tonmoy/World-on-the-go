import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const[countryVisited,setCountryVisited]=useState([]);
    const handleCountryVisited =(country) =>{
        console.log("is clicked",country)
        const newCountryVisited= [...countryVisited,country];
        setCountryVisited(newCountryVisited);
    }
    

    const countriesData =use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h2>visited countries:{countryVisited.length} </h2>
            <ol>
                {countryVisited.map(country => 
                
                <li>
                    key={country.cca3.cca3}
                    {country.name.common}
                </li>)}
            </ol>
            <div className='countries'>
                {countries.map(country => <Country 
                key = {country.cca3.cca3}
                country={country}
                handleCountryVisited={handleCountryVisited}
                ></Country>)}
            </div>
        </div>
    );
};

export default Countries;