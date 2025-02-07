"use client";

import { useParams } from "next/navigation";

const OrderDetails = () => {
  const { id } = useParams();

  // Dummy data for demonstration
  const order = {
    id,
    customerName: "Ali Khan",
    items: [
      { name: "Sofa", quantity: 1, price: 250 },
      { name: "Chair", quantity: 2, price: 100 },
    ],
    total: 450,
    status: "Pending",
  };

  return (
    <div className="flex gap-4">
     
        {/* Header */}
        <header className="bg-gray-100 mb-4 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">View Order</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">View Order</span>
            </p>
          </div>
        </header>
        <div>
      <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ${order.total}</p>

      <h2 className="text-xl font-semibold mt-4">Items:</h2>
      <ul className="list-disc ml-6">
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default OrderDetails;
