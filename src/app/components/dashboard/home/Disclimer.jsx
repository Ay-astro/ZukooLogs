'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import styles from './disclimer.module.css'
function Disclimer() {
    return (
        <div className={styles.disclimerContainer}>
        <div className={styles.disclimer}>
            <div className={styles.disclimerDiv}>
            <h4 className={styles.disclimerTitle}>DISCLAIMER</h4>
            <p>We do not guarantee secondary sales and accounts sold here are not to be used for illegal activities, we are not responsible for problems caused by it</p>
            </div>
            <div className={styles.disclimerDiv}>
            <h4 className={styles.disclimerTitle}>USEFUL LINKS</h4>
            <ul>
                <li><a href="#">How to order for logs on Zukoologs.com</a></li>
                <li><a href="#">How to Deposit using FlutterWave(Bank Transfer) Option</a></li>
            </ul>
            </div>
            <div className={styles.disclimerDiv}>
            <h4 className={styles.disclimerTitle}>How to Make Complaint</h4>
            <p>Send The Login Details And Transaction Id</p>
            <p>Send A Video Evidence Of Error And Describe The Issue To Admin</p>
            </div>
            <p className={styles.warning}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                Note:- Problems Won't Be Attended To If You Don't Report Properly</p>
            <div className={styles.disclimerDiv}>
            <h4 className={styles.disclimerTitle}>Customer Care</h4>
            <ul className={styles.customercare}>
                <li><a href="#">
                <i className="fa-brands fa-whatsapp fa-xl"></i>
                    <span>Whatsapp</span></a></li>
                <li> <a href="#"><i className="fa-brands fa-whatsapp fa-xl"></i><span>Whatsapp Group</span></a></li>
                <li><a href="#"><i className="fa-brands fa-telegram fa-xl"></i><span>Telegram</span></a></li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Disclimer
