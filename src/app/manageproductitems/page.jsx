'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import styles from '../components/manageproductcomp.module.css';

function page() {
  const {isModalOpen, currentCategory,formData, handleInputChange,closeModal,handleSubmit,categories,openModal,handleDelete}= useContext(IndexContext)
  return (
    <div>
      <div>
      <div className={styles.container}>
          <h1>Manage Product Items</h1>
          <button onClick={() => openModal()} className={styles.createButton}>
          Create Item
          </button>
    
          <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
                <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Product</th>
                <th>Actions</th>
              </tr>
            </thead>
             <tbody>
             {categories.map((category, index) => (
               <tr key={index}>
                 <td>{category.title}</td>
                 <td>{category.status}</td>
                 <td>{category.product}</td>
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
          </table>
          </div>
        </div>
    </div>
    {isModalOpen && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <button onClick={closeModal} className={styles.closeButton}>
                  ×
                </button>
                {(<h2>{currentCategory ? "Edit Product Item" : "Create Product Item"}</h2>)}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Log</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  {/* <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className={styles.textarea}
                    />
                  </div> */}
                  {/* <div className={styles.formGroup}>
                    <label>Country</label>
                    <textarea
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className={styles.textarea}
                    />
                  </div> */}
                  {/* <div className={styles.formGroup}>
                  <label>Amount</label>
                  <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                  </div> */}
                  <div className={styles.formGroup}>
                  <label>Product</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  >
                    <option value="">Select Product</option>
                    {categories.map((item) => (
                      <option key={item.id} value={item.product}>
                        {item.product}
                      </option>
                    ))}
                  </select>
                  </div>
                    <button type="submit" className={styles.submitButton}>
                    {currentCategory ? "Update Product Item" : "Create Product Item"}
                  </button>
                </form>
              </div>
            </div>
          )}
    </div>
  )
}

export default page