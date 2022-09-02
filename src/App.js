import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Facilities from './components/Facilities'
import Amenities from './components/Amenities'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

const App = () =>{
    return(
        <>
          <Logo />
          <Navbar />  
          <Carousel />
          <Welcome />
          <Amenities />
          <Facilities />
          <Reviews />
          <Location />
          <Footer />
        </>
    )
}
export default App