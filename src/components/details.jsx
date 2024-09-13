import React from "react";

function Details(params) {
    let currencies = params.currencies.map( currencie => currencie.name).join(', ')
    let languages = params.languages.map( language => language.name).join(', ')

    return (
        <>
            <div className="backBtn-container">
                <button className="backBtn">
                    <i class="fa-solid fa-arrow-left"></i>
                    Back
                </button>
            </div>
            <div className="details-container flex-container">
                <div className="img-details">
                    <img src={params.flag} alt={params.name} />
                </div>
                <div className="info-details">
                    <h2>{params.name}</h2>
                    <div className="details detailsInfo flex-container">
                        <p><span>Native Name:</span>{params.nativeName}</p>
                        <p><span>Population:</span>{params.population}</p>
                        <p><span>Region:</span>{params.region}</p>
                        <p><span>Sub Region:</span>{params.subregion}</p>
                        <p><span>Capital:</span>{params.capital}</p>
                        <p><span>Top Level Domain:</span>{params.topleveldomain}</p>
                        <p><span>Currencies:</span>{currencies}</p>
                        <p><span>Languages:</span>{languages}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Details };