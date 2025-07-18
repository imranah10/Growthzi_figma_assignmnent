import React from 'react'
import '../../App.css'
import { Services } from './Services'
import { LuxuryExpe } from './LuxuryExpe'
import { Hero } from './Hero'
export const Home = () => {
  return (
    <>
       <Hero/>
      <div className='main_parent'>
        <Services />
        <LuxuryExpe/>
      </div>
    </>
  )
}
