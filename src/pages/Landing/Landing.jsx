import React from 'react'
import CheckGuy from '../../components/Middle/CheckGuy/CheckGuy'
import SerchService from '../../components/Middle/SerchService/SerchService'
import WhyWe from "../../components/Middle/WhyWe/WhyWe"

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
