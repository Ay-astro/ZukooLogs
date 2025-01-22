'use client'
import { createContext, useState } from "react"
import { productFullData } from "./components/dashboard/productdata"
const   IndexContext = createContext()
export function IndexProvider({children}) {
    const[menue,setMenue]=useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [balance, setBalance] = useState(0)
    const [login, setLogin] = useState(false)
    const [profile, setProfile] = useState(false)
    const [products, setProducts] = useState(productFullData)
    const handleProfile=()=>{
        setProfile(!profile)
    }
    const handleMenue= () =>{
        setMenue(!menue)
        setIsCollapsed(!isCollapsed);
    }
    const handleSubitems =(id) =>{
        let items = productFullData.filter((item)=> item.id == id);
        setProducts(items)
    }

    const handleLogin=()=>{
        setLogin(!login)
    }

    return <IndexContext.Provider value={{
    handleMenue,
    setIsCollapsed,
    handleLogin,
    handleProfile,
    handleSubitems,
    products,
    isCollapsed,
    menue,
    balance,
    login,
    profile
    }} >
        {children}
    </IndexContext.Provider>
}

export default IndexContext