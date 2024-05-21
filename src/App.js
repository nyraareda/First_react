import logo from './logo.svg';
import './App.css';
import { MyNav } from './component/myNav';
import { Slider } from './component/Slider';
import { Header } from './component/Header';
// import {Products} from './component/Products';
import {Products} from './reduxToolKit/component/Products';
import Footer from './component/Footer';
import { ProductForm } from './pages/ProductForm';
import { ProductTable } from './component/forms/ProductTable';
import { Product } from './component/forms/Product';
import { Counter } from './component/Counter';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import { SharedLayout } from './layouts/sharedLayout';
import { Aboutt } from "./pages/Aboutt";
import { NotFound } from './pages/NotFound';
import { ProductsDb } from './component/Day3/ProductsDb';
import { ProductDetails } from './pages/ProductDetails';
import { getAllProducts } from './api/productApi';
import { ErrorComponent } from './component/Day3/ErrorComponent';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path='/' element={<SharedLayout/>}>
      <Route path='products'
     errorElement={<ErrorComponent/>}
      loader={getAllProducts}
      element={<Products/>
    }/>
    <Route path='products/:id' element={<ProductDetails/>}/>
    <Route path='products/:id/edit' element={<ProductForm/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>
    </>
  )
  )
  return (
    <>

    <RouterProvider router={router}/>
    {/* <MyNav/>
    <Slider/>
    <Header/>
    <Counter/>
    <Product/>
    <Products/>

    <Footer/> */}
    </>
  );
}

export default App;


//<>
    // <Route path='/' element={<SharedLayout/>} 
    // loader={getAllProducts} id='sharedLayout' 
    // errorElement={<ErrorComponent/>}>
    //   <Route index element={<Products/>}/>
    //   <Route path='about' element={<Aboutt/>}/>
    //   <Route path='product'
    //   loader={getAllProducts}
    //   element={<ProductsDb/>}
    //   />
    //   <Route path='product/:id' element={<ProductDetails/>}/>
    //   <Route path='product/:id/edit' element={<ProductForm/>}/>
    // </Route>
    // <Route path='productss'
    //   loader={getAllProducts}
    //   element={<Products/>}
    //   />
    // <Route path='*' element={<NotFound/>}></Route>
    // </>
