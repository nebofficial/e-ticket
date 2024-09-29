import React from 'react'
import Navbar from '../components/Navbar'

import Moviecard from '../components/Moviecard'
import Footer from '../components/Footer'
import CustomSlider from '../components/slider'


function Homepage() {
  return (
    <> 
    

      <div>
       <Navbar/>
       <CustomSlider/>
      <Moviecard/>
      <Footer/>
      </div>
    </>
  )
}

export default Homepage

