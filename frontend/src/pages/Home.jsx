import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import Servicess from '../components/home/Servicess'
import AboutSection from '../components/home/AboutSection'
import Process from '../components/home/Process'

function Home() {
  return (
    <div>
        <HomeHeader/>
        <Servicess/>
        <AboutSection/>
        <Process/>
    </div>
  )
}

export default Home
