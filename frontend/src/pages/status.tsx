import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Status: NextPage = () => {
  const [status, setStatus] = useState('Waiting confirmation by the restaurant');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Order confirmed');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
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
                <h1 className="text-2xl font-semibold">Order status</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-md mx-auto px-4 py-16">
        <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">{status}</h2>
          <p className="text-sm text-gray-500">This page will update automatically.</p>
        </div>
      </main>
    </div>
  );
};

export default Status;
