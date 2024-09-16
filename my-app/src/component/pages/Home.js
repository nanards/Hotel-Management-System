import React from 'react'
import "../../App.css"
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import MostPopular from '../HomeSection/popular/MostPopular'

const Home = () => {
  return (
    <>
    <Hero />
    <HomeAbout />
    <MostPopular />
    <DestinationHome />
    </>
  )
}

export default Home