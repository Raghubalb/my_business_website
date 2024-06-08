import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Our Website</h1>
        <p>
            some text for check
            
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
