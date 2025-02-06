'use client';

 import { useState } from 'react';

 export default function CheckoutForm() {
   const [formData, setFormData] = useState({
    email:"", 
    firstName: "",
    lastName:"",
     address: "",
     city: "",
     country: "US",
     postalCode: "",
   });
   const [trackingNumber, setTrackingNumber] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     const res = await fetch("/api/checkout", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
     });

     const data = await res.json();
     if (data.success) {
       setTrackingNumber(data.trackingNumber);
       alert(`Shipment Created! Tracking Number: ${data.trackingNumber}`);
     } else {
       alert("Error creating shipment!");
     }
   };


   return (
<div className=" bg-gray-100 rounded">
     <form onSubmit={handleSubmit} className="space-y-5">
       <h2 className="text-2xl text-blue-900 font-bold">Contact Information</h2>

       <input
         type="email"
         name="email"
         placeholder="Email"
         value={formData.email}
         className="w-full mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none"
         
         onChange={handleChange}
         required
       />

       <h2 className="text-xl text-blue-900 font-bold">Shipping Address</h2>
       <div className="flex gap-4">
         <input
           type="text"
           name="firstName"
           placeholder="First Name"
           value={formData.firstName}
           className="w-1/2  mt-8 p-2 bg-gray-100 border-b-2 focus:outline-none "
           onChange={handleChange}
         />
         <input
           type="text"
           name="lastName"
           placeholder="Last Name"
           value={formData.lastName}
           className="w-1/2  mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none  "
           onChange={handleChange}
         />
         
       </div>
       <div>
       <input
           type="tel"
           name="tel"
           placeholder="Mobile Number"
           
           className="w-full mt-9 p-2 bg-gray-100 border-b-2 focus:outline-none  "
           onChange={handleChange}
         />
       </div>
      <div> 
        <input
         type="text"
         name="address"
         placeholder="Address"
         className="w-full mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none  "
         value={formData.address}
         onChange={handleChange}
         required
       />
       </div>

       <div className="flex gap-4">
         <input
           type="text"
           name="city"
           placeholder="City"
           className="w-1/2 mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none "
           value={formData.city}
           onChange={handleChange}
           required
         />
         <input
           type="text"
              name="postalCode"
              placeholder="ZIP Code"
              className="w-1/2 mt-10 p-2 bg-gray-100 border-b-2 focus:outline-none "
              value={formData.postalCode}
              onChange={handleChange}
              pattern="^\d{5}(-\d{4})?$" 
              required
            />
       </div>

       <button
         type="submit"
         className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
       >
         Continue Shipping
       </button>
     </form>
{trackingNumber && <p className="mt-4">Tracking Number: {trackingNumber}</p>}
    </div>
   );
 }
