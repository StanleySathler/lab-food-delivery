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
      <header className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto flex items-center gap-4 py-3 px-4">
          <div className="brand">
            <a href="#" className="text-amber-600 font-bold text-lg no-underline">FooDelivery</a>
          </div>

          <div className="flex-1">
            <input className="w-full px-3 py-2 rounded-md border border-gray-200" placeholder="Search for restaurants or items" />
          </div>

          <div className="flex items-center gap-2">
            <button className="text-left border border-gray-200 rounded-md px-4 py-2 min-w-[180px]">
              Address: 123 Example St
            </button>
            <button className="border border-gray-200 rounded-md px-3 py-2">Cart</button>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto mt-4 px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.map((product) => (
              <li key={product.id} className="bg-gray-50 p-3 rounded-lg border border-gray-100">{product.name}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
