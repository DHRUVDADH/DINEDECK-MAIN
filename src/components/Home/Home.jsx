import React from 'react'
import Button from '../Button/Button'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import HomePageComponent from '../HomePageComponent/HomePageComponent'
import Demo from '../Demo/Demo'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Manager from '../Manager/Manager'


const Home = () => {
  const obj1 = [
    {
      id: 1,
      // imgLink : ,
      spanElement: "billing",
      spanBefore: "A quick 3-click restaurant",
      spanAfter: "software",
      description: `Take orders, punch bills and generate KOT. Accept
      payments either by splitting bill or merging tables.
      Easily apply discounts and coupons. All of this, and 
      more, is easy and quick with Dine-Deck' s restaurant POS.`,
    },
    {
      id: 2,
      // imgLink : ,
      spanElement: "Inventory",
      spanBefore: "Restaurant",
      spanAfter: "management made easier",
      description: `Do inventory management the smart way. Put your inventory on the item-wise auto deduction, get low-stock alters, day-end inventory reports and more with Dine-Deck' s restaurant POS`,
    },
    {
      id: 3,
      // imgLink : ,
      spanElement: "table",
      spanBefore: "Book your",
      spanAfter: "conveniently from the comfort of your home!",
      description: `Select the number of people in your party to view available tables. Tables may be reserved by others. If your desired table is unavailable. You can still book this table, and we will notify you of its confirmation or offer an alternative.`,
    },
    {
      id: 4,
      // imgLink : ,
      spanElement: "Reports",
      spanBefore: "Get real-time restaurant",
      spanAfter: "",
      description: `Automate your restaurant reports and go paper free! Let Petpooja POS automatically track your business activities and provide you error free reports on your restaurant’s day-end sales, online orders, staff actions, inventory consumption, and various 80+ essential business reports`,
    },
  ];

  // Transfer to schedule demo button to that div
  const divRef = useRef(document.getElementById("DemoButtonId"));
  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.headdiv}>
      <Navbar />
      <div className={styles.mainmain}>
        <div className={styles.encloser1}>
          <div className={styles.home_screen1}>
            <div className={styles.cont1}>
              <div className={styles.sub1}>Restaurant POS <br />software made simple!</div>
              <div className={styles.sub2}>
                Manages all your restaurant operations efficiently so that you can
                focus on growing your brand, like a real boss!
              </div>
              <div className={styles.sub3}>
                <Link to="/SignUp"><Button isColor="red" isShape="oval" content="SignUp" /></Link>
              </div>
            </div>
            <div className={styles.cont2}>
              <div className={styles.item1_circle}></div>
              <div className={styles.item2_ellipse}></div>
              <div className={styles.item3_img}>
                <img src="/Assets/main-page-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.encloser2}>
          <div className={styles.home_screen2}>
            <div className={styles.cont1}>
              <div className={styles.sub1}>Smart POS features</div>
              <div className={styles.sub2}>A restaurant POS made for all your needs</div>
              <div className={styles.sub3}>
                A quick and easy-to-use restaurant billing software that makes
                managing high order volumes butter smooth
              </div>
            </div>
            <div className={styles.cont2}>
              <HomePageComponent myProp={obj1} />
            </div>
          </div>
        </div>
        <div className={styles.encloser3}>
          <div className={styles.home_screen3}>
            <div className={styles.cont1}>
              <div className={styles.sub1}>
                <div className={styles.item1}>
                  <div className={styles.imgTag}></div>
                </div>
                <div className={styles.item2}>Perfect for customers</div>
                <div className={styles.item3}>
                  A simply, clutter-free user-experience means customers can clearly
                  engage with your food and drink offering.
                </div>
              </div>
              <div className={styles.sub2}>
                <div className={styles.item1}>
                  <div className={styles.imgTag}> </div>
                </div>
                <div className={styles.item2}>Perfect for your restaurant</div>
                <div className={styles.item3}>
                  From family-run takeaways to large restaurant enterprises,
                  TastyIgniter meets all expectations when managing your business.
                </div>
              </div>
            </div>
            <div className={styles.cont2}>
              <div className={styles.sub1}>
                Bring your restaurant onlilne with <span>DineDeck</span>
              </div>
              <button id="DemoButtonId" onClick={scrollToDiv} className={styles.sub2}>Try Us</button>
            </div>
          </div>
        </div>
        <div ref={divRef} className={styles.encloser4}>
          <Demo></Demo>
        </div>
        <div className={styles.encloser6}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Home