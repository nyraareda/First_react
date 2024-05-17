import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteProduct, getAllProducts } from '../../api/productApi';

export const ProductsDb = () => {

  const baseUrl ='http://localhost:3005/products';
  const[products,setProduct]=useState([])
  useEffect(()=>{
    const fetchData= async()=>{ 
      try{
        const response = await getAllProducts()
        // console.log(response.data);
        setProduct(response.data);
    }
      catch(error){
        console.log(error);  
    }
    }
      fetchData();
  },[])

  const deleteHandle = async(productId)=>{

    const response = await deleteProduct(productId)
    const newArr= setProduct(products.filter(product=> product.id != productId));
  }
  return (
    <div className='container'>
      <div><Link to="/product/0/edit">Add New Product</Link></div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {products && products.map(product => {
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>
        <Link to={`/product/${product.id}`}>Show Product</Link>
      </td>
      <td>
        <Link to={`/product/${product.id}/edit`}>Edit Product</Link>
      </td>
      <td>
        <Link to='/product' onClick={()=>deleteHandle(product.id)} >Delete Product</Link>
      </td>
    </tr>
  );
})}
      </tbody>
    </Table>
    </div>
  )
}
