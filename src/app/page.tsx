import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Disclimer from './components/dashboard/home/Disclimer'
import ImportAnnouncement from './components/dashboard/home/ImportAnnouncement'
import ProductItems from './components/dashboard/home/ProductItems'
import SubItemsCollection from './components/dashboard/home/SubItemsCollection'
import LastOrder from './components/dashboard/home/LastOrder'

export default function Home() {
  return (
    <div className={styles.page}>
      <Disclimer/>
      <ImportAnnouncement/>
      <ProductItems/>
      <SubItemsCollection/>
      <LastOrder/>
    </div>
  );
}
