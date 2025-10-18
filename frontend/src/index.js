import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import HomePage from './Landingpage/HomePage/HomePage';
import { ThemeProvider } from "./themeContext";

import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <BrowserRouter>
    <Header/>
    <HomePage/>
    <Footer/>
  </BrowserRouter>
  </ThemeProvider>
);
reportWebVitals();
