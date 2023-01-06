import React from 'react'
import CheckGuy from '../../components/Middle/Landing/CheckGuy/CheckGuy'
import SerchService from '../../components/Middle/Landing/SerchService/SerchService'
import WhyWe from "../../components/Middle/Landing/WhyWe/WhyWe"

const Landing = () => {
  return (
    <div>
      <SerchService />
      <WhyWe />
      <CheckGuy />
    </div>
  )
}

export default Landing
