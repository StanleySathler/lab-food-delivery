import React, { ReactNode } from 'react';
import { CartProvider } from '../../contexts/CartContext';

type Props = {
  children?: ReactNode;
};

const TestAppContainer = ({ children }: Props) => {
  return <CartProvider>{children}</CartProvider>;
};

export default TestAppContainer;
