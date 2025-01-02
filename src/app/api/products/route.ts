import { NextResponse } from 'next/server';
import featured1 from "@/app/Image/featured1.png";


export async function GET() {
  const products = [
    {
      id: 1,
      title: "Cantilever Chair",
      price: 42.00,
      description:"This is a premium-quality chair made with high-grade materials.Comfortable, stylish, and long-lasting for any space.",
      image:featured1,
      image1: [ featured1 , featured1, featured1, featured1, featured1],
      oldprice:40.00,
      categories:"faniture",
      reviews:20
    },
    {
      id: 2,
      title: "Cantilever Chair",
      price: 42.00,
      description:"This is a premium-quality chair made with high-grade materials.Comfortable, stylish, and long-lasting for any space.",
      image: featured1,
      categories:"faniture",
      reviews:20
    },
    {
      id: 3,
      title: "Cantilever Chair",
      price: 42.00,
      description:"This is a premium-quality chair made with high-grade materials.Comfortable, stylish, and long-lasting for any space.",
      image: featured1,
      categories:"faniture",
      reviews:20
    },
    {
      id: 4,
      title: "Cantilever Chair",
      price: 42.00,
      description:"This is a premium-quality chair made with high-grade materials.Comfortable, stylish, and long-lasting for any space.",
      image: featured1,
      categories:"faniture",
      reviews:20
    },
  ];

  return NextResponse.json(products);
}
