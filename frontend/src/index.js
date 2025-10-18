import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import HomePage from './Landingpage/HomePage/Hero';
import { ThemeProvider } from "./themeContext";
import Cart from "./Landingpage/Cart/Cart";
import { BrowserRouter,Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/cart' element={<Cart/>} />
    <Route path='/' element={<HomePage/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  </ThemeProvider>
);
reportWebVitals();
