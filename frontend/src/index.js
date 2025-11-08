import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import HomePage from './Landingpage/HomePage/Hero';
import { ThemeProvider } from "./themeContext";
import Cart from "./Landingpage/Cart/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./Landingpage/SignUp/SignUp";
import WishList from './Landingpage/Wishlist/Wishlist';
import LogIn from './Landingpage/LogIn/LogIn';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/WishList' element={<WishList />} />
          <Route path='/LogIn' element={<LogIn />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();

export default App;