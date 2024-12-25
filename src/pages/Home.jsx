import React from 'react'
import Slider from '../components/Slider'
import VolunteerNeedsNow from '../components/VolunteerNeedsNow'
import { Helmet } from 'react-helmet'
import OurBlogs from '../components/OurBlogs'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | NEED VOLUNTEER</title>
      </Helmet>
        <Slider></Slider>
        <VolunteerNeedsNow></VolunteerNeedsNow>
        <OurBlogs></OurBlogs>
      
    </div>
  )
}

export default Home