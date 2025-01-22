'use clinet'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from '../home/subItems.module.css'


function SubItems({item}) {
    const {id,name,subCategories} = item

  return (
    <div key={id}>
      <div className={styles.subItems}>
        <div className={styles.SubItem}>
            <table className={styles.itemtitle}>
                <thead>
                <tr>
                    <th>
                        {name}
                    </th>
                    <th>
                        County
                    </th>
                    <th>
                        Available
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                {
                    
                    subCategories.map((item)=>(
                        <tbody>
                        <tr>
                            <td>
                                <span className={styles.stockIcon}><i class="fa-solid fa-cart-shopping fa-xl "></i></span>
                                <div>
                                <div className={styles.subItenText}>
                                    <h4>
                                    {item.title}
                                    </h4>
                                    <p>{item.text}</p>
                                </div>
                                <div className={styles.mobilebtn}>
                                <div className={styles.mobileABB}>
                                    <span className={styles.buyMobile}><i class="fa-solid fa-money-bill iconspace fa-lg"></i>&#8358; {item.price}</span>
                                    <span className={styles.availableMoblie}>Available: {item.available}</span>
                                </div>
                                <div>
                                    <button className={styles.buybtnMobile}><i class="fa-solid fa-cart-shopping fa-lx"></i>{item.available <1 ?'Out Of Stock' : 'Buy Now'}</button>
                                </div>
                                </div>
                                </div>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                <span className={styles.available}>Available:{item.available}</span>
                            </td>
                            <td>
                                <span className={styles.buy}><i class="fa-solid fa-money-bill iconspace "></i>&#8358;{item.price}</span>
                            </td>
                            <td>
                                <div>
                                <button className={styles.buybtn} disabled={item.available < 1  ? true: false}><i class="fa-solid fa-cart-shopping fa-lx"></i>{item.available <1 ?'Out Of Stock' : 'Buy Now'}</button>
                                </div>
                            </td>
                        </tr>
                </tbody>
                    ))
                }
            </table>
        </div>
      </div>
    </div>
  )
}
SubItems.propType={
    items: PropTypes.array
}
export default SubItems
