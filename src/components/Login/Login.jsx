import React, { useState } from 'react'
import styles from './Login.module.css'
import Button from '../Button/Button'
import { HiOutlineEye } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("dhruv@gmail.com");
  const [password, setPassword] = useState("dhruv@123");

  const onSubmit = (event) => {
    event.preventDefault();

    setEmail(event.target[0].value);
    setPassword(event.target[1].value);

    console.log(`${email} ${password}`);
  }

  return (
    <div className={styles.mainDiv1}>
      <div className={styles.cont1}>
        <img src="/Assets/login-page-1.png" alt="" />
      </div>
      <div className={styles.cont2}>
        <div className={styles.item1}>Log In</div>
        <form onSubmit={onSubmit} className={styles.item2}>
          <div className={styles.email}>
            <input type="email" autoComplete='username' placeholder='Email' />
          </div>
          <div className={styles.password}>
            <input type="password" autoComplete='current-password' placeholder="Password" />
            <HiOutlineEye className={styles.icon_styling} />
          </div>
          <div className={styles.submitbtn}>
            <Button type='submit' isColor="red" isShape="oval" content="Log In" />
          </div>
        </form>

        <div className={styles.item3}>
          <div className={styles.forgot}>Forgot password?</div>
          <div className={styles.or}>
            <div className={styles.line}></div>
            <div className={styles.text}>Or Log In with</div>
          </div>
        </div>
        <div className={styles.item4}>
          <div className={styles.but1}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            <div>Google</div>
          </div>
          <div className={styles.but2}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
            <div>Facebook</div>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.dont}>Don't have an account?</div>
          <Link className={styles.Link} to="/SignUp"><button className={`${styles.signup} pointer_cursor`}>Sign Up</button></Link>
        </div>

      </div>
    </div >
  )
}

export default Login