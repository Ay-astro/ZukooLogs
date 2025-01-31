'use client'
import { useState, useEffect } from "react";
import styles from './createandedit.module.css'

function CreateOrEditItem({ mode = "create", existingItem }) {
  const [selectedProduct, setSelectedProduct] = useState(existingItem?.product || "");
  const [selectedCategory, setSelectedCategory] = useState(existingItem?.category || "");
  const [details, setDetails] = useState(existingItem?.details || "");

  const [products, setProducts] = useState([
    { id: 1, name: "Electronics", categories: ["Laptops", "Phones", "Accessories"] },
    { id: 2, name: "Clothing", categories: ["Men", "Women", "Kids"] },
  ]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Dynamically set categories based on selected product
    const product = products.find((p) => p.name === selectedProduct);
    setCategories(product ? product.categories : []);
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      product: selectedProduct,
      category: selectedCategory,
      details,
    };

    if (mode === "create") {
      // Create new product
      const newProducts = [...products];
      const existingProduct = newProducts.find((p) => p.name === selectedProduct);

      if (existingProduct) {
        // Add new category to existing product
        if (!existingProduct.categories.includes(selectedCategory)) {
          existingProduct.categories.push(selectedCategory);
        }
      } else {
        // Add new product
        newProducts.push({
          id: newProducts.length + 1,
          name: selectedProduct,
          categories: [selectedCategory],
        });
      }

      setProducts(newProducts);
      console.log("Product created:", item);
    } else if (mode === "edit") {
      // Update existing item
      const updatedProducts = products.map((p) =>
        p.name === existingItem.product
          ? {
              ...p,
              categories: p.categories.map((c) =>
                c === existingItem.category ? selectedCategory : c
              ),
            }
          : p
      );

      setProducts(updatedProducts);
      console.log("Product updated:", item);
    }

    // Reset form fields
    setSelectedProduct("");
    setSelectedCategory("");
    setDetails("");
  };

  return (
    <div className={styles.container}>
      <h1>{mode === "create" ? "Create Item" : "Edit Item"}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Select Product:</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
            className={styles.input}
          >
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Select Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
            className={styles.input}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={styles.input}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          {mode === "create" ? "Create Item" : "Update Item"}
        </button>
      </form>
    </div>
  );
}

export default CreateOrEditItem