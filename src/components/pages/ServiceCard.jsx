// ServiceCard.jsx
import React from "react";
import style from "../pages/Services.module.css";
import { FiArrowRight } from "react-icons/fi";
import breakfast from "../images/services/breakfast.png";
import gym from "../images/services/gym.png";
import spa from "../images/services/spa.png";
import swimming from "../images/services/swimmingpool.png";

export const ServiceCard = () => {
  const data = [
    {
      icon: breakfast,
      title: "Workout & Yoga Rooms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      reverse: false,
    },
    {
      icon: spa,
      title: "Spa, Massage & Sauna",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      reverse: true,
    },
    {
      icon: gym,
      title: "Multiple Cuisines & Beverages",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      reverse: false,
    },
    {
      icon: swimming,
      title: "In Door Swimming Pool",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      reverse: true,
    },
  ];

  return (
    <div className={style.card_section}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.card_row} ${item.reverse ? style.reverse : ""}`}
        >
          <div className={style.blank_box}></div>

          <div className={style.content_box}>
            <img src={item.icon} alt="icon" className={style.card_icon} />
            <h3 className={style.card_title}>{item.title}</h3>
            <p className={style.card_desc}>{item.desc}</p>

            <div className={style.card_line}></div>
            <button className={style.discover_btn}>
              Discover More <FiArrowRight className={style.arrow_icon} />
            </button>
            <div className={style.card_line}></div>
          </div>
        </div>
      ))}
    </div>
  );
};
