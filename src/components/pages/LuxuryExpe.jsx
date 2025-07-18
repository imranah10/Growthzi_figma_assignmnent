import React from 'react';
import style from './LuxuryExpe.module.css';
import { FaAngleRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
// import { Hero } from './Hero';

export const LuxuryExpe = () => {
  const defaultDate = "28 December 2023";

  return (
 <>
{/*   <Hero/> */}
    <div className={style.main}>
     <div className={style.box_parent}>
      <div className={style.box_content}>
        <h2 className={style.heading}>
          Get Your Luxury <br /> Experience Now
        </h2>

        <div className={style.checkin_out_parent}>
          <form>
            <label htmlFor="checkin">Check In</label>
            <div className={style.input_wrapper}>
              <input type="text" id="checkin" value={defaultDate} readOnly />
              <SlCalender className={style.icon} />
            </div>

            <label htmlFor="checkout">Check Out</label>
            <div className={style.input_wrapper}>
              <input type="text" id="checkout" value={defaultDate} readOnly />
              <SlCalender className={style.icon} />
            </div>

            <div className={style.room_guest_parent}>
              <div>
                <label htmlFor="room">Room</label>
                <select id="room">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div>
                <label htmlFor="guest">Guest</label>
                <select id="guest">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </form>

          <Link to="#" className={style.check_btn}>
            Check Availability <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
   </div>
 </>
  );
};
