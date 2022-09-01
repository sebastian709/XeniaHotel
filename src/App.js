import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Facilities from './components/Facilities'
import Amenities from './components/Amenities'

const App = () =>{
    return(
        <>
          <Logo />
          <Navbar />  
          <Carousel />
          <Welcome />
          <Amenities />
          <Facilities />
        </>
    )
}
export default App