import React from 'react'
import Header from '../../Header/Header'
import Design from '../services/Design'
import Offer from '../offer/Offer'
import That from '../That/That'
import Benafit from '../benafit/Benafit'
import Building from '../building/Building'
import Pricing from '../pricing/Pricing'
import Detalies from '../detalies/Detalies'
import Footer from '../../Footer/Footer'

const FullServer = () => {
  return (
    <div>
      <Header />
      <Design />
      <That />
      <Offer />
      <Benafit />
      <Building />
      <Pricing />
      <Detalies />
      <Footer />
    </div>
  )
}

export default FullServer
