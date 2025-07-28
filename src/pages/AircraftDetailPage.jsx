import React from 'react'
import Navbar from '../components/Navbar'
import AircraftDetail from '../components/AircraftDetail'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const AircraftDetailPage = () => {
  return (
    <>
      <div className="container px-5">
        <Navbar />
      </div>
      <AircraftDetail />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default AircraftDetailPage
