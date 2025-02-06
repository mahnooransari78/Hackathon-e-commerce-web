'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

//  Define TypeScript Interface
interface Review {
  _id: string;
  product: {
    title: string;
  };
  user: {
    name: string;
  };
  text: string;
}

export default function ReviewsManagement() {
  //  Apply the Type to useState
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch Data with Type Safety
  useEffect(() => {
    client
      .fetch<Review[]>('*[_type == "review"]') // Specify the return type here
      .then((data) => setReviews(data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  const handleDeleteReview = (reviewId: string) => {
    // Placeholder for deletion logic
    alert(`Review ${reviewId} deleted`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Manage Reviews</h1>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Reviewer</th>
            <th className="px-4 py-2 border">Review</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td className="border px-4 py-2">{review.product?.title || 'N/A'}</td>
              <td className="border px-4 py-2">{review.user?.name || 'Anonymous'}</td>
              <td className="border px-4 py-2">{review.text}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
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
}
