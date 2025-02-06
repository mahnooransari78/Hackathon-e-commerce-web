"use client";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../sidebar/page";

interface Order {
  id: number;
  customerName: string;
  total: number;
  status: "Pending" | "Shipped" | "Delivered";
}

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customerName: "Ali Khan", total: 250, status: "Pending" },
    { id: 2, customerName: "Sara Ahmed", total: 450, status: "Shipped" },
  ]);

  const handleStatusChange = (id: number, status: Order["status"]) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  return (
   <div className="flex gap-4">
    
    <Sidebar />
    <div className="lg:w-[1000px]">
    <header className="bg-gray-100 py-6 ">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Order Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Order</span>
            </p>
          </div>
        </header>
      
      <table className=" bg-white lg:w-[1000px] mt-8 shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-blue-900 text-left">
            <th className="p-2">Order ID</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Total</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-2 text-blue-900">{order.id}</td>
              <td className="p-2 text-pink-500">{order.customerName}</td>
              <td className="p-2 text-blue-900">${order.total}</td>
              <td className="p-2">
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.id, e.target.value as Order["status"])
                  }
                  className="p-1 text-pink-500 border-gray-100 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td className="p-2">
                <Link
                  href={`/admin-dashbord/order/${order.id}/view`}
                  className="bg-pink-500 text-white px-2 py-1 rounded"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default OrderList;
