import React from 'react';
import "./Country.css";

const Country = (props) => {
    console.log(props.country);
    const { name, population, region, flag } = props.country;
    const handleAddCountry= props.handleAddCountry;

    return (
        <div className="single-country">
            <h4>Country: {name}</h4>
            <img src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button
            className="add-country-btn"
            onClick={()=>handleAddCountry(props.country)}>
                Add Country
                </button>
        </div>
    );
};

export default Country;