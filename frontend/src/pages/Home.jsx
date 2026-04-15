import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import Servicess from '../components/home/Servicess'
import AboutSection from '../components/home/AboutSection'
import Process from '../components/home/Process'
import WhyChoose from '../components/home/WhyChoose'
import FaqSection from '../components/home/FaqSection'

function Home() {
  return (
    <div>
        <HomeHeader/>
        <Servicess/>
        <WhyChoose/>
        <AboutSection/>
        <Process/>
        <FaqSection/>
    </div>
  )
}

export default Home
