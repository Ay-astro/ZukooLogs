'use client'
import Link from 'next/link';
import { useContext,useEffect } from "react";
import IndexContext from '@/app/IndexContext';
import styles from'./purchase.module.css'
import Spinner from '../components/Spinner'

function PurchaseHistory() {
    const {loading,setLoading,history}= useContext(IndexContext)
    useEffect(()=>{
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 2000);
  
      return () => clearTimeout(timer);
  },[])
  if(!loading){
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
                      <button className={styles.seemorebutton}>
                        <Link href='/item' className={styles.seemoreLink}>See More</Link>
                      </button>
                      {/* <button className={styles.downloadbutton} onClick={() => alert("Download clicked")}>
                        Download
                      </button>
                      <button className={styles.deletebutton} onClick={() => alert("Delete clicked")}>
                        Delete
                      </button> */}
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
  }else{
    return(
      <Spinner/>
    )
  }

}
export default  PurchaseHistory