import React from 'react'
import styles from './Navbar2.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { MdQuestionMark } from "react-icons/md";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { RiSettings3Line } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi2";
import check from "/Svg/solar_bill-check-linear.svg"
import signout from "/Svg/signout.svg"
import setting from "/Svg/setting.svg"
import profile from "/Svg/profile.svg"
import { apiConnector } from "../../services/apiconnector";
// import { response } from 'express';



const Navbar2 =  ({ button }) => {
  const [isVisibleHam, setIsVisibleHam] = useState(false);
  const toggleNavbar = () => {
    setIsVisibleHam(!isVisibleHam);

  };
  const [isVisibleUser, setIsVisibleUser] = useState(false);
  const toggleInfo = () => {
    setIsVisibleUser(!isVisibleUser);
  
  };

 
  return (
   
    <div className={styles.navigation2}>
      <div className={styles.cont1}>
        <div className={styles.sub1}>
          <div onClick={toggleNavbar}>
            {isVisibleHam ? <IoClose /> : <SlMenu />}</div>
          {
            isVisibleHam ?
              <nav className={`${styles.NavbarToggle}`} id="navbar">
                <ul className={`${styles.ulToggle} `}>
                
                  <li className={styles.liToggle}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Reports</div>
                  </li>
                 
                  <Link to="/Orders" className={`${styles.liToggle} nav-link`}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Billings</div>
                  </Link>

                 
                  <Link to="/Manager" className={`${styles.liToggle} nav-link`}>
                    <div className={styles.liIconToggle}>
                      <img src={check} alt="svg" />
                    </div>
                    <div className={styles.liTextToggle}>Operations</div>
                    </Link>
                 
                </ul>
              </nav>
              : <></>
          }
        </div>
        <div className={styles.sub2}>
          <img src="/Assets/logo.png" alt="logo" />
        </div>
        {
          button == "yes" ? <div className={styles.sub3}>
            <Button isShape='rect' isColor='red' content='New Order'></Button>
          </div> : <div className={styles.sub3}></div>
        }
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
          <div onClick={toggleInfo} className={styles.symbolcont}>
            <div className={styles.symbol}><img src="/Assets/user-profile-image.png" alt="userphoto" /></div>
            {
              isVisibleUser ?
                <div className={styles.toggleUser}>
                  <div className={styles.togglecont1}>
                    <div className={styles.toggleitem1}>Username</div>
                    <div className={styles.toggleitem2}>username@gmail.com</div>
                  </div>
                  <div className={styles.togglecont2}>
                    <ul className={styles.ulToggle2}>
                      <Link to="/Settings" className={`${styles.liToggle2} nav-link`}>
                        <div className={styles.icontoggle}>
                          <img src={setting} alt="svg" />
                        </div>
                        <div className={styles.nametoggle}>Settings</div>
                      </Link>
                      <Link to="/UserInfo" className={`${styles.liToggle2} nav-link`}>
                        <div className={styles.icontoggle}>
                          <img src={profile} alt="svg" />
                        </div>
                        <div className={styles.nametoggle}>Profile</div>
                      </Link>
                      <Link to="/Login" className={`${styles.liToggle2} nav-link`}>
                        <div className={styles.icontoggle}>
                          <img src={signout} alt="svg" />
                        </div>
                        <div className={styles.nametoggle}>Sign out</div>
                      </Link>
                    </ul>
                  </div>
                </div>
                : <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2