'use client'
import { useContext } from "react";
import IndexContext from '@/app/IndexContext';
import ManageProductComp from "../components/ManageProductComp"
import styles from '../components/manageproductcomp.module.css';



function page() {
  const {isModalOpen, currentCategory,formData, handleInputChange,closeModal,handleSubmit,categories}= useContext(IndexContext)

  return (
    <div>
      <div>
      <ManageProductComp manage="Manage Product" isManage={true} ManageItems={false} />
    </div>
    {isModalOpen && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <button onClick={closeModal} className={styles.closeButton}>
                  ×
                </button>
                {(<h2>{currentCategory ? "Edit Product" : "Create Product"}</h2>)}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className={styles.textarea}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Country</label>
                    <textarea
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className={styles.textarea}
                    />
                  </div>
                  <div className={styles.formGroup}>
                  <label>Amount</label>
                  <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                  </div>
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
                    {currentCategory ? "Update Product" : "Create Product"}
                  </button>
                  
                </form>
              </div>
            </div>
          )}
    </div>
  )
}

export default page

