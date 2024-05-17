import axios from "axios";
import { Product } from "../component/forms/Product";

const baseUrl='http://localhost:3005/products';

const getAllProducts =()=> axios.get(baseUrl);

const getById = (productId) => axios.get(`${baseUrl}/${productId}`);

const updateProduct = (product,productId) => axios.put(`${baseUrl}/${productId}`,product);

const addNewProduct = (product) => axios.post(baseUrl,product);

const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);

export {
    getAllProducts,
    getById,
    updateProduct,
    deleteProduct,
    addNewProduct
}