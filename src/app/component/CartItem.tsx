import React, { useState } from "react";
import Image from "next/image";
interface CartItemProps {
  product: {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity?: number
  image: {
    asset: {
      url: string;
    };
  };
  };
  onUpdate: (_id: string, quantity: number) => Promise<void>; // Function to handle updates
}

const CartItem: React.FC<CartItemProps> = ({ product, onUpdate }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 0; // Parse and default to 0
    setQuantity(newQuantity); // Update local state
    onUpdate(product._id, newQuantity); // Trigger parent-provided update handler
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        {product.image?.asset?.url ? (
            <Image
              src={product.image.asset.url}
              alt={product.name || "Product Image"}
              width={64}
          height={64}
          className="w-16 h-16 rounded"
              loading="lazy"
            />
          ) : (
            <p className="text-gray-500">No Image Available</p>
          )}

        <div className="ml-4">
          <h3 className="font-semibold">{product.name}</h3>
        </div>
      </div>
      <p className="text-gray-600">${product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange} // Handle quantity change
        className="w-16 px-2 py-1 border rounded"
      />
      <p className="font-semibold">${product.price * quantity}</p>
    </div>
  );
};

export default CartItem;
