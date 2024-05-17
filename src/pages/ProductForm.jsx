import React, { useEffect, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { addNewProduct, getById, updateProduct } from '../api/productApi'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductForm = () => {

  const {id} = useParams();

  const navigate = useNavigate();
  let[product,setProduct]= useState({
    name:"",
    category:""
  })
  const changeHandler = (e)=>{
      setProduct({
        ...product,
        [e.target.name]:e.target.value
      })
  }
  useEffect(()=>{
    if(id !=0){
      const fetchData = async ()=>{
      try{
        const response = await getById(id);
        setProduct(response.data)
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
    }
  },[])
  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      if(id==0){
        const response = await addNewProduct(product)
        navigate('/product')
      }else{
        const response = await updateProduct(product,id)
        navigate('/product')
      }
      
    }catch(error){
      console.log(error);
    }

  }

  
  return (
    
    <>
    <div className="container">
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" name="name" placeholder="Add Product Name" value={product.name} onChange={changeHandler}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Product Category</Form.Label>
      <Form.Control type="text" name="category" value={product.category} onChange={changeHandler} placeholder="Add Category" />
    </Form.Group>
    <Button variant="primary" type="submit">
      { id == 0 ? "Add New Product" : "Update the Product"}
    </Button>
  </Form>
  </div>
  </>
  )
}
