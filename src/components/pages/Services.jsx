import React from 'react'
import style from '../pages/Services.module.css'
import { ServiceCard } from './ServiceCard'
// import { Hero } from './Hero'

export const Services = () => {
  return (
 <>
{/*  <Hero/> */}
  <div className={style.main}>
      <div className={style.service_parent_container}>
      {/* Vertical Line */}
      <div className={style.vertical_line}></div>

      <div className={style.inner_content}>
        <h3 className={style.service_intro_heading}>
          INTRODUCING OUR SERVICES
        </h3>
        <div className={style.service_slogan}>
          <div>
            <h2>Amenities That You Can Enjoy</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <ServiceCard />
    </div>
  </div>
 </>
  )
}
