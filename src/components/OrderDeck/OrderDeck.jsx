import React, { useState } from 'react'
import styles from './OrderDeck.module.css'
import Navbar2 from '../Navbar2/Navbar2'


const OrderDeck = () => {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform search logic here, e.g., fetch data from an API
    // Update searchResults state with the search results

  };

  const showHtmlContent = true;
  const Amount = 0;
  const Tax = 0;
  const Discount = 0;
  const date = new Date();

  const data = [
    {
      OrderNo: 123,
      TableNo: "A4",
      Customername: "DHRUV DADHANIA",
      CustomerPhoneno: 9094038444,
      Payment: "cash",
      [Amount]: 2300,
      [Tax]: 180.00,
      [Discount]: 0.00,
      GrantTotal: (Amount + Tax - Discount),
      Created: [date.getHours() + ":" + date.getMinutes(), date.toLocaleDateString()],
      Buttons: ["View", "Bill", "Print"]
    },
    {
      OrderNo: 123,
      TableNo: "A4",
      Customername: "DHRUV DADHANIA",
      CustomerPhoneno: 9094038444,
      Payment: "cash",
      [Amount]: 2300,
      [Tax]: 180.00,
      [Discount]: 0.00,
      GrantTotal: (Amount + Tax - Discount),
      Created: [date.getHours() + ":" + date.getMinutes(), date.toLocaleDateString()],
      Buttons: ["View", "Bill", "Print"]
    }, {
      OrderNo: 123,
      TableNo: "A4",
      Customername: "DHRUV DADHANIA",
      CustomerPhoneno: 9094038444,
      Payment: "cash",
      [Amount]: 2300,
      [Tax]: 180.00,
      [Discount]: 0.00,
      GrantTotal: (Amount + Tax - Discount),
      Created: [date.getHours() + ":" + date.getMinutes(), date.toLocaleDateString()],
      Buttons: ["View", "Bill", "Print"]
    }, {
      OrderNo: 123,
      TableNo: "A4",
      Customername: "DHRUV DADHANIA",
      CustomerPhoneno: 9094038444,
      Payment: "cash",
      [Amount]: 2300,
      [Tax]: 180.00,
      [Discount]: 0.00,
      GrantTotal: (Amount + Tax - Discount),
      Created: [date.getHours() + ":" + date.getMinutes(), date.toLocaleDateString()],
      Buttons: ["View", "Bill", "Print"]
    },
]

  return (
    <div className={styles.mainDiv5}>
      <Navbar2></Navbar2>
      <div className={styles.cont1}>
        <div className={styles.Line}></div>
        <div className={styles.Content}>
          <div className={styles.item1}>
            {/* <SearchBar onSearch={{ handleSearch }}></SearchBar> */}
          </div>
          <div className={styles.item2}>
            <table className={styles.table}>
              <thead className={styles.thead} >
                <tr className={styles.theadrow}>
                  <th>Order No.</th>
                  <th>Table No.</th>
                  <th>Customer Name</th>
                  <th>Customer Phone no.</th>
                  <th>Payment Type</th>
                  <th>My Amount</th>
                  <th>Tax</th>
                  <th>Discount</th>
                  <th>Grant Total</th>
                  <th>Created</th>
                  <th></th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {data.map((row, index) => (
                  <tr className={styles.tbodyrow} key={index}>
                    <td>{row.OrderNo}</td>
                    <td>{row.TableNo}</td>
                    <td>{row.Customername}</td>
                    <td>{row.CustomerPhoneno}</td>
                    <td>{row.Payment}</td>
                    <td>{row[Amount]}</td>
                    <td>{row[Tax]}</td>
                    <td>{row[Discount]}</td>
                    <td>{row.GrantTotal}</td>
                    <td>
                      <div>{row.Created[0]}</div>
                      <div>{row.Created[1]}</div>
                    </td>
                    <td>
                      <button>{row.Buttons[0]}</button>
                      <button>{row.Buttons[1]}</button>
                      <button>{row.Buttons[2]}</button>
                    </td>
                    {/* Render additional cells for each row */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDeck