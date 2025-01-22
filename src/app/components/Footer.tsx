'use client'
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div><a href="#">Privacy Policy</a></div>
      <div className={styles.footerlogo}><i className="fas fa-anchor"></i><h4>ZukooLogs</h4></div>
      <div><a href="#">Terms of Use</a></div>
    </div>
  )
}

export default Footer
