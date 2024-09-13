import React from 'react';
import './App.css';
import data from './data.json';
import { Header } from './components/header';
import { Search } from './components/search';
import { CountryCard } from './components/countryCard';
import { Details } from './components/details';

function App() {
  let [filter, setFilter] = React.useState('');
  let newData = null; 
  let detailedCountry = null;
  let detailedCountryCurrencies = null;

  if (filter) {
    if (filter.value) {
        newData = data.filter((country) => {
        const mainValue = country[filter.type].toLowerCase();
        const searchValue = filter.value.toLowerCase();

        if (mainValue.length < searchValue.length) {
            return false;
        }

        for (let i = 0; i < searchValue.length; i++) {
            if (mainValue[i] !== searchValue[i]) {
                return false;
            }
        }

        return true;
      });    
    }
  }

  if (location.search.split('=')[1]) {
    let decodeCountryName = decodeURIComponent(location.search.split('=')[1]);
    
    detailedCountry = data.find(country => country.name === decodeCountryName)
    
    detailedCountry.currencies ? 
    detailedCountryCurrencies = detailedCountry.currencies : 
    detailedCountryCurrencies = false  
  }
  return (
    <>
      <Header />
      <main className='container'>
        {
          location.search.split('=')[1] ? 
            (
              <Details
                key={detailedCountry.name}
                nativeName={detailedCountry.nativeName}
                name={detailedCountry.name}
                population={detailedCountry.population}
                region={detailedCountry.region}
                subregion={detailedCountry.subregion}
                capital={detailedCountry.capital}
                topleveldomain={detailedCountry.topLevelDomain}
                currencies={detailedCountryCurrencies}
                languages={detailedCountry.languages}
                flag={detailedCountry.flags.png}
              />   
            )
            :(
            <>
              <Search setFilter={setFilter} />
              <div className='cardsContainer flex-container'>
                {newData ? (
                  newData.map((country) => (
                    <CountryCard
                      key={country.name}
                      name={country.name}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      flag={country.flags.png}
                    />
                  ))
                ) : (
                  data.map((country) => (
                    <CountryCard
                      key={country.name}
                      name={country.name}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      flag={country.flags.png}
                    />
                  ))
                )}
              </div>
            </>
          )
          
        }
        
      </main>
    </>
  );
}

export default App;