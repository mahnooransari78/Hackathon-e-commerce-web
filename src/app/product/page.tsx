'use client'
import { useState, useEffect } from 'react';
import ProductCard from '@/app/component/productCard';
import { Fade } from 'react-awesome-reveal';

interface Product {
  id: number;
  title: string;
  price: number;
  image:string;
  description: string;
}

const ProductsPage = () => {
  const [products, setProducts ] = useState<Product[]>([]);

  useEffect(() =>{
    const fetchProduct = async () =>{
      try{
        const res = await fetch('/api/products');
        if (!res.ok){
          throw new Error("Failed to fetch products");
        }
        const data:Product[] =await res.json();
        setProducts(data);
      } catch (error) {
        console.log('error fetching Products:', error);
      }
    };
    fetchProduct();
  },[]);

  return (
    <section className="flex flex-col justify-center items-center mt-20 px-4 md:px-12">
      <Fade
              direction="up"
              delay={200}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="font-josefin-sans text-4xl font-bold text-[#151875] mb-12">
                Featured Products
              </h2>
            </Fade>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </section>
  );
};

export default ProductsPage;
