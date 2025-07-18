import React from 'react'
import '../../app.css'
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
