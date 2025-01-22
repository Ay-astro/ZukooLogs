'use client'
import SubItems from './SubItems'
import { useContext } from 'react';
import IndexContext from '@/app/IndexContext';
function SubItemsCollection() {
    const {products}= useContext(IndexContext)
  return (
    <div>
      {
        products.map((items)=>(
            <SubItems item={items}/>
        ))
      }
    </div>
  )
}

export default SubItemsCollection
