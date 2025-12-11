import React from 'react';
import Cart from './Cart';
import { useCartContext } from '../contexts/CartContext';

const CartContainer: React.FC = () => {
  const { cartVisible, setCartVisible, getItems, updateQuantity, removeItem } = useCartContext();

  return (
    <Cart
      visible={cartVisible}
      onClose={() => setCartVisible(false)}
      cartItems={getItems()}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  );
};

export default CartContainer;
