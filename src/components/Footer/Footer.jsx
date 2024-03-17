import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.home_screen5}>
      <div className={styles.cont1}>
        <div className={styles.sub}>
          <div className={styles.item1}>Features</div>
          <div className={styles.item2}>
            <ul>
              <li>Billing</li>
              <li>Reporting</li>
              <li>Inventory</li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
        <div className={styles.sub}>
          <div className={styles.item1}>Outlet-Types</div>
          <div className={styles.item2}>
            <ul>
              <li>Fine-Dine</li>
              <li>Cafe</li>
              <li>Bakery</li>
              <li>Ice-cream & dessert</li>
            </ul>
          </div>
        </div>
        <div className={styles.sub}>
          <div className={styles.item1}>Resources</div>
          <div className={styles.item2}>
            <ul>
              <li>Blogs</li>
              <li>YouTube</li>
              <li>About Us</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cont2}>
        <div className={styles.sub1}>
          <img src="/Assets/logo.png" alt="logo" />
        </div>
        <div className={styles.sub2}>
          <ul>
            <li><FiInstagram className={styles.iconFill} /></li>
            <li><FaLinkedin className={styles.iconFill} /></li>
            <li><FaYoutube className={styles.iconFill} /></li>
            <li><FaFacebook className={styles.iconFill} /></li>
          </ul>

        </div>
        <div className={styles.sub3}>
          <BsFillTelephoneFill className={styles.iconFill} />
          <div>+91 9879274175</div>
        </div>
        <div className={styles.sub4}>
          <MdEmail className={styles.iconFill} />
          <div>dinedeck@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer