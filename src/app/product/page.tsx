'use client';
import { useState, useEffect } from 'react';

import ProductCard from '@/app/component/productCard';

import { Fade } from 'react-awesome-reveal';

import { client } from "@/sanity/lib/client";

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

const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]); // Initialize products state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product"][0...4] {
          _id,
          name,
          price,
          category,
          image {
            asset -> {
              url
            }
          }
        }`;

        const fetchedProducts = await client.fetch(query); // Fetch data from Sanity
        console.log(fetchedProducts, fetchedProducts.length);

        if (!fetchedProducts) {
          throw new Error("Failed to fetch products");
        }

        setProducts(fetchedProducts); // Store data in state
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProduct();
  }, []);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Products) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
