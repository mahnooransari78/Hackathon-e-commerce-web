'use client';

import { useEffect, useState } from 'react';
import CheckoutForm from '@/app/checkout/CheckoutForm';
import CartSummary from '@/app/component/CartSummary';
import CartItem from '../component/CartItem';

interface Product {
  
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  image: {
    asset: {
      url: string;
    };
  };
  onUpdate: (_id: string, quantity: number) => Promise<void>;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch('/api/cart');
      const data = await res.json();
      setCartItems(data);
    };
    fetchCart();
  }, []);

  return (
    <>
    <header className="bg-gray-100 py-6">
         <div className="container mx-auto px-4">
           <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
             Shop Grid Default
           </h1>
           <p className="text-sm md:text-base text-gray-500">
             Home / Pages /{" "}
             <span className="text-pink-500">Shop Grid Default</span>
           </p>
         </div>
       </header>
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start gap-8">
      <div className="w-full max-w-2xl bg-gray-100 p-6 rounded shadow-md">
        <CheckoutForm />
      </div>
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-md shadow-md">
        {cartItems.map((item) => (
          <CartItem key={item._id} product={item} onUpdate={async () => {}} />
        ))}
        <CartSummary />
      </div>
    </div>
    </>
  );
}
