"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; 
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
interface Product {
  _id: string;
  name: string;
  price: number;
  stockLevel: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 🔍 Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        stockLevel
      }`;
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🗑️ Delete Product from Sanity
  const handleDelete = (_id: string) => {
    const updatedProducts = products.filter((product) => product._id !== _id);
    setProducts(updatedProducts);
  };

  return (
    <div className="flex gap-4">
      
      <div className="w-[1000px]">
         {/* Header */}
         <header className="bg-gray-100 mb-4 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">products Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">products</span>
            </p>
          </div>
        </header>
        
        <Link
          href="/admin-dashbord/product/add"
          className="bg-pink-500 text-white  px-4 py-2 rounded hover:bg-pink-300"
        >
          Add New Product
        </Link>

        {loading ? (
          <p className="mt-4">Loading products...</p>
        ) : (
          <table className="w-full mt-4 item-center bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200 text-blue-900 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-t item-center justify-center ">
                  <td className="p-2 texr-pink-500">{product.name}</td>
                  <td className="p-2 text-blue-900">${product.price}</td>
                  <td className="p-2 text-blue-900">{product.stockLevel}</td>
                  <td className="p-2 text-gray-700 flex items-center space-x-2 justify-center">
                    <Link
                      href={`/admin-dashbord/product/${product._id}/edit`}
                      className=" px-2 py-1 "
                    >
                      <LiaEditSolid />
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className=" px-2 py-1 item-center"
                    >
                      <RiDeleteBinLine className="text-center "/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductList;
