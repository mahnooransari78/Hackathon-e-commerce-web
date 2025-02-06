import { NextRequest, NextResponse } from "next/server";

// Sample product data (Replace this with your actual database call)
let products = [
  { id: 1, name: "Sofa Set", price: 500, category: "Furniture" },
  { id: 2, name: "Dining Table", price: 700, category: "Furniture" },
];

// ✅ GET - Fetch Product by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

// ✅ PUT - Update Product
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const updatedData = await req.json();
  products = products.map((p) =>
    p.id === Number(params.id) ? { ...p, ...updatedData } : p
  );

  return NextResponse.json({ message: "Product updated successfully" });
}

// ✅ DELETE - Remove Product
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  products = products.filter((p) => p.id !== Number(params.id));

  return NextResponse.json({ message: "Product deleted successfully" });
}
