import React from 'react'
import styles from './Navbar2.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { MdQuestionMark } from "react-icons/md";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import check from "../../../public/Svg/solar_bill-check-linear.svg"

const Navbar2 = () => {


  const [isVisible, setIsVisible] = useState(false);
  const toggleNavbar = () => {
    setIsVisible(!isVisible);

  };

  return (

    <div className={styles.navigation2}>
      <div className={styles.cont1}>
        <div className={styles.sub1}>
          <div onClick={toggleNavbar}>
            {isVisible ? <IoClose /> : <SlMenu />}</div>
          {
            isVisible ?
              <nav className={`${styles.NavbarToggle}`} id="navbar">
                <ul className={`${styles.ulToggle} `}>
                  <li className={styles.liToggle}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Billings</div>
                  </li>
                  <Link to="/Manager" className={`${styles.liToggle} nav-link`}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Operations</div>
                  </Link>
                  <li className={styles.liToggle}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Reports</div>
                  </li>
                </ul>
              </nav>
              : <></>
          }
        </div>
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