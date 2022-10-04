import React from 'react'
import FeaturedProperties from '../components/FeaturedProperties'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Navbar from '../components/Navbar'
import PropertyList from '../components/PropertyList'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className="homeContainer">
      <Features></Features>
      <h1 className="homeTitle">Browae by property type</h1>
      <PropertyList></PropertyList>
      <h1 className="homeTitle">Home guests love</h1>
      <FeaturedProperties></FeaturedProperties>
      <MailList></MailList>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home