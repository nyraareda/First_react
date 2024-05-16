import React from 'react'
import { Table } from 'react-bootstrap'
export const ProductTable = ({products , setProduct}) => {

    const handlerRemove = (id) => {
        setProduct(products.filter(product => product.id !== id));
      };

  return (
    <> 
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product shipping</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product,index)=>{
        return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.shipping}</td>
                <td><button onClick={() => handlerRemove(product.id)} className='btn btn-danger'>Remove</button></td>
            </tr>
        )
      })}
    </tbody>
  </Table>
  </>
  )
}
