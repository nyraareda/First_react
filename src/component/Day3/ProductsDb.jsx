import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { deleteProduct, getAllProducts } from '../../api/productApi';
import { ProductsTable } from './ProductsTable';

export const ProductsDb = () => {

  const baseUrl ='http://localhost:3005/products';
  const {data} = useLoaderData()
  console.log(data);

  //using loader component
  const commonData = useRouteLoaderData('sharedLayout');
  console.log(commonData);
  
  const[products,setProduct]=useState(data)
  const[error,setError]=useState(false)


  const deleteHandle = async(productId)=>{

    const response = await deleteProduct(productId)
    const newArr= setProduct(products.filter(product=> product.id != productId));
  }
  return (

    <div className='container'>
      {console.log("render products")}
      <div><Link to="/product/0/edit">Add New Product</Link></div>
    {error ? (<h2 className='alert alert-danger text-center m-auto'>Can't load the products</h2>) : (<ProductsTable deleteHandle={deleteHandle} products={products}/>)}
    </div>

  )

}

// useEffect(()=>{
  //   const fetchData= async()=>{ 
  //     try{
  //       const response = await getAllProducts()
  //       // console.log(response.data);
  //       setProduct(response.data);
  //   }
  //     catch(error){
  //       setError(true)
  //       console.log(error);  
  //   }
  //   }
  //     fetchData();
  // },[])

