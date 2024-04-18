import React, { useEffect, useState } from 'react'
import CountryData from '../CountryData'
import CountryCard from './CountryCard'
import CountryListShimmer from './CountryListShimmer'
import CountryDetailsSimmer from './CountryDetailsSimmer'


// const CountryContainer = () => {
//     const array = CountryData.map((country) => {
//         return <CountryCard 
//             key={country.name.common} 
//             name={country.name.common} 
//             flag={country.flags.svg} 
//             population={country.population}
//             region={country.region}
//             capital={country.capital}
//          />
//     })
//     return (
//         <div className="countries-container">
//             {array}
//         </div>
//     )
// }


//////////////Using data form file ///////////////////////////////////////////

// const CountryContainer = ({query}) => {
//     //const [query,setQuery]=useState('')
//     return (<>
//          {/* <input type="text" onChange={(e)=>setQuery(e.target.value.toLowerCase())} /> */}
//         <div className="countries-container">
       
//             { CountryData.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country) => {
//         return <CountryCard 
//             key={country.name.common} 
//             name={country.name.common} 
//             flag={country.flags.svg} 
//             population={country.population}
//             region={country.region}
//             capital={country.capital}
//          />
         
//     })}
//         </div>
//         </>
//     )
// }

const CountryContainer = ({query}) => {
    //const [query,setQuery]=useState('')
     const [CountriesData,setCountriesData] =useState([])


     useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
         setCountriesData(data)
        })
     },[])

     if(CountriesData.length==0){
        return  <CountryListShimmer/>
     }
    
    return (<>
       
         {/* <input type="text" onChange={(e)=>setQuery(e.target.value.toLowerCase())} /> */}
         {/* <button onClick={()=>setCountriesData([])}>Remove Element</button> */}
        
       <div className="countries-container">

       
            { CountriesData.filter((country)=>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
             ).map((country) => {
        return <CountryCard 
            key={country.name.common} 
            name={country.name.common} 
            flag={country.flags.svg} 
            population={country.population}
            region={country.region}
            capital={country.capital}
            data={country}
         />
         
    })}
        </div>
        </>
    )
}

export default CountryContainer