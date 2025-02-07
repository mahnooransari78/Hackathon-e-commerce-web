"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";



const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const router = useRouter();

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Added:", { name, price, stock });
    router.push("/admin-dashbord/product"); // Redirect after adding
  };

  return (
    <div className="flex gap-4">
       
        <div>
          {/* Header */}
         <header className="bg-gray-100 mb-4 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Add Product Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Add Products</span>
            </p>
          </div>
        </header>
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddProduct;
