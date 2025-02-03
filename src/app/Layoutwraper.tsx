// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import {ToastContainer} from 'react-toastify';
import Sidebar from "./components/dashboard/Sidebar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import BuyStock from "./components/dashboard/home/BuyStock"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes where Topbar and Footer should be hidden
  const excludePaths = ["/login", "/signup"];
  const shouldShowHeaderFooter = !excludePaths.includes(pathname);
  return (
    <>
    <main className='Main' >
    {shouldShowHeaderFooter && <Sidebar/>}
    <div className={`main-content ${!shouldShowHeaderFooter ? 'loginMargin': ''}`}>
      {shouldShowHeaderFooter && <Topbar/>}
      {children}
      {shouldShowHeaderFooter && <Footer />}
    </div>
    <BuyStock/>
    <ToastContainer  
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </main>
    </>
  );
}
