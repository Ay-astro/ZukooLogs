import spinner from '@/app/loadingpage.gif'
import Image from "next/image";
import styles from './spinner.module.css'


function Spinner() {
  return (
      <div className={styles.loadingPage} >
        <Image src={spinner} alt="Loading" className={styles.spinner} />
    </div>
  )
}



export default Spinner
