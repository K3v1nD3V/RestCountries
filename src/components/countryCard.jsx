import React from "react";

function CountryCard(params) {
    let population = params.population
    population = population.toString();
    population = population.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (
        <a href={`?country=${params.name}`}>
            <div className="card">
                <div className="cardImg-container">
                    <img 
                        className="cardImg"
                        src={params.flag} 
                        alt={params.name}
                    />
                </div>
                <div className="cardInfo-container">
                    <h3>{params.name}</h3>
                    <div className="cardInfo detailsInfo flex-container">
                        <p><span>Population:</span>{population}</p>
                        <p><span>Region:</span>{params.region}</p>
                        <p><span>Capital:</span>{params.capital}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export { CountryCard };