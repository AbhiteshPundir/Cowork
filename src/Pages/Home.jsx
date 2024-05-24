import React from 'react'
import Hero from '../components/Hero'
import Choose from '../components/Choose'
import Tour from '../components/Tour'
import Blog from '../components/Blog'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Choose/>
      <Tour/>
      <Faq/>
      <Blog/>
    </div>
  )
}

export default Home
