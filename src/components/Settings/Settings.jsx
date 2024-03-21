import React from 'react'
import styles from './Settings.module.css'
import Button from '../Button/Button'
import { SlMenu } from "react-icons/sl";

const Settings = () => {
  return (
    <div className={styles.contSettings}>
      <div className={styles.mainDiv8}>
        <div className={styles.Navbar}>
          <div className={styles.item1}>
            <div className={styles.sub1}><SlMenu /></div>
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
                <input type="password" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input2} ${styles.input}`}>
                <div className={styles.inputname}>New Password</div>
                <input type="password" autoComplete='hbhjv' />
              </div>
              <div className={`${styles.input3} ${styles.input}`}>
                <div className={styles.inputname}>Confirm Password</div>
                <input type="password" autoComplete='hbhjv' />
              </div>
              <div className={styles.submitbtn}>
                <Button type="submit" isShape='oval' isColor='red' content='Save changes'></Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings