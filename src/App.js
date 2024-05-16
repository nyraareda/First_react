import logo from './logo.svg';
import './App.css';
import { MyNav } from './component/myNav';
import { Slider } from './component/Slider';
import { Header } from './component/Header';
import {Products} from './component/Products';
import Footer from './component/Footer';
import { ProductForm } from './component/forms/ProductForm';
import { ProductTable } from './component/forms/ProductTable';
import { Product } from './component/forms/Product';


function App() {
  return (
    <>
    <MyNav/>
    <Slider/>
    <Header/>
    <Product/>
    {/* <Products/> */}

    <Footer/>
    </>
  );
}

export default App;
