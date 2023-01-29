import type { NextPage } from "next";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  try {
    const a = await fetch("http://localhost:3000/product");
    const d = await a.json();
    return d;
  } catch (e) {
    console.log(e);
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
