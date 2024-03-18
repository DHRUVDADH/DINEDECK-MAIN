import React from 'react'
import styles from './SignUp.module.css'
import Button from '../Button/Button'
import { HiOutlineEye } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const [firstname, setFirstname] = useState("abc@gmail.com");
  const [lastname, setLastname] = useState("abc@123");
  const [email, setEmail] = useState("abc@123");
  const [password, setPassword] = useState("abc@123");
  const [confirmpassword, setConfirmpassword] = useState("abc@123");

  console.log(`${firstname} ${lastname} ${email} ${password} ${confirmpassword} `)
  const onSubmit = (event) => {
    event.preventDefault();

    console.log(event);
    setFirstname(event.target[0].value);
    setLastname(event.target[1].value);
    setEmail(event.target[2].value);
    setPassword(event.target[3].value);
    setConfirmpassword(event.target[4].value);
  }
  return (
    <div className={styles.mainDiv2}>
      <div className={styles.cont1}>
        <img src="/Assets/signup-page-1.png" alt="" />
      </div>
      <form onSubmit={onSubmit} className={styles.cont2}>
        <div className={styles.item1}>Sign Up</div>
        <div className={styles.item2}>
          <div className={styles.firstname}>
            <input type="text" placeholder='First Name' />
          </div>
          <div className={styles.lastname}>
            <input type="text" placeholder='Last Name' />
          </div>
          <div className={styles.email}>
            <input type="email" autoComplete='username' placeholder='Email' />
          </div>
          <div className={styles.password}>
            <input type="password" autoComplete='new-password' placeholder="Password" />
            <HiOutlineEye className={styles.icon_styling} />
          </div>
          <div className={styles.confirmpassword}>
            <input type="password" autoComplete='new-password' placeholder="Confirm Password" />
            <HiOutlineEye className={styles.icon_styling} />
          </div>
        </div>
        <div className={styles.item3}>
          <div className='but1'>
            <Button className="redhoverme" isColor="white" isShape="oval" content="Manager" />
          </div>
          <div className='but2'>
            <Button className="redhoverme" isColor="white" isShape="oval" content="Customer" />
          </div>
          <div className='but3'>
            <Button className="redhoverme" isColor="white" isShape="oval" content="Chef" />
          </div>
        </div>
        <div className={styles.item4}>
          <Button type='submit' isColor="red" isShape="oval" content="Sign Up" />
        </div>
        <div className={styles.item5}>
          <div className={styles.line}></div>
          <div className={styles.text}>Or Sign Up with</div>

        </div>
        <div className={styles.item6}>
          <div className={styles.but1}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            <div>Google</div>
          </div>
          <div className={styles.but2}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
            <div>Facebook</div>
          </div>
        </div>
        <div className={styles.item7}>
          <div className={styles.already}>Already have an account?</div>
          <Link className={styles.Link} to="/Login"><button className={`${styles.login} pointer_cursor`}>Log In</button></Link>
        </div>

      </form>
    </div>
  )
}

export default SignUp