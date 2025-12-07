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

  // Mocked restaurant data inspired by iFood
  const restaurants = [
    {
      id: "1",
      name: "Pizza Hut",
      image: "https://via.placeholder.com/300x200?text=Pizza+Hut",
      rating: 4.5,
      deliveryTime: "30-40 min",
      category: "Pizza",
      priceRange: "$$",
    },
    {
      id: "2",
      name: "McDonald's",
      image: "https://via.placeholder.com/300x200?text=McDonald%27s",
      rating: 4.2,
      deliveryTime: "20-30 min",
      category: "Fast Food",
      priceRange: "$",
    },
    {
      id: "3",
      name: "Sushi Express",
      image: "https://via.placeholder.com/300x200?text=Sushi+Express",
      rating: 4.7,
      deliveryTime: "25-35 min",
      category: "Japanese",
      priceRange: "$$$",
    },
    {
      id: "4",
      name: "Burger King",
      image: "https://via.placeholder.com/300x200?text=Burger+King",
      rating: 4.3,
      deliveryTime: "15-25 min",
      category: "Burgers",
      priceRange: "$",
    },
    {
      id: "5",
      name: "Taco Bell",
      image: "https://via.placeholder.com/300x200?text=Taco+Bell",
      rating: 4.1,
      deliveryTime: "20-30 min",
      category: "Mexican",
      priceRange: "$",
    },
    {
      id: "6",
      name: "Starbucks",
      image: "https://via.placeholder.com/300x200?text=Starbucks",
      rating: 4.4,
      deliveryTime: "10-20 min",
      category: "Coffee",
      priceRange: "$$",
    },
  ];

  // Mocked categories
  const categories = [
    { id: "1", name: "Pizza", icon: "🍕" },
    { id: "2", name: "Burgers", icon: "🍔" },
    { id: "3", name: "Japanese", icon: "🍱" },
    { id: "4", name: "Mexican", icon: "🌮" },
    { id: "5", name: "Coffee", icon: "☕" },
    { id: "6", name: "Italian", icon: "🍝" },
    { id: "7", name: "Chinese", icon: "🥡" },
    { id: "8", name: "Desserts", icon: "🍰" },
  ];

  // Mocked promo cards
  const promos = [
    {
      id: "1",
      title: "Free Delivery",
      description: "On orders over $20",
      image: "https://via.placeholder.com/400x200?text=Free+Delivery",
    },
    {
      id: "2",
      title: "50% Off",
      description: "First order with code WELCOME",
      image: "https://via.placeholder.com/400x200?text=50%25+Off",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
        {/* Categories Section */}
        <section className="bg-white py-4 border-b">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="flex flex-col items-center justify-center min-w-[80px] p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mb-1">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Cards Section */}
        <section className="py-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promos.map((promo) => (
                <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={promo.image} alt={promo.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{promo.title}</h3>
                    <p className="text-gray-600">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white py-4 border-b">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium whitespace-nowrap">
                Free Delivery
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium whitespace-nowrap">
                Best Rated
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium whitespace-nowrap">
                Fast Delivery
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium whitespace-nowrap">
                Under $10
              </button>
            </div>
          </div>
        </section>

        {/* Restaurants Section */}
        <section className="py-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{restaurant.category}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {restaurant.rating}
                      </span>
                      <span className="text-gray-500">{restaurant.deliveryTime}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">{restaurant.priceRange}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-8 px-4">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
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
