import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getById } from '../api/productApi';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const [product,setProduct] = useState({});

  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await getById(id);
        setProduct(response.data)
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[])

  
  return (
    <>
    <div className="container">
    <h4 className='text-center m-auto my-4'>Product Details</h4>
    <Table striped bordered hover>
    <thead>
      <tr>
      <th>ID</th>
          <th>Product Name</th>
          <th>Product Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
      </tr>
    </tbody>
    
  </Table></div>
  </>
  )
}
