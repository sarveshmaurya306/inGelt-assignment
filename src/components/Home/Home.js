import React from 'react'
import Header from './Header/Header';

import MainHome from './MainHome/MainHome';
import Features from './Features/Features';
import Service from './Service/Service';
import Testinomial from './Testinomial/Testinomial';
import ContactUs from './ContactUs/ContactUs';
function Home() {
  return (
    <>
      <Header />
      <MainHome />
      <Features />
      <Service />
      <Testinomial />
      <ContactUs />
    </>
  )
}



export default Home