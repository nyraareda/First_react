import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { deleteProduct, getAllProducts } from '../../api/productApi';
import { ProductsTable } from '../../component/Day3/ProductsTable';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, getAllActions } from '../redux/productSlice';

export const Products = () => {

        const {products,isLoading,error} = useSelector(state=>state.productSlice)

        const dispatch = useDispatch()

        useEffect(()=>{
            dispatch(getAllActions())

        },[])

  const deleteHandle = async(productId)=>{
    dispatch(deleteAction(productId))

  }
  return (

    <div className='container'>
      {console.log("render products from with ToolKit")}
      <div><Link className='btn btn-success mb-2' to="/products/0/edit">Add New Product</Link></div>
      {isLoading && (<h1 className='alert alert-info'>Is Loading....</h1>)}

    {error ? <h2 className='alert alert-danger text-center m-auto'>Can't load the products</h2> : 
    <ProductsTable deleteHandle={deleteHandle} products={products}/>}
    </div>

  )

}


