import React from 'react'
import styles from './ResetPassword.module.css'
import Button from '../Button/Button'
import { IoIosArrowRoundBack } from "react-icons/io";
// import { Link } from 'react-router-dom';
import { apiConnector } from "../../services/apiconnector";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';



const ResetPassword = () => {
  const navigate = useNavigate();
  
const resetPassword = async (e) =>
{
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email)
  {
    toast.warning('enter email first');
  }
  try {
    const response = await apiConnector(
      "POST",
      "http://localhost:3000/api/v1/auth/ResetPassword",
      { email}
    );
    // console.log(response);
    if(response.data.success)
    {
       navigate("/CheckEmail");
    }
    if (response.data.success) {
      toast.success(response.data.message); 
    } else {
      toast.error(response.data.message);
    }
  } catch (err) {
    console.log(err.msg);
  }
}
  return (
    <div className={styles.mainDiv6}>
      <div className={styles.content}>
        <div className={styles.cont1}>
          <img src="/Assets/resetpassword-page-1.png" alt="image" />
        </div>
        <form className={styles.cont2} onSubmit={resetPassword}>
          <div className={styles.item1}  >Reset your password</div>
          <div className={styles.item2}>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</div>
          <div className={styles.item3}>
            <input type='email' autoComplete='username' placeholder='email address' id='email'/>
          </div>
          <div  className={styles.item4}>
            <Button type="submit" isColor="red" isShape="oval" content="Submit" ></Button>
          </div>
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