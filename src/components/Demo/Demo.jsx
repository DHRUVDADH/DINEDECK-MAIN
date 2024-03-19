import React from 'react'
import styles from './Demo.module.css'
import Button from '../Button/Button'
import { useState } from 'react'
const Demo = () => {
  const [name, setName] = useState("Dhruv")
  const [phone, setPhone] = useState(234234)
  const [email, setEmail] = useState("dhruv@gmail.com")
  const [restname, setRestname] = useState("dinedeck")
  const [city, setCity] = useState("baroda")
  const [outlet, setOutlet] = useState("Outlet")

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setPhone(event.target[1].value);
    setEmail(event.target[2].value);
    setRestname(event.target[3].value);
    setCity(event.target[4].value);
    setOutlet(event.target[5].value);

  }

  return (
    <form onSubmit={onSubmit} className={styles.home_screen4}>
      <div className={styles.cont1}>
        <div className={styles.item1}>Schedule a free trial</div>
        <div className={styles.item2}>Get in touch with our teamto clarify your queries</div>
      </div>
      <div className={styles.cont2}>
        <div className={styles.sub1}>
          <div className={`${styles.name} ${styles.inputDiv}`}>
            <label htmlFor='name1'>Name</label>
            <input type="text" name="name1" id={styles.name1} />
          </div>
          <div className={`${styles.phone} ${styles.inputDiv}`}>
            <label htmlFor='phoneno'>Phone Number</label>
            <input type="number" name="phoneno" id={styles.phoneno} />
          </div>
          <div className={`${styles.email} ${styles.inputDiv}`}>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" id={styles.email} />
          </div>
          <div className={`${styles.restname} ${styles.inputDiv}`}>
            <label htmlFor='restaurant'>Restaurant Name</label>
            <input type="text" name="restaurant" id={styles.restaurant} />
          </div>
          <div className={`${styles.city} ${styles.inputDiv}`}>
            <label htmlFor='cityyy'>City</label>
            <input type="text" name="cityyy" id={styles.cityyy} />
          </div>
          <div className={`${styles.outlet} ${styles.inputDiv}`}>
            <label htmlFor='type'>Outlet Type</label>
            <input type="text" name="type" id={styles.type} />
          </div>
          <div className={styles.submitButton}>
            <Button type="submit" isColor="red" isShape="rect" content="Submit"><input type='submit' /></Button>
          </div>
        </div>
        <div className={styles.sub2}>
          <div className={styles.imgTag}></div>
        </div>
      </div>
    </form>
  )
}

export default Demo