import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import './court-dropdown.scss';
import { CartContext } from '../../providers/cart/cart-provider';

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?   
          cartItems.map(cartItem => (
          <CartItem key={cartItem} item={cartItem} />
        )) 
        :
        <span className='empty-message'>Your cart is empty</span>
      }
      </div>
        <CustomButton onClick={() => {
          history.push('/checkout');
          toggleHidden()
        }}>
        GO TO CHECKOUT
        </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);