import React from 'react'
import styles from './Navbar2.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import { MdQuestionMark } from "react-icons/md";
import { VscBell, VscBellDot } from "react-icons/vsc";


const Navbar2 = () => {
  return (
    <div className={styles.navigation2}>
      <div className={styles.cont1}>
        <div className={styles.sub1}><SlMenu /></div>
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
          <button className={styles.symbol}>
            <img src="/Assets/user-profile-image.png" alt="userphoto" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar2