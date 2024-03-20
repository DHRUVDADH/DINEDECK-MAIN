import React from "react";
import styles from "./Manager.module.css";
import Navbar2 from "../Navbar2/Navbar2";
import { useEffect } from "react";
import { apiConnector } from "../../services/apiconnector";

const Manager = () => {
  useEffect(async () => {
    try {
      const response = await apiConnector(
        "get",
        "http://localhost:3000/api/v1/auth/Manager"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.mainDiv3}>
      <Navbar2></Navbar2>
      <div className={styles.cont1}>
        <div className={styles.Line}></div>
        <div className={styles.Content}>
          <div className={styles.sub1}>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Orders</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-KOT.png" alt="" />
              </div>
              <div className={styles.buttonName}>KOTs</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-order.png" alt="" />
              </div>
              <div className={styles.buttonName}>Customers</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Expense</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Inventory</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Table</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Currency conversion</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Feedback</div>
            </button>
          </div>

          <div className={styles.sub2}>
            <div className={styles.item1}>
              Set the Configuration for your restaurant
            </div>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Menu</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Tax</div>
            </button>
            <button className={styles.Buttons}>
              <div className={styles.buttonIcon}>
                <img src="/Svg/manager-customers.png" alt="" />
              </div>
              <div className={styles.buttonName}>Discounts</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
