import React, { useState } from "react";
import Image from "next/image";

const DigitalCase = () => {
  type TabKey = "iTero" | "3Shape TRIOS" | "Dentsply Sirona CEREC";

  const [activeTab, setActiveTab] = useState<TabKey>("iTero");

  const instructions: Record<TabKey, React.JSX.Element> = {
    iTero: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">iTero® Digital Case Submission</h3>
        <p>1. Contact Align Technology directly to add S K Dental to your list of &quot;Favorite Labs&quot;.</p>
        <p>2. Provide S K Dental&apos;s Lab ID as 104490.</p>
        <p>3. In settings, select &quot;Sync Configuration&quot;.</p>
        <p>4. Submit your case and await confirmation.</p>
        <p>5. Send your STL file to <a 
              href="mailto:skdentalceramic@gmail.com" 
              className="hover:underline"
            >
              skdentalceramic@gmail.com
            </a>
            .
        </p> 
      </div>
    ),
    "3Shape TRIOS": (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">3Shape TRIOS® Digital Case Submission</h3>
        <p>1. Open your 3Shape software and log in to your account.</p>
        <p>2. Select &quot;Send to Lab&quot;.</p>
        <p>3. Enter S K Dental Studio&apos;s email: skdentalceramic@gmail.com.</p>
        <p>4. Submit and await confirmation.</p>
        <p>5. Send your STL file to <a 
              href="mailto:skdentalceramic@gmail.com" 
              className="hover:underline"
            >
              skdentalceramic@gmail.com
            </a>
            .
        </p> 
      </div>
    ),
    "Dentsply Sirona CEREC": (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Dentsply Sirona CEREC® Digital Case Submission</h3>
        <p>1. Open your Dentsply Sirona&apos;s &quot;Connect Software&quot;.</p>
        <p>2. Navigate to the &quot;Submit Scan&quot; section.</p>
        <p>3. Fill out patient details.</p>
        <p>4. Enter S K Dental Studio&apos;s email: skdentalceramic@gmail.com.</p>
        <p>5. Submit and await confirmation.</p>
        <p>6. Send your STL file to <a 
              href="mailto:skdentalceramic@gmail.com" 
              className="hover:underline"
            >
              skdentalceramic@gmail.com
            </a>
            .
        </p> 
      </div>
    ),
  };

  const images: Record<TabKey, { src: string; width: number; height: number }> = {
    iTero: {
      src: "/images/digitalcase/itero-261x533.png",
      width: 261,
      height: 533,
    },
    "3Shape TRIOS": {
      src: "/images/digitalcase/3shape.avif",
      width: 500,
      height: 400,
    },
    "Dentsply Sirona CEREC": {
      src: "/images/digitalcase/dentsplysirona.jpeg",
      width: 500,
      height: 400,
    },
  };
  

  return (
    <section id="digital-case" className="mt-24 my-8 py-8 px-4">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6 text-center">
          Submit Digital Case
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300">
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "iTero"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("iTero")}
        >
          iTero®
        </button>
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "3Shape TRIOS"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("3Shape TRIOS")}
        >
          3Shape TRIOS®
        </button>
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "Dentsply Sirona CEREC"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Dentsply Sirona CEREC")}
        >
          Dentsply Sirona CEREC®
        </button>
      </div>

      {/* Content and Image */}
      <div className="mt-6 flex flex-col sm:flex-row md:items-start md:space-x-8">
        {/* Instructions Section */}
        <div className="flex-1">{instructions[activeTab]}</div>

        {/* Image Section */}
        <div className="mt-4 sm:mt-0 sm:w-1/3 flex justify-center items-center">
          <Image
            src={images[activeTab].src}
            alt={`${activeTab} Illustration`}
            className="rounded-lg shadow-md"
            width={images[activeTab].width}
            height={images[activeTab].height}
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalCase;
