import React from 'react'
import styles from './Login.module.css'
import Button from '../Button/Button'
import { HiOutlineEye } from "react-icons/hi2";
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const hioutline = <HiOutlineEye />;

  return (
    <div className={styles.mainDiv1}>
      <div className={styles.cont1}>
        <img src="/Assets/login-page-1.png" alt="" />
      </div>
      <div className={styles.cont2}>
        <div className={styles.item1}>Log In</div>
        <div className={styles.item2}>
          <div className={styles.email}>
            <input type="email" placeholder='Email' />
          </div>
          <div className={styles.password}>
            <input type="password" placeholder="Password" />
            <HiOutlineEye className={styles.icon_styling} />

          </div>
        </div>
        <div className={styles.item3}>
          <Button isColor="red" isShape="oval" content="Log In" />
        </div>
        <div className={styles.item4}>
          <div className={styles.forgot}>Forgot password?</div>
          <div className={styles.or}>
            <div className={styles.line}></div>
            <div className={styles.text}>Or Log In with</div>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.but1}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            <div>Google</div>
          </div>
          <div className={styles.but2}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
            <div>Facebook</div>
          </div>
        </div>
        <div className={styles.item6}>
          <div className={styles.dont}>Don't have an account?</div>
          <div className={styles.signup}>Sign Up</div>
        </div>

      </div>
    </div >
  )
}

export default Login