import React, { useState } from "react";
import Image from "next/image";

const ProductsList = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("Crown & Bridge");

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null); 
    } else {
      setExpandedSection(null); 
      setTimeout(() => {
        setExpandedSection(section);
      }, 300); 
    }
  };

  return (
    <section id="products" className="mt-24 my-8 py-4 px-4 bg-[var(--product-background)] rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6 text-center text-gray-800">
          Our Products
        </h2>
      </div>
      <p className="mb-6 text-gray-700 text-center max-w-3xl mx-auto text-lg">
      Every product we craft is tailored to meet the unique specifications of each dentist, ensuring the highest level of precision and satisfaction for you and your patients.
      </p>

      {/* Crown & Bridge */}
      <div className="ml-0 lg:ml-20 mb-6 flex flex-wrap">
      {/* Left Container */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h3
          className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors mb-4"
          onClick={() => toggleSection("Crown & Bridge")}
        >
          Crown & Bridge
        </h3>
        <div className="flex flex-col">
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSection === "Crown & Bridge" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <strong>IPS e.max:</strong> Aesthetic, durable ceramic ideal for anterior and posterior restorations.
              </li>
              <li>
                <strong>Full Cast:</strong> High-strength metal crowns offering durability for posterior teeth.
              </li>
              <li>
                <strong>Zirconia:</strong> Strong, biocompatible ceramic with excellent aesthetics for anterior and posterior teeth.
              </li>
              <li>
                <strong>PFM (Porcelain-Fused-to-Metal):</strong> Combines strength and aesthetics with a metal substructure.
              </li>
            </ul>
          </div>
        </div>
      </div>

        {/* Right Container */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-300 ease-in-out transform ${
            expandedSection === "Crown & Bridge"
              ? "scale-100 opacity-100 max-h-screen"
              : "scale-90 opacity-0 max-h-0"
          }`}
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/products/crown-bridge.jpg"
              alt="Crown & Bridge"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Implants */}
      <div className="ml-0 lg:ml-20 mb-6 flex flex-wrap">
        {/* Left Container */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h3
            className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors mb-4"
            onClick={() => toggleSection("Implants")}
          >
            Implants
          </h3>
          <div className="flex flex-col">
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === "Implants" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-gray-600">
                SK Dental offers precision-crafted implants compatible with a wide range of systems. These implants are
                designed for optimal osseointegration and durability, ensuring long-lasting performance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-300 ease-in-out transform ${
            expandedSection === "Implants"
              ? "scale-100 opacity-100 max-h-screen"
              : "scale-90 opacity-0 max-h-0"
          }`}
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/products/implant.jpg"
              alt="Implants"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Night Guard */}
      <div className="ml-0 lg:ml-20 mb-6 flex flex-wrap">
        {/* Left Container */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h3
            className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors mb-4"
            onClick={() => toggleSection("Night Guard")}
          >
            Night Guard
          </h3>
          <div className="flex flex-col">
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === "Night Guard" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-gray-600">
                Our custom-fitted night guards provide effective protection against bruxism (teeth grinding) and ensure
                comfort during use. Available in soft, hard, and hybrid materials to suit individual needs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-300 ease-in-out transform ${
            expandedSection === "Night Guard"
              ? "scale-100 opacity-100 max-h-screen"
              : "scale-90 opacity-0 max-h-0"
          }`}
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/products/night-guard.jpg"
              alt="Night Guard"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductsList;
