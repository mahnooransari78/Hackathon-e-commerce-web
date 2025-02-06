"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import CartItem from "../component/CartItem";
import CartSummary from "../component/CartSummary";
import ShippingCalculator from "../component/ShippingCalculate";

interface Product {
  id: any;
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

  function handleUpdateCart  (id?: any, quantity?: string){
    alert("Shipping calculated based on entered information!");
  }

  return (
    <div className="p-8 space-y-8 lg:flex lg:space-x-8">
      {cart.length > 0 ? (
        <div className="lg:w-2/3">
          {cart.map((item) => (
            <div key={item._id}>
              <CartItem product={item} onUpdate={async (quantity) => handleUpdateCart(item.id, quantity)}
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
// const Cart = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter();

//   // ✅ Fetch only added products from cart
//   useEffect(() => {
//     const fetchCart = async () => {
//       const res = `*[_type == "product"][0].items[]{
//         _id,
//         name,
//         description,
//         price,
//         discountPercentage,
//         quantity,
//         image {
//           asset-> {
//             url
//           }
//         }
//       }`;

//       const data: Product[] = await client.fetch(res);
//       setCart(data);
//     };

//     fetchCart();
//   }, []);

//   // ✅ Remove item from cart
//   const removeFromCart = async (_id: string) => {
//     await fetch("/api/cart", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ _id }),
//     });

//     setCart((prevCart) => prevCart.filter((product) => product._id !== _id));
//   };

//   // ✅ Place order
//   const placeOrder = async () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty! Please add items before placing an order.");
//       return;
//     }

//     const orderDetails = {
//       products: cart,
//       total: cart.reduce((acc, product) => acc + product.price * product.quantity, 0),
//       orderDate: new Date(),
//     };

//     const response = await fetch("/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderDetails),
//     });

//     if (response.ok) {
//       alert("Order placed successfully!");
//       await fetch("/api/cart", { method: "DELETE" });
//       setCart([]);
//       router.push("/order-confirmation");
//     } else {
//       alert("Failed to place the order. Please try again.");
//     }
//   };

//   // ✅ Update cart quantity
//   const handleUpdateCart = async (id: string, quantity: number): Promise<void> => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product._id === id ? { ...product, quantity } : product
//       )
//     );

//     await fetch("/api/cart", {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, quantity }),
//     });
//   };

//   // ✅ Shipping Calculator
//   const handleCalculateShipping = () => {
//     alert("Shipping calculated based on entered information!");
//   };

//   return (
//     <div className="p-8 space-y-8 lg:flex lg:space-x-8">
//       {cart && cart.length > 0 ? (
//         <div className="lg:w-2/3">
//           {cart.map((item) => (
//             <div key={item._id}>
//               <CartItem
//                 product={item}
//                 onUpdate={(quantity) => handleUpdateCart(item._id, parseInt(quantity))}
//               />
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="bg-pink-500 rounded-md text-white py-2 px-4 mt-4"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="justify-center items-center shadow-lg p-4">
//           <h3>Oops!</h3>
//           <p>Your cart is empty</p>
//         </div>
//       )}

//       <div className="lg:w-1/3 space-y-4">
//         <CartSummary />
//         <ShippingCalculator calculateShipping={handleCalculateShipping} />
//         <button onClick={placeOrder} className="bg-green-500 text-white py-2 px-4 rounded">
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;







// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
// import { client } from "@/sanity/lib/client";
// import CartItem from "../component/CartItem";
// import CartSummary from "../component/CartSummary";
// import ShippingCalculator from "../component/ShippingCalculate";

// interface Product {
//   id: any;
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const Cart = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter();

//   // Fetch cart items
//   useEffect(() => {
//     const fetchCart = async () => {
//       const res = `*[_type == "product"]{
//         _id,
//         name,
//         description,
//         price,
//         discountPercentage,
//         image {
//           asset-> {
//             url
//           }
//         }
//       }`;
//       const data: Product[] = await client.fetch(res);
//       setCart(data);
//     };
//     fetchCart();
//   }, []);

//   // Remove cart items
//   const removeFromCart = async (_id: string) => {
//     await fetch("/api/cart", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ _id }),
//     });
//     setCart(cart.filter((product) => product._id !== _id));
//   };

// //    order place
// const placeOrder = async () => {
//     if (cart.length === 0) {
//       alert('Your cart is empty! Please add items to your cart before placing an order.');
//       return;
//     }

//     const orderDetails = {
//       products: cart,
//       total: cart.reduce((acc, product) => acc + product.price, 0),
//       orderDate: new Date(),
//     };
    
//     const response = await fetch('/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderDetails),
//     });

//     if (response.ok) {
//       alert('Order placed successfully!');
//       // Clear the cart after successful order
//       await fetch('/api/cart', { method: 'DELETE' });
//       setCart([]); // Clear the cart on the frontend
//       router.push('/order-confirmation'); // Redirect to order confirmation page
//     } else {
//       alert('Failed to place the order. Please try again.');
//     }
// };
  

 

//   function handleUpdateCart(id: any, quantity: number): Promise<void> {
//     throw new Error("Function not implemented.");
//   }

// return(
//     <div className="p-8 space-y-8 lg:flex lg:space-x-8">
//         <h1 className="text-2xl font-bold"> Your Cart</h1>
//         {cart.length > 0 ? (
//             <div className="lg:w-2/3">
//                 {cart.map((item) =>(
//                   <CartItem
//                   key={item._id}
//                   product={item} // Pass entire product object
//                   onUpdate={(quantity) => handleUpdateCart(item.id, quantity)} // Pass the function here
//                 />
//                     // <div 
//                     // key={item._id}
//                     // className="border-b py-2 flex gap-4"
//                     // >
//                     //     <h2 className="font-semibold">{item._id}</h2>
//                     //     <p>{item.name}</p>
//                     //     <p className="text-lg font-semibold">{`Price: $ ${item.price}`}</p>
//                     //     <button 
//                     //     onClick={() => removeFromCart(item._id)}
//                     //     className="bg-pink-500 rounded-md text-white py-2 px-4"
//                     //     >
//                     //         Remove
//                     //     </button>
//                     // </div>
//                 ))}
//                 <button 
//                     onClick={() => removeFromCart(item._id)}
//                     className="bg-pink-500 rounded-md text-white py-2 px-4"
//                     >
//                         Remove
//                     </button>
//                     <div className="lg:w-1/3 space-y-4">
//         <CartSummary />
//         <ShippingCalculator calculateShipping={handleCalculateShipping} />
//       </div>
//                 {/* <div className="mt-4">
//                     <h3 className="font-semibold">
//                         {`Total: $${cart.reduce((acc,product) => acc + product.price, 0)}`}
//                     </h3>
//                     <button 
//                     onClick={placeOrder}
//                     className="bg-pink-500 text-white px-6 py-2 rounded-md mt-4"
//                     >
//                         Place Order
//                     </button>
//                 </div> */}
//             </div>
//         ) : (
//             <div className="justify-center items-center shadow-lg p-4">
//                 <h3>Oops!</h3>
//                 <p> Your cart is empty</p>
//             </div>
            
//         )}
//     </div>
// )

//   };

//  export default Cart;





//                             OLDER CODE

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
// import { client } from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const Cart = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter();

//   // Fetch cart items
//   useEffect(() => {
//     const fetchCart = async () => {
//       const res = `*[_type == "product"]{
//         _id,
//         name,
//         description,
//         price,
//         discountPercentage,
//         image {
//           asset-> {
//             url
//           }
//         }
//       }`;
//       const data: Product[] = await client.fetch(res);
//       setCart(data);
//     };
//     fetchCart();
//   }, []);

//   // Remove cart items
//   const removeFromCart = async (_id: string) => {
//     await fetch("/api/cart", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ _id }),
//     });
//     setCart(cart.filter((product) => product._id !== _id));
//   };

// //    order place
// const placeOrder = async () => {
//     if (cart.length === 0) {
//       alert('Your cart is empty! Please add items to your cart before placing an order.');
//       return;
//     }

//     const orderDetails = {
//       products: cart,
//       total: cart.reduce((acc, product) => acc + product.price, 0),
//       orderDate: new Date(),
//     };

//     const response = await fetch('/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderDetails),
//     });

//     if (response.ok) {
//       alert('Order placed successfully!');
//       // Clear the cart after successful order
//       await fetch('/api/cart', { method: 'DELETE' });
//       setCart([]); // Clear the cart on the frontend
//       router.push('/order-confirmation'); // Redirect to order confirmation page
//     } else {
//       alert('Failed to place the order. Please try again.');
//     }
// };
// return(
//     <div className="p-4">
//         <h1 className="text-2xl font-bold"> Your Cart</h1>
//         {cart.length > 0 ? (
//             <div>
//                 {cart.map((item) =>(
//                     <div 
//                     key={item._id}
//                     className="border-b py-2 flex gap-4"
//                     >
//                         <h2 className="font-semibold">{item._id}</h2>
//                         <p>{item.name}</p>
//                         <p className="text-lg font-semibold">{`Price: $ ${item.price}`}</p>
//                         <button 
//                         onClick={() => removeFromCart(item._id)}
//                         className="bg-pink-500 rounded-md text-white py-2 px-4"
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 ))}
//                 <div className="mt-4">
//                     <h3 className="font-semibold">
//                         {`Total: $${cart.reduce((acc,product) => acc + product.price, 0)}`}
//                     </h3>
//                     <button 
//                     onClick={placeOrder}
//                     className="bg-pink-500 text-white px-6 py-2 rounded-md mt-4"
//                     >
//                         Place Order
//                     </button>
//                 </div>
//             </div>
//         ) : (
//             <div className="justify-center items-center shadow-lg p-4">
//                 <h3>Oops!</h3>
//                 <p> Your cart is empty</p>
//             </div>
            
//         )}
//     </div>
// )

//   };

//  export default Cart;


