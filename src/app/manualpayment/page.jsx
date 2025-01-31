'use client'
import { useContext, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../components/Spinner'
import IndexContext from '@/app/IndexContext';
// import { FaRegCopy, FaUniversity } from "react-icons/fa";
import styles from './manualpayment.module.css'

export default function ManualPayment() {
  const {loading,setLoading,receipt,setReceipt,amount,setAmount}= useContext(IndexContext) 

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
},[])
  const accountDetails = {
    name: "John Doe",
    bank: "Sample Bank",
    accountNumber: "1234567890",
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
  };

  const handleReceiptChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceipt(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receipt || !amount) {
      alert("Please upload a receipt and enter the amount.");
      return;
    }
    // Add logic to handle the submission, like an API call
  };

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
              <i class="fa-solid fa-copy" className={styles.copyIcon}
                onClick={handleCopyToClipboard}></i>
            </p>
          </div>
  
          {/* Payment Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
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