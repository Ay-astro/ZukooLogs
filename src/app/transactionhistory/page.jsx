'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import styles from '../components/manageproductcomp.module.css';
function page() {
  const {categories}= useContext(IndexContext)
  return (
    <div>
      <div className={styles.container}>
          <h1>Transaction History</h1>
          <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
                 <tr>
                 <th>Ref</th>
                 <th>Description</th>
                 <th>User</th>
                 <th>Amount</th>
                 <th>Date</th>
               </tr>
            </thead>
              <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.title}</td>
                    <td>{category.user}</td>
                    <td>{category.amount}</td>
                    <td>{category.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
    </div>
  )
}

export default page
