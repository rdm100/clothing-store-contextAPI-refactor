import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import CartProvider from '../src/providers/cart/cart-provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
    <Router>  
      <React.StrictMode>  
        <App />
      </React.StrictMode>
    </Router>
  </CartProvider>, 
  document.getElementById('root')
);