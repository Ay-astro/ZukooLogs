'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import styles from './manageproductcomp.module.css';

function ManageProductComp({manage,isManage, ManageItems, Transaction}) {
    const {categories, isModalOpen, currentCategory,currentItem,formData, handleInputChange,openModal,closeModal,handleSubmit,handleDelete}= useContext(IndexContext)




      return (
        <div className={styles.container}>
          <h1>{manage}</h1>
          {Transaction ? '': ManageItems ? (<button onClick={() => openModal()} className={styles.createButton}>
          Create Item
        </button>) : (
            <button onClick={() => openModal()} className={styles.createButton}>
            Create {isManage ? 'Product' : 'Category'}
          </button>
        )}
    
          <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
             {Transaction ? (
                 <tr>
                 <th>Ref</th>
                 <th>Description</th>
                 <th>User</th>
                 <th>Amount</th>
                 <th>Date</th>
                 {/* <th>Actions</th> */}
               </tr>
             ) : (
                <tr>
                <th>{ManageItems? 'Item' : 'Title'}</th>
                <th>{ManageItems? 'Status':'Description'}</th>
                {isManage && (
                    <th>{ManageItems? 'Product':'County'}</th>
                )}
                {!ManageItems && (
                    <th>{ManageItems? 'Product':'Amount'}</th>
                )}
                <th>Actions</th>
              </tr>
             )}
            </thead>
           {Transaction ? ( <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.title}</td>
                    <td>{category.user}</td>
                    <td>{category.amount}</td>
                    <td>{category.date}</td>
                  {/* <td>
                    <button
                      onClick={() => handleDelete(category.title)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>): (
             <tbody>
             {categories.map((category, index) => (
               <tr key={index}>
                 <td>{category.title}</td>
                 <td>{ManageItems ? category.status :category.description}</td>
                 {isManage && (
                   <td>{ManageItems? category.product :category.country}</td>
                 )}
                 {!ManageItems && (
                   <td>{category.amount}</td>
                 )}
                 <td>
                   <button
                     onClick={() => openModal(category)}
                     className={styles.editButton}
                   >
                     Edit
                   </button>
                   <button
                     onClick={() => handleDelete(category.title)}
                     className={styles.deleteButton}
                   >
                     Delete
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
           )}
          </table>
          </div>
        </div>
      );
    }


export default ManageProductComp
