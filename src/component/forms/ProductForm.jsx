import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export const ProductForm = ({ products, setProduct }) => {

  let [formData, setFormData] = useState({
    name:'',
    price:'',
    shipping: ''
  });

  let [nameError, setNameError] = useState('');
  let [priceError, setPriceError] = useState('');

  const changeHandler = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'name') {
      if (value.length < 3) {
        setNameError('Product name should not be less than 3 digits.');
      } else {
        setNameError('');
      }
    }

    if (name === 'price') {
      if (parseFloat(value) < 10) {
        setPriceError('Product price should be at least 10.');
      } else {
        setPriceError('');
      }
    }

    if (name === 'shipping') {
      setFormData({
        ...formData,
        shipping: checked ? 'Free Shipping' : 'Not Free Shipping'
      });
      return;
    }

    setFormData({
      ...formData,
      [name] : value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.name.length < 3) {
      setNameError('Product name should not be less than 3 digits.');
      return;
    }

    if (parseFloat(formData.price) < 10) {
      setPriceError('Product price should be at least 10.');
      return;
    }
    formData.shipping = e.target.elements.shipping.checked ? 'Free Shipping' : 'Not Free Shipping';


    setProduct([...products, formData]);
    setFormData({
      name:'',
      price:'',
      shipping: ''
    });
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name='name' value={formData.name} onChange={changeHandler} placeholder="Enter the product name" />
          {nameError && <Alert variant="danger">{nameError}</Alert>}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" name='price' value={formData.price} onChange={changeHandler} placeholder="Product Price" />
          {priceError && <Alert variant="danger">{priceError}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Free Shipping" name='shipping' onChange={changeHandler} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
