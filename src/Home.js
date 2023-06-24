import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Truested';
import FeatureProduct from './components/FeatureProduct';



const Home = () => {
  const data = {
    name: "Abhi Store"
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home;
