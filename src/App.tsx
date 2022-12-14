import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet'

import Cities from "./components/Cities";
import Home from './components/Home';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  
  useEffect(()=>{
    // Get theme from LS
    if(localStorage.length > 0){
      setDarkMode(JSON.parse(localStorage.getItem('darkMode') || ''))
    }else{
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }
  }, [])


  // Track theme changes in LS
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode') || ''))
  }, [darkMode])
 
  
  // Switching dark/light themes
  const handleChange = () => {
    setDarkMode(prevDarkMode => {
      localStorage.setItem('darkMode', JSON.stringify(!prevDarkMode))
      return !prevDarkMode
    })
  }

  
  return (
    <div className={darkMode ? 'app-dark' : 'app'}>

      <Helmet>
        <meta name="theme-color" content={darkMode ? '#08093F' : '#FFFFFF'} />
      </Helmet>

      <Routes>
        <Route path='/vakatBa' element={
        <Home 
        dark={Boolean(darkMode)}
        handleChange={handleChange}
        />} 
        />
    
        <Route path='/vakatBA/lokacija' element={ <Cities dark={Boolean(darkMode)}/> } />
      </Routes>
      
    </div>
    
  )
}

export default App;
