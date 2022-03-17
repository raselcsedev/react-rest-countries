import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, population, flags, region} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p><small>Area: {area} </small></p>
            <p>Population: {population} </p>
            
        </div>
    );
};

export default Country;