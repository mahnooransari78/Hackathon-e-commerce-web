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