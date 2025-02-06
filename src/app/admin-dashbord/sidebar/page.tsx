import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 text-blue-900 p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <nav className="space-y-4">
        <Link href="/admin-dashbord/dashboard" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Dashboard</Link>
        <Link href="/admin-dashbord/product" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Products</Link>
        <Link href="/admin-dashbord/order" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Orders</Link>
        <Link href="/admin-dashbord/users" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Users</Link>
        <Link href="/admin-dashbord/review" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Reviews</Link>
        <Link href="/admin-dashbord/settings" className="block hover:bg-gray-100 hover:text-pink-500 p-2 rounded">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
