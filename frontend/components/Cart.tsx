import React from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  visible: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, visible, onClose, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;
  return (
    <div className={`fixed top-0 right-0 h-full w-[28rem] bg-white shadow-lg transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      <div className="p-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="mb-6">
                <div className="font-medium">{item.name}</div>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 mr-4"
                  >
                    🗑️
                  </button>
                  <div className="flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-medium ml-auto">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-2">Coupons</h3>
              <p className="text-sm text-gray-600">No coupons available</p>
            </div>
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;