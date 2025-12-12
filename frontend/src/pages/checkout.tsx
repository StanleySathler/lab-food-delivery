import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { formatCardNumber, formatCardExpiryDate } from "../utils/masks";

const Checkout: NextPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const router = useRouter();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(formatCardExpiryDate(e.target.value));
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Checkout Header */}
      <header role="banner" className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="border border-gray-200 rounded-md px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              >
                ←
              </button>
              <div>
                <h1 className="text-2xl font-semibold">Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-md mx-auto px-4 py-8">
        <div className="bg-white border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Payment details</h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Cardholder name
              </label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                placeholder="Full name as it appears on card"
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-amber-400 focus:ring-amber-200"
              />
            </div>

            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-amber-400 focus:ring-amber-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiration
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  placeholder="MM / YY"
                  value={expiry}
                  onChange={handleExpiryChange}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-amber-400 focus:ring-amber-200"
                />
              </div>

              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  inputMode="numeric"
                  placeholder="123"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-amber-400 focus:ring-amber-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Billing address (optional)
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Street address"
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-amber-400 focus:ring-amber-200"
              />
            </div>

            <div className="pt-4 border-t">
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-amber-600 transition-colors"
              >
                Pay now
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
