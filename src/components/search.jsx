import React from "react";

function Search(params) {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        params.setFilter({
            type: 'region',
            value: selectedValue
        })
    };
    const handleSearch = (event) => {
        const inputValue = event.target.value;
        params.setFilter({
            type: 'name',
            value: inputValue
        })
    }; 
    return (
        <div className="search-container flex-container">
            <div className="search-input">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    onKeyUp={handleSearch}
                /> 
            </div>
            <div className="search-filter">
                <select 
                    id="selectFilter" 
                    title="filter" 
                    defaultValue="defauld"
                    onChange={handleSelectChange}
                >
                    <option value="defauld" disabled hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <i 
                    className="fa-solid fa-chevron-down"
                    onClick={() => {
                        console.log(document.getElementById('selectFilter'));
                        document.getElementById('selectFilter').click()
                    }}
                ></i>
            </div>
        </div>
    )
}

export { Search };