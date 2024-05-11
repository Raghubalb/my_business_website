import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subTitle='Our Program' title='what we Offer'/>
          <Programs/>
          <About/>
          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle='TESTIMONIAL' title='What our Client says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get us'/>
          <Contact/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default App
