import { useRef, useState, useEffect } from "react";
import { CartItem, Product } from "../types";
import { getSessionId } from "../utils/session";

export const useCart = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const id = getSessionId();
    setSessionId(id);
    // Load cart from API
    fetchCart(id);
  }, []);

  const fetchCart = async (sid: string) => {
    if (!sid) return;
    try {
      const response = await fetch("/api/cart", {
        headers: {
          "x-session-id": sid,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  const addToCart = async (product: Product) => {
    if (!sessionId) return;

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": sessionId,
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        const updatedCart = await response.json();
        setCartItems(updatedCart);
        setCartVisible(true);
      }
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (!sessionId) return;

    try {
      const response = await fetch("/api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": sessionId,
        },
        body: JSON.stringify({ id, quantity }),
      });

      if (response.ok) {
        const updatedCart = await response.json();
        setCartItems(updatedCart);
      }
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const removeItem = async (id: string) => {
    if (!sessionId) return;

    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": sessionId,
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const updatedCart = await response.json();
        setCartItems(updatedCart);
      }
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    }
  };

  const getItems = () => cartItems;

  return {
    cartVisible,
    setCartVisible,
    addToCart,
    updateQuantity,
    removeItem,
    getItems,
  };
};
