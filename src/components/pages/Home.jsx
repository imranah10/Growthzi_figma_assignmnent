import React from 'react'
import '../../App.css'
import { Services } from './Services'
import { LuxuryExpe } from './LuxuryExpe'

export const Home = () => {
  return (
    <>
      <div className='main_parent'>
        <Services />
        <LuxuryExpe/>
      </div>
    </>
  )
}
