'use client'
import Link from 'next/link';
import { useState,useContext } from 'react';
import IndexContext from '@/app/IndexContext';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons'
import productdata from './productdata'


const Sidebar = () => {
  const {setIsCollapsed,isCollapsed}= useContext(IndexContext)
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [product, setProduct] = useState(productdata)
    

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
          <Link href="#" className="nav-item">
            <span className="nav-icon"><i className="fas fa-home"></i></span>
            <span className='icon-item'>Dashboard</span>
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
                <li><Link href="#" className="dropdown-item" key={items.id}>{items.name}</Link></li>
              ))
            }
          </ul>
        </li>
        <li>
          <Link href="#" className="nav-item">
            <span className="nav-icon"><i className="fa-brands fa-whatsapp fa-lg"></i></span>
            <span className='icon-item'>Whatsapp Community</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="nav-item">
            <span className="nav-icon"><i className="fa-brands fa-telegram fa-lg"></i></span>
            <span className='icon-item'>Telegram Channel</span>
          </Link>
        </li>
        <li>
          {!isCollapsed && <p className='others'>RECHARGE</p> }
          <Link href="#" className="nav-item">
            <span className="nav-icon"><FontAwesomeIcon icon={faBuildingColumns} /></span>
            <span className='icon-item'>Manual Payment</span>
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
          <Link href="#" className="nav-item">
            <span className="nav-icon"><i className="fa-solid fa-address-book"></i></span>
            <span className='icon-item'>Customer Care</span>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;