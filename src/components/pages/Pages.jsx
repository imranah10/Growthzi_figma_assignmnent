import React from 'react';
import style from './Page.module.css';
import { useError } from './context/ErrorContext';
import { FiArrowRight } from "react-icons/fi";

export const Pages = () => {
  const { error, title, desc } = useError();

  return (
    <div className={style.main}>
      <div className={style.contentBox}>
        <div className={style.textWrapper}>
          <h1>{error}</h1>
          <h4>{title}</h4>
          <p>{desc}</p>

          <div className={style.card_line}></div>
          <button className={style.discover_btn}>
            Back to Home <FiArrowRight className={style.arrow_icon} />
          </button>
          <div className={style.card_line}></div>
        </div>
      </div>
    </div>
  );
};
