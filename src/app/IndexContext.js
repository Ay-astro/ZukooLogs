'use client'
import { createContext, useState } from "react"

import { productFullData, purchaseData, categoriesData,formDataValue, priceValue } from "./components/dashboard/productdata"
const   IndexContext = createContext()
export function IndexProvider({children}) {


    const [loading, setLoading] = useState(true) 
    const[menue,setMenue]=useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [balance, setBalance] = useState(0)
    const [login, setLogin] = useState(false)
    const [profile, setProfile] = useState(false)
    const [products, setProducts] = useState(productFullData)

    const [product, setProduct] = useState(productFullData)
    const [activeDropdown, setActiveDropdown] = useState(null);

    const [productName, setProductName] = useState("")
    const [closeBuy, setCloseBuy] = useState(true)
    const [quantity, setQuantity] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [history, setHistory] = useState(purchaseData);
    const [isAdmin, setAdmin ] = useState(true)
  
    // MANAGE PRODUCT STATE
    const [categories, setCategories] = useState(categoriesData);
      const [approval, setApproval] = useState([false])
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentCategory, setCurrentCategory] = useState(null);
      const [formData, setFormData] = useState(formDataValue);
    //   END OF MANAGE PRODUCT
    const [price, setPrice] = useState(priceValue);
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
      const handleDelete = (title) => {
        setCategories((prev) => prev.filter((c) => c.title !== title));
      };
    
// Manual Payment

const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(accountDetails.accountNumber);
};

const handleReceiptChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setReceipt(file);
  }
};

const handleSubmitManual = (e) => {
  e.preventDefault();
  if (!receipt || !amount) {
    alert("Please upload a receipt and enter the amount.");
    return;
  }
};

// side Bar toggle

const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
};

const toggleDropdown = (index) => {
setActiveDropdown(activeDropdown === index ? null : index);
};










    return <IndexContext.Provider value={{
    setApproval,
    setActiveDropdown,
    toggleDropdown,
    toggleSidebar,
    setAdmin,
    setProductName,
    setProduct,
    setLoading,
    setCurrentCategory,
    setIsModalOpen,
    setCategories,
    handleCopyToClipboard,
    handleMenue,
    handleReceiptChange,
    setIsCollapsed,
    handleLogin,
    handleSubmitManual,
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
    handleDelete,
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
    editProduct,
    isAdmin,
    product,
    activeDropdown
    }} >
        {children}
    </IndexContext.Provider>
}

export default IndexContext