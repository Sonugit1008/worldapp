import React, { useState } from 'react'
import '../style/Style.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { ThemeContext } from '../Contexts/ThemeContext'


const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        <Header theme={[isDark, setIsDark]} />
        <Outlet />
      </ThemeContext.Provider>
    </>

  )
}

export default App
