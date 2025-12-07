import { useRef, useState } from "react";
import { CartRef } from "../components/Cart";

export const useCart = () => {
  const cartRef = useRef<CartRef>(null);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product: any) => {
    cartRef.current?.addItem(product);
    setCartVisible(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    cartRef.current?.updateQuantity(id, quantity);
  };

  const removeItem = (id: string) => {
    cartRef.current?.removeItem(id);
  };

  const getItems = () => {
    return cartRef.current?.getItems() || [];
  };

  return {
    cartRef,
    cartVisible,
    setCartVisible,
    addToCart,
    updateQuantity,
    removeItem,
    getItems,
  };
};
