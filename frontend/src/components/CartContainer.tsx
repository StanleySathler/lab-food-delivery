import React from 'react';
import Cart from './Cart';
import { useCartContext } from '../contexts/CartContext';
import { useRouter } from 'next/router';

const CartContainer: React.FC = () => {
  const { cartVisible, setCartVisible, getItems, updateQuantity, removeItem } = useCartContext();
  const router = useRouter();

  const handleContinue = () => {
    setCartVisible(false); // TODO: Need this?
    router.push('/checkout');
  };

  return (
    <Cart
      visible={cartVisible}
      onClose={() => setCartVisible(false)}
      onContinue={handleContinue}
      cartItems={getItems()}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  );
};

export default CartContainer;
