// import { NextResponse } from "next/server";

// let orders = [
//   { id: 1, customerName: "Ali Khan", total: 250, status: "Pending" },
//   { id: 2, customerName: "Sara Ahmed", total: 450, status: "Shipped" },
// ];

// // GET - Fetch All Orders
// export async function GET() {
//   return NextResponse.json(orders);
// }

// // POST - Create New Order
// export async function POST(req: Request) {
//   const newOrder = await req.json();
//   newOrder.id = orders.length + 1;
//   orders.push(newOrder);
//   return NextResponse.json(newOrder, { status: 201 });
// }



import { NextResponse } from "next/server";


const orders: string[] =[];

export async function POST(request : Request) {
    const order = await request.json();
    orders.push(order);

    return NextResponse.json({message: 'Order Placed successfully', order});
}

export async function GET () {

    return NextResponse.json({orders});
}