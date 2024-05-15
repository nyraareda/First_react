import logo from './logo.svg';
import './App.css';
import { MyNav } from './component/myNav';
import { Slider } from './component/Slider';
import { Header } from './component/Header';
import {Products} from './component/Products';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <MyNav/>
    <Slider/>
    <Header/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App;
