import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import style from './Navbar.module.css';
import navlogo from '../images/navlogo/Vector.png';
import vector from '../images/navlogo/Vector.svg';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={style.nav_parent}>
      <div className={style.navlogo}>
        <div className={style.image_parent}>
          <img src={vector} alt="" />
          <img src={navlogo} alt="logo" />
        </div>
        <div className={style.logo_name}>
          <span>IMPERIAL</span><br />
          <span>GRAND HOTEL</span>
        </div>
      </div>

      {/* Hamburger icon for mobile */}
      <div className={style.hamburger_icon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${style.nav_child_container} ${menuOpen ? style.show_menu : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}>
          HOME <FaAngleDown className={style.down_arrow} />
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}>
          ABOUT
        </NavLink>

        <NavLink to="/services" className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}>
          SERVICES
        </NavLink>

       <div className={style.dropdown_wrapper}>
  <NavLink to="/pages" className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}>
    PAGES <FaAngleDown className={style.down_arrow} />
  </NavLink>
  <div className={style.dropdown_menu}>
    <NavLink to="/room" className={style.dropdown_item}>ROOM</NavLink>
    <NavLink to="/single-room" className={style.dropdown_item}>SINGLE ROOM</NavLink>
    <NavLink to="/blog" className={style.dropdown_item}>BLOG</NavLink>
    <NavLink to="/single-blog" className={style.dropdown_item}>SINGLE BLOG</NavLink>
    <NavLink to="/pages" className={style.dropdown_item}>404 PAGE</NavLink>
  </div>
</div>

        <NavLink to="/contact" className={({ isActive }) => isActive ? `${style.navlink} ${style.active}` : style.navlink}>
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};
