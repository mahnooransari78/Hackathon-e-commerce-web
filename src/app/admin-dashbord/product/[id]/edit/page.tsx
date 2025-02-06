"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
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
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </Link>

      <table className="w-full mt-4 bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.name}</td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2 space-x-2">
                <Link
                  href={`/admin-dashbord/product/${product.id}/edit`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useState } from "react";
// import Sidebar from "../../../sidebar/page";

// const EditProduct = () => {
//   const { id } = useParams();
//   const router = useRouter();

//   const [name, setName] = useState("Sample Product");
//   const [price, setPrice] = useState(100);
//   const [stock, setStock] = useState(50);

//   const handleUpdateProduct = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Product Updated:", { id, name, price, stock });
//     router.push("/admin-dashbord/product");
//   };

//   return (
//     <div className="flex gap-4">
//         <Sidebar />
//         <div>
//       <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
//       <form onSubmit={handleUpdateProduct} className="space-y-4">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="number"
//           value={stock}
//           onChange={(e) => setStock(Number(e.target.value))}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Update Product
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default EditProduct;
