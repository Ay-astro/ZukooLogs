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
          <h1>Manage Product Categories</h1>
            <button onClick={() => openModal()} className={styles.createButton}>
            Create Category
          </button>
    
          <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <thead>
             {(
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
             )}
            </thead>
             <tbody>
             {categories.map((category, index) => (
               <tr key={index}>
                 <td>{category.title}</td>
                 <td>{category.description}</td>
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