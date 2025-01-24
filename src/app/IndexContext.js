'use client'
import { createContext, useState } from "react"

import { productFullData, purchaseData } from "./components/dashboard/productdata"
const   IndexContext = createContext()
export function IndexProvider({children}) {
    const[menue,setMenue]=useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [balance, setBalance] = useState(0)
    const [login, setLogin] = useState(false)
    const [profile, setProfile] = useState(false)
    const [products, setProducts] = useState(productFullData)
    const [closeBuy, setCloseBuy] = useState(true)
    const [quantity, setQuantity] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [history, setHistory] = useState(purchaseData);

    const [price, setPrice] = useState({
        price: 0,
        title:'',
        id: '',
    });

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

    const handleClose = () => {
        setCloseBuy(true)
        setQuantity('')
        setInputValue('')
      };
    const handlebuy =(item,id)=>{
        setPrice({
            id: id,
            price: item.price,
            title: item.title,
        });
        setInputValue(item.title)
        setCloseBuy(false)
    }
    const handleProcessBuy =(item)=>{
        setPurchase({
            item,
            ...purchase
            
        })
        setCloseBuy(true)
        setQuantity('')
        setInputValue('')
        console.log(purchase)
    }

    return <IndexContext.Provider value={{
    handleMenue,
    setIsCollapsed,
    handleLogin,
    handleProfile,
    handleSubitems,
    handleClose,
    setQuantity,
    setPrice,
    handlebuy,
    handleProcessBuy,
    price,
    quantity,
    closeBuy,
    products,
    isCollapsed,
    menue,
    balance,
    login,
    profile,
    inputValue,
    history,
    }} >
        {children}
    </IndexContext.Provider>
}

export default IndexContext