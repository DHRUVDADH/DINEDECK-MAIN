import React from 'react'
import styles from './Navbar2.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { MdQuestionMark } from "react-icons/md";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import check from '../../Svg/solar_bill-check-linear.svg'

const Navbar2 = () => {

  const [navbarVisible, setNavbarVisible] = useState(false);
  const [buttonText, setButtonText] = useState({ icon: <SlMenu /> });

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
    if (toggleNavbar == false) {
      setButtonText({ icon: <SlMenu /> });
    }
    else {
      setButtonText({ icon: <IoClose /> });
    }
  };


  return (

    <div className={styles.navigation2}>
      <div className={styles.cont1}>
        <div onClick={toggleNavbar} className={styles.sub1}>
          <div>{buttonText}</div>
          {navbarVisible && (
            <nav className={styles.NavbarToggle} id="navbar">
              <ul className={styles.ulToggle}>
                <li className={styles.liToggle}>
                  <div className={styles.liIconToggle}>
                    <img src={check} alt="svg" />
                  </div>
                  <div className={styles.liTextToggle}>Home</div>
                </li>
                <li className={styles.liToggle}>
                  <div className={styles.liIconToggle}>
                    <img src={check} alt="svg" />
                  </div>
                  <div className={styles.liTextToggle}>About</div>
                </li>
                <li className={styles.liToggle}>
                  <div className={styles.liIconToggle}>
                    <img src={check} alt="svg" />
                  </div>
                  <div className={styles.liTextToggle}>Services</div>
                </li>
                <li className={styles.liToggle}>
                  <div className={styles.liIconToggle}>
                    <img src={check} alt="svg" />
                  </div>
                  <div className={styles.liTextToggle}>Contact</div>
                </li>
              </ul>
            </nav>
          )}</div>
        <div className={styles.sub2}>
          <img src="/Assets/logo.png" alt="logo" />
        </div>
        <div className={styles.sub3}>
          <Button isShape='rect' isColor='red' content='New Order'></Button>
        </div>
      </div>
      <div className={styles.cont2}>
        <div className={styles.sub1}>
          <div className={styles.icon}>
            <button>
              <MdQuestionMark />
            </button>
          </div>
          <div className={styles.icon}>
            <button>
              <VscBell />
            </button>
          </div>
        </div>
        <div className={styles.sub2}>
          <div className={styles.name}>User</div>
          <Link to='/UserInfo' className={styles.symbol}>
            <img src="/Assets/user-profile-image.png" alt="userphoto" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar2