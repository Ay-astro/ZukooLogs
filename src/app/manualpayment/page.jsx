'use client'
import { useContext, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../components/Spinner'
import IndexContext from '@/app/IndexContext';
import styles from './manualpayment.module.css'
import {accountDetails} from '../components/dashboard/productdata'

export default function ManualPayment() {
  const {loading,setLoading,handleSubmitManual,amount,setAmount,handleCopyToClipboard,handleReceiptChange}= useContext(IndexContext) 

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
},[])
  // const accountDetails = {
  //   name: "John Doe",
  //   bank: "Sample Bank",
  //   accountNumber: "1234567890",
  // };


  if(!loading){
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Bank Icon */}
          <div className={styles.iconWrapper}>
            {/* <FaUniversity size={60} color="#007bff" /> */}
            <FontAwesomeIcon icon={faBuildingColumns}  color="#007bff"/>
          </div>
  
          {/* Account Details */}
          <div className={styles.accountDetails}>
            <p>
              <strong>Account Name: </strong> {accountDetails.name}
            </p>
            <p>
              <strong>Bank: </strong> {accountDetails.bank}
            </p>
            <p>
              <strong>Account Number: </strong>{" "}
              {accountDetails.accountNumber}{" "}
              {/* <FaRegCopy
                className={styles.copyIcon}
                onClick={handleCopyToClipboard}
              /> */}
              <span className={styles.copyIcon}><i className="fa-solid fa-copy" 
                onClick={handleCopyToClipboard}></i></span>
            </p>
          </div>
  
          {/* Payment Form */}
          <form onSubmit={handleSubmitManual} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Upload Receipt:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleReceiptChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    );
  }else{
    return(
    <Spinner/>
  )
  }
}