'use client'
import styles from "./topbar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars,faWallet,faUser} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import IndexContext from "../IndexContext"
function topbar() {
    const {handleMenue,isCollapsed,balance,login,handleLogin, handleProfile,profile}= useContext(IndexContext)
  return (
    <div className={`navFlex ${isCollapsed ?  'navCol' : ''}`}>
      <div className={styles.walletdiv}>
      <div className="HamburgerMenue" onClick={handleMenue}>
        <FontAwesomeIcon icon={faBars} className={styles.faTab}/>
      </div>
        <div className={styles.wallet}>
            <div className={styles.walletbalance}>
              <FontAwesomeIcon icon={faWallet} />
              <p>
                wallet: &#8358;<b>{balance.toFixed(2).replace(/[.,]0$/, '')}</b>
              </p>
            </div>
            <div className={styles.login}>
              <button className={styles.loginBtn} onClick={handleLogin}>
                <a href="#"><p>{login?'Logout': 'Login' }</p></a>
              </button>
            </div>
        </div>
      </div>
    <div className={styles.profile} onClick={handleProfile}>
      <div className={styles.profileIcon}>
      <FontAwesomeIcon icon={faUser} className={styles.faUser} />
      <div className={styles.profiletextContainer}>
      <p className={styles.profiletext}>
        {!login ? 'You are Logged out' : 'You are Logged in'}
        </p>
      </div>
    </div>
      {
        profile &&(
          <div className={styles.profiledetails}>
            <ul>
              <li>
                <a href="#">
                <p>
                  {login ? 'Transaction History' : 'Register'}
                </p>
                </a>
              </li>
              <li>
                <a href="#">
                <p>
                  {login ? 'Logout' : 'Login'}
                </p>
                </a>
              </li>
            </ul>
      </div>
        )
      }
    </div>
    </div>
  )
}

export default topbar
