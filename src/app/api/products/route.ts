// import { client } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const query = `*[_type == "product"][0...19]{
  _id,
  name,
  price,
  discountPercentage,
  image {
    asset -> {
      url
    }
  }
}`;

// GET - Fetch All Products
export async function GET() {
  try {
    const products: Products[] = await client.fetch(query); // Correct type for multiple products
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products", error }, { status: 500 });
  }
}

// POST - Add New Product
export async function POST(req: Request) {
  try {
    const newProduct = await req.json();

    const createdProduct = await client.create({
      _type: "product",
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      discountPercentage: newProduct.discountPercentage,
      image: newProduct.image,
    });

    return NextResponse.json(createdProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add product", error }, { status: 500 });
  }
}
