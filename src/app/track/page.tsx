"use client";
import { useState } from "react";

interface TrackingData {
  status_description: string;
  carrier_status_code?: string;
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<TrackingData | null>(null);

  const handleTrack = async () => {
    const res = await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trackingNumber }),
    });

    const data = await res.json();
    console.log("Tracking Response:", data); // Debugging ke liye response check 

    if (data.success && data.trackingData) {
      setTrackingInfo(data.trackingData);
    } else {
      alert("Error fetching tracking info!");
    }
  };

  return (
    <div>
       {/* Header */}
       <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Track shipment Page</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Track shipment</span>
            </p>
          </div>
        </header>
    <div className="max-w-lg mx-auto p-6 mt-10 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl text-blue-900 font-bold">Track Your Shipment</h2>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        className="w-full mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none"
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button
        onClick={handleTrack}
        className="w-full bg-pink-500 mt-10 text-white py-2 "
      >
        Track
      </button>

      {trackingInfo && (
        <p className="mt-4">
          <strong>Status:</strong> {trackingInfo.status_description || "N/A"}
        </p>
      )}
    </div>
    </div>
  );
}
