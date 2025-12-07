import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Pizza_Hut_international_logo_2014.svg",
      rating: 4.5,
      deliveryTime: "30-40 min",
      category: "Pizza",
      priceRange: "$$",
    },
    {
      id: "2",
      name: "McDonald's",
      image: "https://via.placeholder.com/300x200?text=McDonald%27s",
      logo: "https://www.citypng.com/public/uploads/preview/hd-mcdonalds-red-round-circular-circle-logo-icon-png-image-7017516947898359qtpcakiqi.png",
      rating: 4.2,
      deliveryTime: "20-30 min",
      category: "Fast Food",
      priceRange: "$",
    },
    {
      id: "3",
      name: "Sushi Express",
      image: "https://via.placeholder.com/300x200?text=Sushi+Express",
      logo: "https://cdn.brandfetch.io/idOiAQjlV_/w/1200/h/1200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761698980188",
      rating: 4.7,
      deliveryTime: "25-35 min",
      category: "Japanese",
      priceRange: "$$$",
    },
    {
      id: "4",
      name: "Burger King",
      image: "https://via.placeholder.com/300x200?text=Burger+King",
      logo: "https://banner2.cleanpng.com/20180618/sea/kisspng-hamburger-whopper-burger-king-south-africa-restaur-burger-king-logo-5b2794cb501678.2286330115293206513281.jpg",
      rating: 4.3,
      deliveryTime: "15-25 min",
      category: "Burgers",
      priceRange: "$",
    },
    // Shuffled duplicates
    {
      id: "5",
      name: "Burger King",
      image: "https://via.placeholder.com/300x200?text=Burger+King",
      logo: "https://banner2.cleanpng.com/20180618/sea/kisspng-hamburger-whopper-burger-king-south-africa-restaur-burger-king-logo-5b2794cb501678.2286330115293206513281.jpg",
      rating: 4.3,
      deliveryTime: "15-25 min",
      category: "Burgers",
      priceRange: "$",
    },
    {
      id: "6",
      name: "Sushi Express",
      image: "https://via.placeholder.com/300x200?text=Sushi+Express",
      logo: "https://cdn.brandfetch.io/idOiAQjlV_/w/1200/h/1200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761698980188",
      rating: 4.7,
      deliveryTime: "25-35 min",
      category: "Japanese",
      priceRange: "$$$",
    },
    {
      id: "7",
      name: "Pizza Hut",
      image: "https://via.placeholder.com/300x200?text=Pizza+Hut",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Pizza_Hut_international_logo_2014.svg",
      rating: 4.5,
      deliveryTime: "30-40 min",
      category: "Pizza",
      priceRange: "$$",
    },
    {
      id: "8",
      name: "McDonald's",
      image: "https://via.placeholder.com/300x200?text=McDonald%27s",
      logo: "https://www.citypng.com/public/uploads/preview/hd-mcdonalds-red-round-circular-circle-logo-icon-png-image-7017516947898359qtpcakiqi.png",
      rating: 4.2,
      deliveryTime: "20-30 min",
      category: "Fast Food",
      priceRange: "$",
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
      image: "/promo-veg-food.jpg",
    },
    {
      id: "2",
      image: "/promo-fast-food.jpg",
    },
    {
      id: "3",
      image: "/promo-veg-food.jpg",
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
          <div className="max-w-screen-xl mx-auto pl-4">
            <div className="flex flex-row overflow-x-auto md:overflow-x-hidden gap-4 scroll-snap-x-mandatory md:scroll-snap-x-none">
              {promos.map((promo) => (
                <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 flex-shrink-0 scroll-snap-align-start">
                  <img src={promo.image} alt="Promo" className="w-full h-32 object-cover" />
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
                <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        {restaurant.logo && (
                          <img
                            src={restaurant.logo}
                            alt={`${restaurant.name} logo`}
                            className="w-12 h-12 rounded-full object-contain bg-white border border-gray-200 flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{restaurant.category}</span>
                            <span className="flex items-center">
                              <span className="text-yellow-500 mr-1">★</span>
                              {restaurant.rating}
                            </span>
                            <span className="text-gray-500">{restaurant.deliveryTime}</span>
                            <span className="text-gray-500">{restaurant.priceRange}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
