import React from 'react'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";
import styles from './UserInfo.module.css'

const UserInfo = () => {
  return (
    <div className={styles.contUserInfo}>
      <div className={styles.mainDiv9}>
        <div className={styles.Navbar}>
          <div className={styles.item1}>
            <div className={styles.sub1}><SlMenu /></div>
            <div className={styles.sub2}>
              <img src="/Assets/logo.png" alt="" />
            </div>
          </div>
          <div className={styles.item2}>User Information</div>
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
                <div className={styles.inputname}>First Name</div>
                <input type="text" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input2} ${styles.input}`}>
                <div className={styles.inputname}>Last Name</div>
                <input type="text" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input3} ${styles.input}`}>
                <div className={styles.inputname}>Email Address</div>
                <input type="email" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input4} ${styles.input}`}>
                <div className={styles.inputname}>Phone Number</div>
                <input type="password" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input5} ${styles.input}`}>
                <div className={styles.inputname}>City</div>
                <input type="number" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input6} ${styles.input}`}>
                <div className={styles.inputname}>State</div>
                <input type="text" autoComplete='hbhjv' />
              </div>

              <div className={styles.submitbtn}>
                <Button type="text" isShape='oval' isColor='red' content='Save changes'></Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserInfo