"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      const res = `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        image {
          asset-> {
            url
          }
        }
      }`;
      const data: Product[] = await client.fetch(res);
      setCart(data);
    };
    fetchCart();
  }, []);

  // Remove cart items
  const removeFromCart = async (_id: string) => {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    setCart(cart.filter((product) => product._id !== _id));
  };

//    order place
const placeOrder = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty! Please add items to your cart before placing an order.');
      return;
    }

    const orderDetails = {
      products: cart,
      total: cart.reduce((acc, product) => acc + product.price, 0),
      orderDate: new Date(),
    };

    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });

    if (response.ok) {
      alert('Order placed successfully!');
      // Clear the cart after successful order
      await fetch('/api/cart', { method: 'DELETE' });
      setCart([]); // Clear the cart on the frontend
      router.push('/order-confirmation'); // Redirect to order confirmation page
    } else {
      alert('Failed to place the order. Please try again.');
    }
};
return(
    <div className="p-4">
        <h1 className="text-2xl font-bold"> Your Cart</h1>
        {cart.length > 0 ? (
            <div>
                {cart.map((item) =>(
                    <div 
                    key={item._id}
                    className="border-b py-2 flex gap-4"
                    >
                        <h2 className="font-semibold">{item._id}</h2>
                        <p>{item.name}</p>
                        <p className="text-lg font-semibold">{`Price: $ ${item.price}`}</p>
                        <button 
                        onClick={() => removeFromCart(item._id)}
                        className="bg-pink-500 rounded-md text-white py-2 px-4"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className="mt-4">
                    <h3 className="font-semibold">
                        {`Total: $${cart.reduce((acc,product) => acc + product.price, 0)}`}
                    </h3>
                    <button 
                    onClick={placeOrder}
                    className="bg-pink-500 text-white px-6 py-2 rounded-md mt-4"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        ) : (
            <div className="justify-center items-center shadow-lg p-4">
                <h3>Oops!</h3>
                <p> Your cart is empty</p>
            </div>
            
        )}
    </div>
)

  };

 export default Cart;


