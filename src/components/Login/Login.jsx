import React, { useState } from 'react'
import styles from './Login.module.css'
import Button from '../Button/Button'
import { HiOutlineEye } from "react-icons/hi2";
import Navbar from '../Navbar/Navbar';
import { apiConnector } from '../../services/apiconnector';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;

  function handleOnChange(e) {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    console.log(formData);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    

    try{
      const response = await apiConnector("POST","http://localhost:3000/api/v1/auth/login",{email,password})
      console.log(response)
      if(response.data.success)
      {
        toast.success("login successfully");
        navigate('/Manager');
      }
      else
      {
        toast.error(response.data.message);
      }
     }catch(err){
       console.log(err.msg)
     }
  }

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className={styles.mainDiv1}>
      <div className={styles.cont1}>
        <img src="/Assets/login-page-1.png" alt="" />
      </div>
      <div className={styles.cont2}>
        <div className={styles.item1}>Log In</div>
        <form onSubmit={onSubmit} className={styles.item2}>
          <div className={styles.email}>
            <input type="email" placeholder='Email' value={email}
              onChange={handleOnChange} name='email' />
          </div>
          <div className={styles.password}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleOnChange} name='password'
              autoComplete='current-password'
              placeholder="Password"
            />
            <HiOutlineEye onClick={toggleShowPassword} className={styles.icon_styling} />
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