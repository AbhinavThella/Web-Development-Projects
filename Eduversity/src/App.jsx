import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title title='OUR PROGRAM' subtitle='What We Offer'/>
      <Programs/>
      <About/>
      <Title title='GALLERY' subtitle='Campus Photos'/>
      <Campus/>
      <Title title='CONTACT US' subtitle='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
