'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import styles from '../components/manageproductcomp.module.css';

function page() {
    const {categories}= useContext(IndexContext)


      return (
        <div className={styles.container}>
          <h1>Manual Transactions</h1>
    
          <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
                 <tr>
                 <th>Ref</th>
                 <th>User</th>
                 <th>Amount</th>
                 <th>Date</th>
                 <th>Status</th>
               </tr>
            </thead>
           <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.user}</td>
                    <td>{category.amount}</td>
                    <td>{category.date}</td>
                    <td>{category.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      );
    }


export default page
