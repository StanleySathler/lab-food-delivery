import type { NextPage } from "next";
import { useRouter } from "next/router";
import Cart, { CartItem } from "../../components/Cart";
import { useCart } from "../../hooks/useCart";
import { restaurants } from "../../src/mocks/database";

const RestaurantDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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

  const { cartRef, cartVisible, setCartVisible, addToCart, getItems, updateQuantity, removeItem } = useCart();

  const cartItemsCount = getItems().length;

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <header role="banner" className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="border border-gray-200 rounded-md px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              >
                ←
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
            <button 
              className="border border-gray-200 rounded-md px-3 py-2 hidden sm:block" 
              onClick={() => setCartVisible(true)}
            >
              🛒
            </button>
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

      {/* Floating Cart Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-10">
        <button
          onClick={() => setCartVisible(true)}
          className="w-full bg-amber-500 text-white p-4 shadow-lg hover:bg-amber-600 transition-colors relative flex items-center justify-center gap-2"
          aria-label="Open cart"
        >
          <span>🛒</span>
          <span>Cart</span>
          {cartItemsCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      <Cart ref={cartRef} visible={cartVisible} onClose={() => setCartVisible(false)} cartItems={getItems()} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
};

export default RestaurantDetails;