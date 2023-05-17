import React, { useState } from 'react';
import { DisplayProducts } from '../api/products';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../Styles/Update.css";
// import { ToastContainer } from 'react-toastify';


const AllProducts = () => {
  // const navigate=useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const products = await DisplayProducts()
      setProducts(products)
    }
    getProducts();
  }, [])
  console.log(products)


  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <img style={{ height: "400px", }} src={product.picture} alt="" />
            {/* <button onClick={()=>navigate(`/players/${player.id}`)}>Add to Cart</button> */}
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts