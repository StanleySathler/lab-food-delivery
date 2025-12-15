import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Status: NextPage = () => {
  const steps = [
    'Waiting confirmation by the restaurant',
    'Order confirmed',
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(1);
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
        <div className="bg-white border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Order status</h2>
          <p className="text-sm text-gray-500">This page will update automatically.</p>

          <div className="mt-6">
            <ol className="flex flex-col">
              {steps
                .map((label, idx) => ({ label, idx }))
                .filter(({ idx }) => idx <= currentStep)
                .map(({ label }, idx) => {
                  const isCurrent = idx === currentStep;
                  return (
                    <li key={label} className="flex items-center">
                      <div className="flex flex-col items-center mr-4">
                        <div
                          className={`w-4 h-4 rounded-full ${isCurrent ? 'bg-amber-500' : 'bg-gray-300'}`}
                          aria-hidden
                        />
                        {idx < currentStep && (
                          <div className={`${'bg-gray-300'} ${idx === 0 ? 'h-4' : 'h-8'} w-px`} />
                        )}
                      </div>

                      <div>
                        <p className={`text-sm font-medium ${isCurrent ? 'text-amber-600' : 'text-gray-500'}`}>
                          {label}
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Status;
