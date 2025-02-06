import { NextRequest, NextResponse } from "next/server";

let products = [
  { id: 1, name: "Sofa", price: 500, stock: 10 },
  { id: 2, name: "Chair", price: 150, stock: 20 },
];

// GET - Fetch Product by ID
export async function GET(req: NextRequest,{ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  return product
    ? NextResponse.json(product)
    : NextResponse.json({ message: "Product not found" }, { status: 404 });
}

// PUT - Update Product
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const updatedData = await req.json();
  products = products.map((p) =>
    p.id === Number(params.id) ? { ...p, ...updatedData } : p
  );
  return NextResponse.json({ message: "Product updated successfully" });
}

// DELETE - Remove Product
export async function DELETE(req: NextRequest,{ params }: { params: { id: string } }) {
  products = products.filter((p) => p.id !== Number(params.id));
  return NextResponse.json({ message: "Product deleted successfully" });
}
