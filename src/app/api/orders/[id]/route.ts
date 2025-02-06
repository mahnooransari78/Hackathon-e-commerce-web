import { NextRequest, NextResponse } from "next/server";

let orders = [
  { id: 1, customerName: "Ali Khan", total: 250, status: "Pending" },
  { id: 2, customerName: "Sara Ahmed", total: 450, status: "Shipped" },
];

// ✅ GET - Fetch Order by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === Number(params.id));
  
  if (!order) {
    return NextResponse.json({ message: "Order not found" }, { status: 404 });
  }

  return NextResponse.json(order);
}

// ✅ PUT - Update Order Status
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const updatedData = await req.json();
  orders = orders.map((o) =>
    o.id === Number(params.id) ? { ...o, ...updatedData } : o
  );

  return NextResponse.json({ message: "Order updated successfully" });
}

// ✅ DELETE - Cancel Order
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  orders = orders.filter((o) => o.id !== Number(params.id));

  return NextResponse.json({ message: "Order deleted successfully" });
}
