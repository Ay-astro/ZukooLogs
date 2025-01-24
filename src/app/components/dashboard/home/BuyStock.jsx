'use client'
import styles from './buyStock.module.css'
import { useEffect,useContext } from "react";
import IndexContext from '@/app/IndexContext';

function BuyStock() {
  const {handleClose,closeBuy,quantity,setQuantity,price,handleProcessBuy, inputValue,setShowModal,showModal}= useContext(IndexContext)


  useEffect(() => {
    if (showModal) {
      // Add 'modal-open' class to <body> when the modal is shown
      document.body.classList.add("modal-open");
    } else {
      // Remove 'modal-open' class when the modal is hidden
      document.body.classList.remove("modal-open");
    }

    // Cleanup to ensure the class is removed if the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);



  const total = quantity * price.price;
  let purchaseValue = {
    id: price.id,
    product: price.title,
    Amount: quantity,
    total,
  }

  return (
    <div className={`overlay ${closeBuy ? 'closeOverlay' : '' }`}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={handleClose}>
        <i class="fa-solid fa-circle-xmark fa-lg"></i>
        </button>
        <div className={styles.content}>
          <div className={styles.inputGroup}>
            <label>Fixed Text:</label>
            <input
              type="text"
              value={inputValue}
              disabled
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Number of Items:</label>
            <input
              type="number"
              min=""
              value={quantity}
              placeholder='Enter the Quantity you want to buy'
              onChange={(e) => setQuantity(Number(e.target.value))}
              className={styles.input}
            />
          </div>
          <div className={styles.total}>Total: &#8358;{total}</div>
          <button className={styles.buyButton} onClick={()=>handleProcessBuy(purchaseValue)}>
            <a href="/purchase">Buy</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BuyStock