import React from 'react';
import Cart from './Cart';
import { useCartContext } from '../contexts/CartContext';

const CartContainer: React.FC = () => {
  const { cartRef, cartVisible, setCartVisible, getItems, updateQuantity, removeItem } = useCartContext();

  return (
    <Cart
      ref={cartRef}
      visible={cartVisible}
      onClose={() => setCartVisible(false)}
      cartItems={getItems()}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  );
};

export default CartContainer;
