import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={`${styles.cont1} pointer_cursor`}>
        <img src={'/Assets/logo.png'} alt="logo" />
      </div>
      <div className={styles.cont2}>
        <div className={StyleSheet.cursor_pointer}>
          Features
          {/* <ul>
            <li>
              <div>Billing</div>
            </li>
            <li>
              <div>Inventory</div>z
            </li>
            <li>
              <div>Reporting</div>
            </li>
            <li>
              <div>Menu</div>
            </li>
          </ul> */}
        </div>
        <div className={StyleSheet.cursor_pointer}>Outlet Types</div>
        <div className={StyleSheet.cursor_pointer}>Resource</div>
        <div className={StyleSheet.cursor_pointer} >Demo</div>
      </div>
      <div className={styles.cont3}>
        <div>
          <Link className={styles.Link} to="/Signup">
            <Button isColor="red" isShape="rect" content="SignUp" />
          </Link>
        </div>
        <div>
          <Link className={styles.Link} to="/Login">
            <Button isColor="white" isShape="rect" content="Login" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar