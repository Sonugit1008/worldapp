import React from 'react'

const Searchbar = ({setQuery}) => {
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search for a country..." onChange={(e)=>setQuery(e.target.value.toLowerCase())} />
        </div>

    )
}

export default Searchbar