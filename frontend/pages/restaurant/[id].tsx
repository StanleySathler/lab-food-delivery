import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cart, { CartItem } from "../../components/Cart";

const RestaurantDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mocked restaurant data (same as in index.tsx for now)
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

  const restaurant = restaurants.find((r) => r.id === id);

  // Mocked products for the restaurant
  const products = [
    {
      id: "1",
      name: "Margherita Pizza",
      price: 12.99,
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "/product-pizza-1.jpg",
    },
    {
      id: "2",
      name: "Portuguese Pizza",
      price: 14.99,
      description: "Pizza topped with pepperoni slices and cheese",
      image: "/product-pizza-2.jpg",
    },
    {
      id: "3",
      name: "Chicken Wings",
      price: 8.99,
      description: "Crispy chicken wings with your choice of sauce",
      image: "/product-chicken-wings-1.jpg",
    },
    {
      id: "4",
      name: "Chicken Wings",
      price: 8.99,
      description: "Crispy chicken wings with your choice of sauce",
      image: "/product-chicken-wings-1.jpg",
    },
    {
      id: "5",
      name: "Margherita Pizza",
      price: 12.99,
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "/product-pizza-1.jpg",
    },
    {
      id: "6",
      name: "Portuguese Pizza",
      price: 14.99,
      description: "Pizza topped with pepperoni slices and cheese",
      image: "/product-pizza-2.jpg",
    },
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product: any) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }
    setCartVisible(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return;
    setCartItems(cartItems.map(item => item.id === id ? {...item, quantity} : item));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <header role="banner" className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="border border-gray-200 rounded-md px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <img
              src={restaurant.logo}
              alt={`${restaurant.name} logo`}
              className="w-12 h-12 rounded-full object-contain"
            />
            <div>
              <h1 className="text-2xl font-semibold">{restaurant.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{restaurant.category}</span>
                <span className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  {restaurant.rating}
                </span>
                <span>{restaurant.deliveryTime}</span>
                <span>{restaurant.priceRange}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              role="article"
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">${product.price}</span>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Cart cartItems={cartItems} visible={cartVisible} onClose={() => setCartVisible(false)} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
    </div>
  );
};

export default RestaurantDetails;