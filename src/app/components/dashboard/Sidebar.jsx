'use client'
import Link from 'next/link';
import { useState,useContext } from 'react';
import IndexContext from '@/app/IndexContext';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons'
import {productFullData} from './productdata'


const Sidebar = () => {
  const {isCollapsed,handleSubitems,isAdmin,product,activeDropdown,toggleSidebar,toggleDropdown}= useContext(IndexContext)




  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed isMenue' : ''}`}>
      <div className="sidebar-header">
        <h3 className="brand">
          <i className="fas fa-anchor"></i>
          <span>ZukooLogs</span>
        </h3>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'} toggle-icon`}></i>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/" className="nav-item">
            <span className="nav-icon"><i className="fas fa-home"></i></span>
            <span className='icon-item'>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/purchase" className="nav-item">
            <span className="nav-icon"><i className="fas fa-user"></i></span>
            <span className='icon-item'>Purchase History</span>
          </Link>
        </li>
        <li className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
          <Link href="#" className="nav-item dropdown-toggle" onClick={() => toggleDropdown(0)}>
            <div className='buyaccount'>
              <span className="nav-icon"><i className="fa-solid fa-cart-shopping"></i></span>
              <span className='icon-item'>BUY ACCOUNT</span>
            </div>
            <i className={`fas ${activeDropdown === 0 ? 'fa-chevron-down' : 'fa-chevron-right'} dropdown-icon`}></i>
          </Link>
          <ul className="dropdown-menu">
            {
              product.map((items)=>(
                <li><Link href="#" className="dropdown-item" key={items.id} onClick={()=>handleSubitems(items.id)}>{items.subname}</Link></li>
              ))
            }
          </ul>
        </li>
        <li>
          <Link href="https://chat.whatsapp.com/Fgp2zg0Nm7J4r68xVHrWIS" className="nav-item" target='_blank'>
            <span className="nav-icon"><i className="fa-brands fa-whatsapp fa-lg"></i></span>
            <span className='icon-item'>Whatsapp Community</span>
          </Link>
        </li>
        <li>
          <Link href="https://t.me/+_yPjLgW7hwYxZGU0
" className="nav-item" target='_blank'>
            <span className="nav-icon"><i className="fa-brands fa-telegram fa-lg"></i></span>
            <span className='icon-item'>Telegram Channel</span>
          </Link>
        </li>
        <li>
          {!isCollapsed && <p className='others'>RECHARGE</p> }
          <Link href="/manualpayment" className="nav-item" >
            <span className="nav-icon"><FontAwesomeIcon icon={faBuildingColumns} /></span>
            <span className='icon-item'>Manual Payment</span>
          </Link>
          <Link href="/manualtransaction" className="nav-item" >
            <span className="nav-icon"><i class="fa-solid fa-clock-rotate-left"></i></span>
            <span className='icon-item'>Manual Transactions</span>
          </Link>
        </li>
        <li>
          {!isCollapsed && <p className='others'>OTHERS</p> }
          <Link href="#" className="nav-item">
            <span className="nav-icon"><i className="fa-regular fa-circle-question fa-lg"></i></span>
            <span className='icon-item'>FAQ</span>
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/message/EN46VSWDDR5HG1" className="nav-item" target='_blank'>
            <span className="nav-icon"><i className="fa-solid fa-address-book"></i></span>
            <span className='icon-item'>Customer Care</span>
          </Link>
        </li>
        {
          isAdmin &&(
            <ul>
        <li>
        <Link href="/manageproduct" className="nav-item">
          <span className="nav-icon"><i class="fa-solid fa-bars-progress"></i></span>
          <span className='icon-item'>Manage Products</span>
        </Link>
      </li>
      <li>
        <Link href="/manageproductcategory" className="nav-item">
          <span className="nav-icon"><i class="fa-solid fa-bars-progress"></i></span>
          <span className='icon-item'>Manage Category</span>
        </Link>
      </li>
      <li>
        <Link href="/manageproductitems" className="nav-item">
          <span className="nav-icon"><i class="fa-solid fa-bars-progress"></i></span>
          <span className='icon-item'>Manage Items</span>
        </Link>
      </li>
      <li>
          <Link href="/mangemanualtransaction" className="nav-item">
            <span className="nav-icon"><i class="fa-solid fa-clock-rotate-left"></i></span>
            <span className='icon-item'>Manual Transaction</span>
          </Link>
        </li>
      <li>
        <Link href="/transactionhistory" className="nav-item">
          <span className="nav-icon"><i class="fa-solid fa-clock-rotate-left"></i></span>
          <span className='icon-item'>Transaction History</span>
        </Link>
      </li>
            </ul>
          )
        }
        
      </ul>
    </div>
  );
};

export default Sidebar;