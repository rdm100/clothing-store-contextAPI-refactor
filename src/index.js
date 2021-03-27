import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import CartProvider from '../src/providers/cart/cart-provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <Router>  
        <PersistGate persistor={persistor}>
          <React.StrictMode>  
            <App />
          </React.StrictMode>
        </PersistGate>
      </Router>
    </Provider>
  </CartProvider>, 
  document.getElementById('root')
);