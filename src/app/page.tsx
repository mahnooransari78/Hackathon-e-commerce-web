import Offer from "./component/container4";
import Products from "./component/contanier2";
import Hero from "./component/hero-section";
import React from 'react'
import Trending from "./component/tranding";
import UniqueFeature from './component/uniqe-Feature'
import ProductsPage from "./product/page";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <ProductsPage />
      <Products />
      <Offer />
      <UniqueFeature />
      <Trending />
      
    </main>
  );
}
