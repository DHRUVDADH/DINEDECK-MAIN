import React from 'react'
import styles from './ResetPassword.module.css'
import Button from '../Button/Button'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className={styles.mainDiv6}>
      <div className={styles.content}>
        <div className={styles.cont1}>
          <img src="/Assets/resetpassword-page-1.png" alt="image" />
        </div>
        <form className={styles.cont2}>
          <div className={styles.item1}>Reset your password</div>
          <div className={styles.item2}>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</div>
          <div className={styles.item3}>
            <input type='email' autoComplete='username' placeholder='email address' />
          </div>
          <Link to='/CheckEmail' className={styles.item4}>
            <Button type="submit" isColor="red" isShape="oval" content="Submit"></Button>
          </Link>
          <div className={styles.item5}>
            <IoIosArrowRoundBack />
            <div>Back to Login</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword