import React, { useState } from 'react'
import { ProductForm } from './ProductForm'
import { ProductTable } from './ProductTable'

export const Product = () => {
  let [products,setProduct] = useState([
    {
      id:'1',
      name:'Waffle',
      shipping:'Free shipping',
      price:'15'
    }
  ])
  return (
    <>
    <div className="container mt-5 mx-auto p-4">
    <ProductForm products={products} setProduct={setProduct}/>
    <ProductTable products={products} setProduct={setProduct}/>
    </div>
    </>
  )
}
