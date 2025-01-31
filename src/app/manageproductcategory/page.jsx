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
        <ManageProductComp manage="Manage Product Categories" isManage={false} ManageItems={false} />
      </div>
      {isModalOpen && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <button onClick={closeModal} className={styles.closeButton}>
                  ×
                </button>
                {(<h2>{currentCategory ? "Edit Product Category" : "Create Product Category"}</h2>)}
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
                    <button type="submit" className={styles.submitButton}>
                    {currentCategory ? "Update Product Category" : "Create Product Category"}
                  </button>
                </form>
              </div>
            </div>
          )}
      </div>
    )
  }
  
  export default page