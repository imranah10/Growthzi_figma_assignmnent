import React from 'react'
import navlogo from '../images/navlogo/vector.png'
import vector from '../images/navlogo/vector.svg'
import style from './Footer.module.css'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import line1 from '../images/footer/line1.png'
import line2 from '../images/footer/line2.png'
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";


export const Footer = () => {
  return (
   <div className={style.main}>
     <div className={style.footer_parent}>
       <div className ={style.footer_logo_parent}>
         <div className={style.footer_logo}>
        <div className={style.image_parent}>
          <img src={vector} alt="" />
          <img src={navlogo} alt="logo" />
        </div>
        <div className={style.logo_name}>
          <span>IMPERIAL</span><br />
          <span>GRAND HOTEL</span>
          
        </div>
      
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua.
      </p>
       </div>
      <div className={style.quick_links}>
        <h4>USEFUL LINKS</h4>
        <Link className={style.links}>Home</Link>
        <Link className={style.links}>About</Link>
        <Link className={style.links}>Service</Link>
        <Link className={style.links}>Room</Link>
      </div>
      <div className={style.subscribe_parent}>
        <h4>SUBSCRIBE</h4>
        <p>
          Don t miss to subscribe our news,
kindly fill the form bellow
        </p>
       <div className={style.subscribe}>
  <div className={style.inputWrapper}>
    <input type="text" placeholder="your email here" />
    <FaChevronDown className={style.down_arrow_inside} />
  </div>
</div>

      </div>

    </div>
    <div className={style.bottom_parent}>
      <div className={style.line1}>
        <img src={line1} alt="" />
      </div>

      <div className={style.social_parent}>
      <FiTwitter className={style.social_icon} />
      <FaFacebookF className={style.social_icon} />
       <FiTwitter className={style.social_icon} />
      <FaFacebookF className={style.social_icon} />

      </div>
       <div className={style.line1}>
        <img src={line2} alt="" />
      </div>

    </div>
    <div className={style.policy_parent}>
      <div >
        <p>
          © 2025 Imperial Grand Hotel. All Rights Reserved.
        </p>
        </div>
      <div className={style.policy_child}>
        <span>privacy policy</span>
        <span>terms of use</span>
      </div>
    </div>
   </div>
  )
}
