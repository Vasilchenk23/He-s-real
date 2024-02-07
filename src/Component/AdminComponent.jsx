import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import '../../src/App.css';



const AdminComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProducts(savedProducts);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
    }, [products]);
  
    const handleProductAdded = (newProductData) => {
      setProducts([...products, newProductData]);
    };
    return(
        <>
        <AddProductForm onProductAdded={handleProductAdded} />
        </>
    );
}

export default AdminComponent