import type { NextPage } from "next";
import { useEffect, useState } from "react";

// on prod, URL should be `api.lab-food-delivery.store`
const fetchProducts = async () => {
  try {
    const res = await fetch(
      (process.env.NEXT_PUBLIC_API_URL || "") + "/product"
    );
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

const Home: NextPage = () => {
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);

  const loadProducts = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
