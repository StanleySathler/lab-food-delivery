import { http, HttpResponse, PathParams } from "msw";
import { restaurants } from "./database";
import { CartItem } from "../types";

// Simple in-memory cart for tests (no sessions)
const cart: CartItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 2,
  },
  {
    id: "2",
    name: "Chicken Wings",
    price: 8.99,
    quantity: 1,
  },
];

const getCart = () => cart;

export const handlers = [
  http.get("/api/restaurants", () => {
    return HttpResponse.json(restaurants);
  }),

  // GET cart
  http.get("/api/cart", () => {
    return HttpResponse.json(getCart());
  }),

  // POST add item
  http.post<PathParams, CartItem>("/api/cart", async ({ request }) => {
    const payload = await request.json();
    const c = getCart();

    const existing = c.find((i) => i.id === payload.id);
    if (existing) {
      existing.quantity = (existing.quantity || 0) + (payload.quantity || 1);
    } else {
      c.push({ ...payload });
    }

    return HttpResponse.json(c);
  }),

  // PUT update quantity
  http.put<PathParams, CartItem>("/api/cart", async ({ request }) => {
    const { id, quantity } = await request.json();
    const c = getCart();

    const idx = c.findIndex((i) => i.id === id);
    if (idx !== -1) {
      if (quantity <= 0) {
        c.splice(idx, 1);
      } else {
        c[idx].quantity = quantity;
      }
    }

    return HttpResponse.json(c);
  }),

  // DELETE remove item
  http.delete("/api/cart", async (req) => {
    const { id } = await (req as any).json();
    const c = getCart();

    const idx = c.findIndex((i) => i.id === id);
    if (idx !== -1) c.splice(idx, 1);

    return HttpResponse.json(c);
  }),
];
