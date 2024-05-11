import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
        </div>
      <div className="about-right">
        <h3>Checking Purpus</h3>
        <h2>sonvn onsvovns onn n n ijni fdi dn ienu nin</h2>
        <p>sdffffffffffffffffffffffffffffffffffffffff</p>
        <p>sdffffffffffffffffffffffffffffffffffffffff</p>
        <p>sdffffffffffffffffffffffffffffffffffffffff</p>

      </div>
    </div>
  )
}

export default About
