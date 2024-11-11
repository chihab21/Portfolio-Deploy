import React from 'react'
import Data from './Data'
import './Home.css'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className='home section' id='home'  >
        <div className='home_container'>
            <Data/>

            <div className='home_img'>  </div>

            


            
        </div>

        <ScrollDown/>


   
    </section>
  )
}

export default Home
