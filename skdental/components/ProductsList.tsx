import React, { useState } from "react";

const ProductsList = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("Crown & Bridge");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="products" className="mt-24 my-8 py-4 px-4 bg-gray-50 rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6 text-center text-gray-800">
          Our Products
        </h2>
      </div>

      {/* Crown & Bridge */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors"
          onClick={() => toggleSection("Crown & Bridge")}
        >
          Crown & Bridge
        </h3>
        {expandedSection === "Crown & Bridge" && (
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
        )}
      </div>

      {/* Implants */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors"
          onClick={() => toggleSection("Implants")}
        >
          Implants
        </h3>
        {expandedSection === "Implants" && (
          <p className="mt-2 text-gray-600">
            SK Dental offers precision-crafted implants compatible with a wide range of systems. These implants are
            designed for optimal osseointegration and durability, ensuring long-lasting performance.
          </p>
        )}
      </div>

      {/* Night Guard */}
      <div className="mb-6">
        <h3
          className="text-xl font-semibold cursor-pointer text-gray-700 hover:text-blue-500 transition-colors"
          onClick={() => toggleSection("Night Guard")}
        >
          Night Guard
        </h3>
        {expandedSection === "Night Guard" && (
          <p className="mt-2 text-gray-600">
            Our custom-fitted night guards provide effective protection against bruxism (teeth grinding) and ensure
            comfort during use. Available in soft, hard, and hybrid materials to suit individual needs.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
