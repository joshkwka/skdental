"use client";

import React from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import ProductsList from "@/components/ProductsList";
import DigitalCase from "@/components/DigitalCase";
import Order from "@/components/Order";
import Footer from "@/components/Footer";



export default function Home() {

  return (
    <div className="scroll-container">
      <About />
      <ProductsList />
      <DigitalCase />
      <Order />


      <Footer />
      <Nav />
    </div>
  );
}
