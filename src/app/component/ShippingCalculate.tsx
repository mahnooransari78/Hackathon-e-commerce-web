'use client';

import { useState } from "react";

const ShippingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    country: "",
    postalCode: "",
    weight: 1, // Default weight in pounds
  });
  const [shippingCost, setShippingCost] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateShipping = async () => {
    setError(null); // Reset previous error
    setShippingCost(null); // Reset previous result

    const response = await fetch("/api/shippingcalcu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (response.ok) {
      setShippingCost(data.shippingCost); // Set shipping cost if response is successful
    } else {
      setError(data.error); // Show error if something goes wrong
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Shipping Cost Estimator</h2>
      
      <input
        type="text"
        name="country"
        placeholder="Enter Country"
        className="w-full px-4 py-2 mb-4 border rounded"
        value={formData.country}
        onChange={handleChange}
      />
      
      <input
        type="text"
        name="postalCode"
        placeholder="Enter Postal Code"
        className="w-full px-4 py-2 mb-4 border rounded"
        value={formData.postalCode}
        onChange={handleChange}
      />
      
      <input
        type="number"
        name="weight"
        placeholder="Enter Weight (lbs)"
        className="w-full px-4 py-2 mb-4 border rounded"
        value={formData.weight}
        onChange={handleChange}
      />

      <button
        onClick={calculateShipping}
        className="w-full px-4 py-2 mt-4 bg-pink-500 text-white rounded"
      >
        Calculate Shipping
      </button>

      {shippingCost && (
        <div className="mt-4">
          <h3 className="font-semibold">Shipping Cost: {shippingCost}</h3>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;


// import React from "react";

// interface ShippingCalculatorProps {
//   calculateShipping: () => void; // Add a prop to accept the function
// }

// const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({
//   calculateShipping,
// }) => {
//   return (
//     <div className="p-6 bg-gray-100 rounded">
//       <h2 className="text-lg font-semibold">Calculate Shipping</h2>
//       <input
//         type="text"
//         placeholder="Country"
//         className="w-full px-4 py-2 my-2 border rounded"
//       />
//       <input
//         type="text"
//         placeholder="City"
//         className="w-full px-4 py-2 my-2 border rounded"
//       />
//       <input
//         type="text"
//         placeholder="Postal Code"
//         className="w-full px-4 py-2 my-2 border rounded"
//       />
//       <button
//         onClick={calculateShipping} // Trigger the prop function on click
//         className="w-full px-4 py-2 mt-4 text-white bg-pink-500 rounded"
//       >
//         Calculate Shipping
//       </button>
//     </div>
//   );
// };

// export default ShippingCalculator;
