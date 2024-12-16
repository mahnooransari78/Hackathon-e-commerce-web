import Offer from "./component/container4";
import Containers from "./component/containers";
import Products from "./component/contanier2";
import Footer from "./component/footer";
import Hero from "./component/hero-section";
import Navbar from "./component/navbar";
import Panal from "./component/panal";
import React from 'react'
import Trending from "./component/tranding";
import UniqueFeature from './component/uniqe-Feature'

export default function Home() {
  return (
    <main>
      <Panal />
      <Navbar />
      <Hero />
      <Containers />
      <Products />
      <Offer />
      <UniqueFeature />
      <Trending />
      <Footer /> 
    </main>
  );
}
