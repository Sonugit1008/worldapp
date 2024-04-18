import React, { useContext, useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import SelectMenu from './SelectMenu'
import CountryContainer from './CountryContainer'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Contexts/ThemeContext'
import { useTheme } from '../hook/useTheme'
// import { getWindowSize } from '../hook/utility'

const Home = () => {
    const [query,setQuery]=useState('')

  //  const[isDark]=useOutletContext()
    // const [isDark]=useContext(ThemeContext)
    const [isDark]=useTheme()
  //  console.log(a)

  /////////////////custom hook ////////////
// const windowSize=getWindowSize();
  ////////////////////////////////
  return (
    <main className={`${isDark? 'dark':'' }`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      
      {/* <h1 style={{textAlign:'center'}}>{windowSize.width} * {windowSize.height}</h1> */}
      <CountryContainer query={query}/>
      </main>
  )
}

export default Home