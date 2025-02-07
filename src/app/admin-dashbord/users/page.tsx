"use client";
import { useEffect, useState } from "react";


interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailAddresses: { emailAddress: string }[];
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]); // Initialize as an empty array

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Data is not an array:", data);
          setUsers([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex gap-4">
        
    <div>
      {/* Header */}
      <header className="bg-gray-100 mb-4 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Users Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Users</span>
            </p>
          </div>
        </header>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.firstName} {user.lastName}</td>
              <td className="border p-2">{user.emailAddresses[0]?.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UsersPage;
