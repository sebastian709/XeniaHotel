import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Logo from './components/Logo'
import Welcome from './components/Welcome'

const App = () =>{
    return(
        <>
          <Logo />
          <Navbar />  
          <Carousel />
          <Welcome />
        </>
    )
}
export default App