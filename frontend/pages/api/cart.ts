// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// In-memory storage for cart data: sessionId -> CartItem[]
const cartStorage = new Map<string, CartItem[]>();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sessionId = req.headers['x-session-id'] as string;

  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID required' });
  }

  switch (req.method) {
    case 'GET':
      // Get cart for session
      const cart = cartStorage.get(sessionId) || [];
      return res.status(200).json(cart);

    case 'POST':
      // Add item to cart
      const newItem: CartItem = req.body;
      const currentCart = cartStorage.get(sessionId) || [];

      // Check if item already exists
      const existingIndex = currentCart.findIndex(item => item.id === newItem.id);
      if (existingIndex >= 0) {
        currentCart[existingIndex].quantity += newItem.quantity;
      } else {
        currentCart.push(newItem);
      }

      cartStorage.set(sessionId, currentCart);
      return res.status(200).json(currentCart);

    case 'PUT':
      // Update item quantity
      const { id, quantity }: { id: string; quantity: number } = req.body;
      const cartToUpdate = cartStorage.get(sessionId) || [];
      const itemIndex = cartToUpdate.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        if (quantity <= 0) {
          cartToUpdate.splice(itemIndex, 1);
        } else {
          cartToUpdate[itemIndex].quantity = quantity;
        }
        cartStorage.set(sessionId, cartToUpdate);
      }

      return res.status(200).json(cartToUpdate);

    case 'DELETE':
      // Remove item from cart
      const itemIdToDelete = req.body.id;
      const cartToDeleteFrom = cartStorage.get(sessionId) || [];
      const filteredCart = cartToDeleteFrom.filter(item => item.id !== itemIdToDelete);
      cartStorage.set(sessionId, filteredCart);
      return res.status(200).json(filteredCart);

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).json({ error: 'Method not allowed' });
  }
}