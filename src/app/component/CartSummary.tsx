'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

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

export default function CartSummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch('/api/cart');
      const data = await res.json();
      setCartItems(data);
    };
    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((acc, item:Product) => acc + item.price, 0);
  console.log(typeof subtotal, subtotal);

  const total = subtotal + 16; // Shipping Fee Example

  return (
    <div className="space-y-4 bg-gray-100">
      <h2 className="text-xl text-blue-900 font-semibold">Your Cart</h2>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>£{typeof subtotal === 'number' ? subtotal.toFixed(2) : '0.00'}</span>

        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>£{typeof total === 'number' ? total.toFixed(2) : '0.00'}</span>
        </div>
      </div>
<Link href={"/checkout"}>

<button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        Proceed To Checkout
      </button>
</Link>
    </div>
  );
}
