"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "../component/CartItem";
import CartSummary from "../component/CartSummary";
import ShippingCalculator from "../component/ShippingCalculate";

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
}
const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch products from Sanity
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("/api/cart"); // This will call the backend and fetch products from Sanity
      const data: Product[] = await res.json();
      console.log(data,"this is data")
      setCart(data); // Store the fetched products in cart
    };
   
    fetchCart();
  }, []);



  const removeFromCart = async (_id: string) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (response.ok) {
      setCart((prevCart) => prevCart.filter((product) => product._id !== _id)); // Remove product from cart
    }
  };

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items before placing an order.");
      return;
    }

    const orderDetails = {
      products: cart,
      total: cart.reduce((acc, product) => acc + product.price * product.quantity, 0),
      orderDate: new Date(),
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    });

    if (response.ok) {
      alert("Order placed successfully!");
      setCart([]); // Clear the cart after order is placed
      router.push("/order-confirmation");
    } else {
      alert("Failed to place the order. Please try again.");
    }
  };

 

  const handleUpdateCart = async (_id: string, _quantity: string) => {
    console.log(`Updating cart item ${_id} with quantity ${_quantity}`);
  };
  

  return (
    <div className="p-8 space-y-8 lg:flex lg:space-x-8">
      {cart.length > 0 ? (
        <div className="lg:w-2/3">
          {cart.map((item) => (
            <div key={item._id}>
              <CartItem product={item} onUpdate={async (quantity) => handleUpdateCart(item._id, quantity)}
              />
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-pink-500 rounded-md text-white py-2 px-4 mt-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="justify-center items-center shadow-lg p-4">
          <h3>Oops!</h3>
          <p>Your cart is empty</p>
        </div>
      )}

      <div className="lg:w-1/3 space-y-4">
        <CartSummary />
        <ShippingCalculator />
        <button onClick={placeOrder} className="bg-green-500 text-white py-2 px-4 rounded">
          Place Order
        </button>
      </div>
    </div>

  );
};
export default Cart;
