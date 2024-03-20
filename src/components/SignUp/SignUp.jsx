import React from "react";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { HiOutlineEye } from "react-icons/hi2";
// import { signUp } from '../../services/operations/authAPI';
import { Link } from "react-router-dom";
import { useState } from "react";
import { apiConnector } from "../../services/apiconnector";

const SignUp = () => {
  // const [firstname, setFirstname] = useState("abc@gmail.com");
  // const [lastname, setLastname] = useState("abc@123");
  // const [email, setEmail] = useState("abc@123");
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  // console.log(`${firstname} ${lastname} ${email} ${password} ${confirmpassword} `)

  const onSubmit = async (event) => {
    event.preventDefault();
    setFirstname(event.target[0].value);
    setLastname(event.target[1].value);
    setEmail(event.target[2].value);
    setPassword(event.target[3].value);
    setConfirmpassword(event.target[4].value);

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }


    const accountType = "Customer";
    try {
      const response = await apiConnector(
        "POST",
        "http://localhost:3000/api/v1/auth/signup",
        { firstname, lastname, email, password, confirmpassword, accountType }
      );
      console.log(response);
      if (response.data.success) {
        toast.success("signup successfully");
        navigate("/login");
      }
      else {
        toast.error(response.data.message);
      }
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
      event.target[3].value = "";
      event.target[4].value = "";
    } catch (err) {
      console.log(err.msg);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.mainDiv2}>
      <div className={styles.cont1}>
        <img src="/Assets/signup-page-1.png" alt="" />
      </div>
      <form onSubmit={onSubmit} className={styles.cont2}>
        <div className={styles.item1}>Sign Up</div>
        <div className={styles.item2}>
          <div className={styles.firstname}>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.lastname}>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className={styles.email}>
            <input type="email" autoComplete="username" placeholder="Email" />
          </div>
          <div className={styles.password}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Password"
            />
            <HiOutlineEye
              onClick={toggleShowPassword}
              className={styles.icon_styling}
            />
          </div>
          <div className={styles.confirmpassword}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Confirm Password"
            />
            <HiOutlineEye
              onClick={toggleShowConfirmPassword}
              className={styles.icon_styling}
            />
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.but1}>
            <Link to="/Manager" className={styles.Link}>
              <Button
                className="redhoverme"
                isColor="white"
                isShape="oval"
                content="Manager"
              />
            </Link>
          </div>
          <div className={styles.but2}>
            <Link to="/Orders" className={styles.Link}>
              <Button
                className="redhoverme"
                isColor="white"
                isShape="oval"
                content="Customer"
              />
            </Link>
          </div>
          <div className={styles.but3}>
            <Link className={styles.Link}>
              <Button
                className="redhoverme"
                isColor="white"
                isShape="oval"
                content="Chef"
              />
            </Link>
          </div>
        </div>
        <div className={styles.item4}>
          <Button
            type="submit"
            isColor="red"
            isShape="oval"
            content="Sign Up"
          />
        </div>
        <div className={styles.item5}>
          <div className={styles.line}></div>
          <div className={styles.text}>Or Sign Up with</div>
        </div>
        <div className={styles.item6}>
          <div className={styles.but1}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <div>Google</div>
          </div>
          <div className={styles.but2}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="facebook-new"
            />
            <div>Facebook</div>
          </div>
        </div>
        <div className={styles.item7}>
          <div className={styles.already}>Already have an account?</div>
          <Link className={styles.Link} to="/Login">
            <button className={`${styles.login} pointer_cursor`}>Log In</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
