'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import styles from'./purchase.module.css'

function PurchaseHistory() {
    const {history}= useContext(IndexContext)

  return (
    <div className={styles.purchasehistorycontainer}>
      <button className={styles.backbutton} onClick={() => window.history.back()}>
        ⬅ Back
      </button>
      <h1 className={styles.title}>Purchase History</h1>
      <div className={styles.tablecontainer}>
        <table className={styles.historytable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Pay</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>{item.amount}</td>
                  <td>{item.pay}</td>
                  <td>{item.time}</td>
                  <td>
                    <button className={styles.seemorebutton} onClick={() => alert("See More clicked")}>
                      See More
                    </button>
                    <button className={styles.downloadbutton} onClick={() => alert("Download clicked")}>
                      Download
                    </button>
                    <button className={styles.deletebutton} onClick={() => alert("Delete clicked")}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default  PurchaseHistory