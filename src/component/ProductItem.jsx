import React from 'react'
import "../css/products.css"
export function ProductItem(a) {
  return (
    <>
        <div className="col-sm-4 col-md-3">
        <div className="card">
        <img src={a.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{a.title}</h5>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Quantity:{a.quantity}</li>
    <li className="list-group-item">Price:{a.price}</li>
  </ul>
      <a href="#" className="btn btn-primary">Add To Cart</a>
    </div>
    </div>
  </div>
  </>
  )
}
