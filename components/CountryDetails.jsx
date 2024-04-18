import React, { useContext, useEffect, useState } from 'react'

import '../style/CountryDetails.css'
import { Link, useParams, useLocation,useOutletContext } from 'react-router-dom'
import CountryListShimmer from './CountryListShimmer';
import CountryDetailsSimmer from './CountryDetailsSimmer';
import { ThemeContext } from '../Contexts/ThemeContext'
import { useTheme } from '../hook/useTheme';
const CountryDetails = () => {
   // const countryName = new URLSearchParams(location.search).get('name');
   const params=useParams();
   const {state}=useLocation()
  //  const[isDark]=useOutletContext()
  // const [isDark]=useContext(ThemeContext)
   const [isDark]=useTheme()
   //console.log(state);
   
   const countryName=params.countryDetail;
   //console.log(params);


function updateCountryData(data){
  setCountryData({
    name:data.name.common || data.name,
    nativeName:Object.values(data.name.nativeName || {})[0]?.common,
    population:data.population,
    region:data.region,
    subregion:data.subregion,
    capital:data.capital,
    tld:data.tld,
    currencies:Object.values(data.currencies || {}).map((currency) => currency.name).join(', '),
    languages:Object.values(data.languages || {}).join(', '),
    flag:data.flags.svg,
    borders:[]   
})

if(!data.borders){
  data.borders=[]

}

Promise.all(data.borders.map((border)=>{
 return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
  .then(res=>res.json())
  .then(([borderCountry])=>{
   // console.log(borderCountry)
   return borderCountry.name.common;
    // setCountryData((prevState) => ({
    //   ...prevState,
    //   borders: [...prevState.borders, borderCountry.name.common]
    // }));
  })

})).then((borders)=>{
  setTimeout(() => {
    setCountryData((prevState)=> ({...prevState,borders}))
  });
})

}


    const [countryData,setCountryData]=useState(null)
    const [notFound,setNotFound]=useState(false)
    useEffect(()=>{

        if(state){
          updateCountryData(state)
          return
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res=>res.json())
        .then(([data])=>{
            // console.log(data)
            updateCountryData(data)
        }).catch((err)=>{
          setNotFound(true);

        })
    },[countryName])
    if(notFound){
      return <div>Country Not found</div>
    }
  return (
    countryData===null? <CountryDetailsSimmer/>:(
      
        <main className={`${isDark? 'dark':'' }`}>
         
        <div className="country-details-container">
          <span className="back-button" onClick={()=>history.back()}>
            <i className="fa-solid fa-arrow-left" ></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt="" />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population.toLocaleString('en-IN')}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital?.join(',')}</span></p>
                <p>
                  <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
                <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
              </div>
              { countryData.borders.length!=0 &&
                <div className="border-countries"><b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border,i)=> <Link key={i}  to={`/${border}`}>{border}</Link>)}
                
                </div>
              }
            </div>
          </div>
        </div>
      </main>
    )
  )
}

export default CountryDetails