'use client'
import {useContext } from 'react';
import IndexContext from '@/app/IndexContext';
import {productFullData} from '../productdata'
import styles from './productItems.module.css'
function ProductItems() {
  const {handleSubitems}= useContext(IndexContext)
  return (
    <div className={styles.productItems}>
      <ul>
      {productFullData.map((items)=>(
        <li key={items.id} className={styles.productList} onClick={()=>handleSubitems(items.id)}><p>{items.name}</p></li>
      ))}
      </ul>
    </div>
  )
}

export default ProductItems
