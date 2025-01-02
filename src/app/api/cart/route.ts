import { NextResponse } from "next/server";

interface CartItem {
  id:number;
  title:string;
  price:number;
  quantity: number;
}
let cart : CartItem[] =[];

export async function GET () {
    return NextResponse.json(cart);
}

export async function POST (request: Request) {
    const item = await request.json();
    cart.push(item);
    return NextResponse.json(cart);
}

export async function DELETE (request : Request) {
    const { id } = await request.json();
    cart = cart.filter((product) => product.id !== id);
    return NextResponse.json({message: 'Cart cleared successfully'});
}