import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
export const ProductsTable = ({deleteHandle,products}) => {
  return (
    <div><Table striped bordered hover>
        {console.log("render products table")}
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