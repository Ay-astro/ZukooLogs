'use client'
import styles from './lastOrder.module.css'
function LastOrder() {
  return (
    <div className={styles.lastOrderContainer}>
      <div className={styles.lastContain}>
        <div className={styles.LastOrder}>
            <h4>
                LAST ORDER
            </h4>
        </div>
            <table>
            <tbody>
                <tr>
                    <td>
                        <span><i class="fa-solid fa-cart-shopping fa-lx"></i></span>
                        <span className={styles.y}>...y </span>
                        <span className={styles.buy}>Buy </span>
                        <span className={styles.number}> 2</span>
                        <span> <b>Twitter old account, Registration 2009-2015, Verified by email contains mail password(hotmail.com), opened 2FA (Followers 0-50)</b></span>
                        <span className={styles.amount}>..-2000</span>
                    </td>
                    <td><span className={styles.time}>1hour, 34 minues ago</span></td>
                </tr>
            </tbody>
            </table>
      </div>
      <div className={styles.lastContain}>
      <div className={styles.LastOrder}>
            <h4>
                NEW ORDER
            </h4>
        </div>
      </div>
    </div>
  )
}

export default LastOrder
