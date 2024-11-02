import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import SecureLS from 'secure-ls';

function EditProduct() {
    const { productID } = useParams();
    const[values,setValues] = useState({
      productID: '',
      productName: '',
      quantity: '',
      productPrice: '',
      description: '',
  
  
    })

    const navigate = useNavigate();
    const ls = new SecureLS({ encodingType: 'aes' });

    const handleChanges = (e)=>{
      setValues({...values, [e.target.name]:e.target.value})
    }
    useEffect(() => {
        const existingProducts = ls.get('products') || [];
        const productToEdit = existingProducts.find(product => product.productID === productID);
        
        if (productToEdit) {
          setValues(productToEdit); 
        }
      }, [productID]);

    const handleSubmit = (e)=>{
      e.preventDefault()
      const existingProducts = ls.get('products') || [];
      const updatedProducts = existingProducts.map(product =>
        product.productID === productID ? values : product
      );
      ls.set('products', updatedProducts);
      navigate('/');
    }
    const resetInfo=() =>{
      setValues({productID: '', productName: '', quantity:'', productPrice:'',description:'',})
    }
    return (
      <div className="container">
          <h1> Products</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor="productID" >Product ID</label>
              <input type="text" placeholder='Enter Product ID number'name='productID' 
               onChange={(e)=> handleChanges(e)} required value={values.productID} disabled/>
  
              <label htmlFor="productName" >Product Name</label>
              <input type="text" placeholder='Enter Product Name' name='productName'
              onChange={(e)=> handleChanges(e)} required value={values.productName}/>
  
              <label htmlFor="quantity" >Quantity</label>
              <input type="text" placeholder='Enter product quantity' name='quantity'
                onChange={(e)=> handleChanges(e)} required value={values.quantity}/>
  
              <label htmlFor="productPrice" >Price(in USD)</label>
              <input type="text" placeholder='Enter Product Price' name='productPrice'
              onChange={(e)=> handleChanges(e)}required value={values.productPrice}/>
  
              <label htmlFor="productDescript" >Description</label>
              <textarea name="description" rows="10" placeholder='Enter Description'
              onChange={(e)=> handleChanges(e)}required value={values.description}/>
  
              <button class="button2" type="button" onClick={resetInfo}>Reset</button>
              <button class="button1" type="submit">Save Changes</button>
  
          </form>
        
      </div>
    );
  }
  export default EditProduct;
  