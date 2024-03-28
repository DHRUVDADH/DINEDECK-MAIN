import React, { useState } from 'react'
import styles from './Settings.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import check from "../../../public/Svg/solar_bill-check-linear.svg"

const Settings = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleNavbar = () => {
    setIsVisible(!isVisible);

  };
  const [currentP, setCurrentP] = useState('Initial Value');
  const [newP, setNewP] = useState('Initial Value');
  const [confirmP, setConfirmP] = useState('Initial Value');
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setCurrentP(e.target[1].value);
    setNewP(e.target[2].value);
    setConfirmP(e.target[3].value);
    console.log(e);
    setEditMode(false);
  };
  const handleChange = (e) => {
    setCurrentP(e.target.value);
    setNewP(e.target.value);
    setConfirmP(e.target.value);
    // console.log(currentP);
  };
  return (
    <div className={styles.contSettings}>
      <div className={styles.mainDiv8}>
        <div className={styles.Navbar}>
          <div className={styles.item1}>
            <div className={styles.sub1} onClick={toggleNavbar}>{isVisible ? <IoClose /> : <SlMenu />}</div>
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
            <div className={styles.sub2}>
              <img src="/Assets/logo.png" alt="" />
            </div>
          </div>
          <div className={styles.item2}>Settings</div>
        </div>
        <div className={styles.Settings}>
          <div className={styles.Line}></div>
          <div className={styles.Content}>

            <div className={styles.item1}>
              <div className={styles.sub1}>
                <img src="./Assets/user-profile-image.png" alt="" />
              </div>
              <div className={styles.sub2}>Meet Gami</div>
            </div>
            <form className={styles.item2}>
              <div className={`${styles.input1} ${styles.input}`}>
                <div className={styles.inputname}>Current Password</div>
                {/* <input type="password" autoComplete='hbhjv' /> */}
                {editMode ? (
                  <input onChange={handleChange} placeholder={currentP} type="text" autoComplete='hbhjv' />
                ) : (
                  <div className={styles.toggledInput}>{currentP}</div>
                )}
              </div>
              {
                editMode ?
                  <><div className={`${styles.input2} ${styles.input}`}>
                    <div className={styles.inputname}>New Password</div>
                    {/* <input type="password" autoComplete='hbhjv' /> */}
                    {editMode ? (
                      <input onChange={handleChange} type="text" autoComplete='hbhjv' />
                    ) : (
                      <div className={styles.toggledInput}>{newP}</div>
                    )}
                  </div><div className={`${styles.input3} ${styles.input}`}>
                      <div className={styles.inputname}>Confirm Password</div>
                      {/* <input type="password" autoComplete='hbhjv' /> */}
                      {editMode ? (
                        <input onChange={handleChange} type="text" autoComplete='hbhjv' />
                      ) : (
                        <div className={styles.toggledInput}>{confirmP}</div>
                      )}
                    </div></>
                  :
                  <></>
              }
              <div className={styles.submitbtn}>
                {/* <Button type="submit" isShape='oval' isColor='red' content='Save changes'></Button> */}
                {editMode ? (
                  <Button onSubmit={handleSaveClick} type="submit" isShape='oval' isColor='red' content='Save changes'></Button>
                ) : (
                  <div onClick={handleEditClick} className={styles.editbtn}>Edit</div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings