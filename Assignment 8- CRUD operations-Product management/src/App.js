import './App.css';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import SecureLS from 'secure-ls';

function App(){

  const columns =[
    {
      name: 'Product ID',
      selector:row =>row.productID
    },
    {
      name: 'Name',
      selector:row =>row.productName
    },
    {
      name: 'Quantity',
      selector:row =>row.quantity
    },
    {
      name: 'Price',
      selector:row =>row.productPrice
    },
    {
      name: 'Description',
      selector:row =>row.description
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Link to={`/Update/${row.productID}`}>
            <button class="button3">Update</button>
          </Link>
          <button class="button4" onClick={e=> handleDeletion(row.productID)}>Delete</button>
        </div>
      ),
    },

  ];
    const [products, setProducts] = useState([]);
    const ls = new SecureLS({ encodingType: 'aes' });
  

  useEffect(()=>{
      const storedData = ls.get('products');
      if(storedData){
        setProducts(storedData);
        
      }

  }, []);

  return(
    <div >
      

      <DataTable
       columns={columns}
       data ={products}
       >
     
     

    </DataTable> 
    <Link to="/AddProduct">
      <button class="button1">Create </button>
      </Link>


    
    </div>
  );
  function handleDeletion(productID){
    window.confirm("Are you sure you want to delete the item?")
    const existingProducts = ls.get('products') || [];
    const updatedProducts = existingProducts.filter(product => product.productID !== productID);
    ls.set('products',updatedProducts);
    setProducts(updatedProducts);
};
  
  }

 
export default App;

