'use client'
import { createContext, useState } from "react"

import { productFullData, purchaseData } from "./components/dashboard/productdata"
const   IndexContext = createContext()
export function IndexProvider({children}) {
    const [loading, setLoading] = useState(true) 
    const[menue,setMenue]=useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [balance, setBalance] = useState(0)
    const [login, setLogin] = useState(false)
    const [profile, setProfile] = useState(false)
    const [products, setProducts] = useState(productFullData)
    const [productName, setProductName] = useState("")
    const [closeBuy, setCloseBuy] = useState(true)
    const [quantity, setQuantity] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [history, setHistory] = useState(purchaseData);
  
    // MANAGE PRODUCT STATE
    const [categories, setCategories] = useState([
        {id: 1, title: "Laptops", description: "All kinds of laptops.",categorie: "Electronics, Laptops",amount: "1500", product: "Electronics",country: 'USA', date: "2025-01-20", user: 'Astro',status: 'Pending' },
        {id: 2, title: "Phones", description: "Smartphones and feature phones.",categorie: "Clothing, Shoes", amount: "1000", product: "Clothing", country: 'USA', date: "2025-01-22",user: 'black',status: 'Pending'  },
        { id: 3,title: "Accessories", description: "Gadgets and device add-ons.",categorie: "Electronics, Phones", amount: "20", product: "Electronics", country: 'USA', date: "2025-01-23",user: 'Saad',status: 'Approved'  },
        {id: 4, title: "Men's Clothing", description: "Clothing and apparel for men.",categorie: "Electronics, Accessories",amount: "50", product: "Electronics",country: 'USA', date: "2025-01-25",user: 'Ys',status: 'Pending' },
        {id: 5, title: "Women's Clothing", description: "Clothing and apparel for women.",categorie: "Clothing, Men",amount: "100", product: "Clothing",country: 'USA', date: "2025-01-26",user: 'Hello',status: 'Approved' },
      ]);
      const [approval, setApproval] = useState([false])
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentCategory, setCurrentCategory] = useState(null);
      const [formData, setFormData] = useState({
        id: null,
        title: "",
        description: "",
        categories:"",
        amount: "",
        product: "",
        date: "",
        user:"user"
      });
    //   END OF MANAGE PRODUCT
    const [price, setPrice] = useState({
        price: 0,
        title:'',
        id: '',
    });
    // MANUAL PAYMENT STATE
    const [receipt, setReceipt] = useState(null);
    const [amount, setAmount] = useState("");
    //Edit Mode for Manage Product
    const [editProduct, setEditProduct] = useState(false)

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

    // MANAGE PRODUCT COMPONENT
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
  
      // Open modal for creating or editing
      const openModal = (category = null) => {
        if (category) {
          setFormData(category); // Pre-fill form for editing
          setCurrentCategory(category);
        } else {
          setFormData({id:null, title: "", categories:"",description: "",amount: "", product: "", date: ""});
          setCurrentCategory(null);
        }
        setIsModalOpen(true);
        setEditProduct(true)
        
      };
    
      // Close modal
      const closeModal = () => {
        setIsModalOpen(false);
        setFormData({id:null, title: "", categories:"",description: "",amount: "", product: "", date: ""});
        setCurrentCategory(null);
        setEditProduct(false)
      };
    
      // Handle form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        if (currentCategory) {
          // Update existing category
          setCategories((prev) =>
            prev.map((c) => (c.title === currentCategory.title ? formData : c))
          );
        } else {
          // Create new category
          setCategories((prev) => [...prev, formData]);
        }
        closeModal();
      };
    
      // Delete category
      // const handleDelete = (title) => {
      //   setCategories((prev) => prev.filter((c) => c.title !== title));
      // };
    













    return <IndexContext.Provider value={{
    setApproval,
    setProductName,
    setLoading,
    setCurrentCategory,
    setIsModalOpen,
    setCategories,
    handleMenue,
    setIsCollapsed,
    handleLogin,
    handleProfile,
    handleSubitems,
    handleClose,
    setQuantity,
    setFormData,
    setPrice,
    handlebuy,
    handleProcessBuy,
    handleInputChange,
    openModal,
    closeModal,
    handleSubmit,
    // handleDelete,
    setReceipt,
    setAmount,
    setLogin,
    approval,
    productName,
    formData,
    currentCategory,
    isModalOpen,
    categories,
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
    receipt,
    amount,
    loading,
    editProduct
    }} >
        {children}
    </IndexContext.Provider>
}

export default IndexContext