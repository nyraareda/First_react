import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addNewProduct, getById, updateProduct } from '../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewAction, updateAction } from '../reduxToolKit/redux/productSlice';

export const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    category: ""
  });

  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value.length < 3) {
        setNameError('Product name should not be less than 3 characters.');
      } else {
        setNameError('');
      }
    }

    if (name === 'category') {
      if (value.length < 5) {
        setCategoryError('Product category should be at least 5 characters.');
      } else {
        setCategoryError('');
      }
    }

    setProduct({
      ...product,
      [name]: value
    });
  }

  useEffect(() => {
    if (id !== '0') {
      const fetchData = async () => {
        try {
          const response = await getById(id);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (product.name.length < 3) {
      setNameError('Product name should not be less than 3 characters.');
      return;
    }

    if (product.category.length < 5) {
      setCategoryError('Product category should be at least 5 characters.');
      return;
    }

    try {
      if (id === '0') {
      dispatch(addNewAction(product)).then(()=>{
        navigate('/products');
      })
      
    } else {
      const dd=dispatch(updateAction({product,id})).then(()=>{
        // console.log(dd);
        navigate('/products');
      })
    }
      // if (id === '0') {
      //   const response = await addNewProduct(product);
      //   navigate('/product');
      // } else {
      //   const response = await updateProduct(product, id);
      //   navigate('/product');
      // }

    } catch (error) {
      console.log(error);
    }
  }
  const handleCancel = () => {
    navigate('/products'); // Redirect to the product page
  }

  return (
    <div className="container">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Add Product Name" value={product.name} onChange={changeHandler} />
          {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Category</Form.Label>
          <Form.Control type="text" name="category" value={product.category} onChange={changeHandler} placeholder="Add Category" />
          {categoryError && <Form.Text className="text-danger">{categoryError}</Form.Text>}
        </Form.Group>
        <Button className='mx-2' variant="success" type="submit">
          {id === '0' ? "Add New Product" : "Update the Product"}
        </Button>
        <Button onClick={handleCancel} variant="secondary" type="submit">
          Cancel
          </Button>
      </Form>
    </div>
  );
};
