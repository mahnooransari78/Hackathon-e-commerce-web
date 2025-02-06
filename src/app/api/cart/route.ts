import { NextRequest, NextResponse } from "next/server";


interface CartItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  image: {
    asset: {
      url: string;
    };
  };
}

let cart: CartItem[] = []; // This will hold the cart items temporarily

export async function GET() {
  
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const item = await request.json();

  // Check if the product already exists in the cart
  const existingProduct = cart.find((product) => product._id === item._id);
  if (existingProduct) {
    existingProduct.quantity += item.quantity;
  } else {
    cart.push(item); // Add new product to the cart
  }

  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  const { _id } = await request.json();

  // Remove the product from the cart
  cart = cart.filter((product) => product._id !== _id);
  return NextResponse.json({ message: 'Item removed from cart successfully' });
}


