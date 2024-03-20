import React from 'react'
import styles from './CheckEmail.module.css'
import Button from '../Button/Button'
import { IoIosArrowRoundBack } from "react-icons/io";

const CheckEmail = () => {
  return (
    <div className={styles.mainDiv7}>
      <div className={styles.content}>
        <div className={styles.cont1}>
          <img src="/Assets/resetpassword-page-1.png" alt="image" />
        </div>
        <div className={styles.cont2}>
          <div className={styles.item1}>Check Email</div>
          <div className={styles.item2}>we have sent the reset email to username@gmail.com</div>

          <div className={styles.item3}>
            <Button isColor="red" isShape="oval" content="Reset Email"></Button>
          </div>
          <div className={styles.item4}>
            <IoIosArrowRoundBack />
            <div>Back to Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckEmail