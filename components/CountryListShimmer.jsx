import React from 'react'
import '../style/Countrylistshimmer.css'


const CountryListShimmer = () => {
        // new Array(10).fill('')
        const mapArray=Array.from({length:10}).map((el,i)=>{
           return  <div key={i} className="country-card shimmer-card">
           <div className="flag-container"></div>
           <div className="card-text">
             <h3 className="card-title"></h3>
             <p></p>
             <p></p>
             <p></p>
           </div>
         </div>;
        })
       

  return (
    <div className='countries-container'>
       {mapArray}
       
    </div>
  )
}

export default CountryListShimmer