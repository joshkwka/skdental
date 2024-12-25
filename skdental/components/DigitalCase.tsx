import React, { useState } from "react";

const DigitalCase = () => {
  type TabKey = "iTero" | "Dentsply Sirona";

  const [activeTab, setActiveTab] = useState<TabKey>("iTero");

  const instructions: Record<TabKey, React.JSX.Element> = {
    iTero: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">iTero Digital Case Submission</h3>
        <p>1. Contact Align Technology directly to add S K Dental to your list of "Favorite Labs".</p>
        <p>2. Provide S K Dental Lab ID as 000.</p>
        <p>3. Under "Partner" search for S K Dental by entering skdentalceramic@gmail.com and request partnership.</p>
        <p>4. Once partnership is approved, you can select S K Dental when completing the digital Rx.</p>
      </div>
    ),
    "Dentsply Sirona": (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Dentsply Sirona Digital Case Submission</h3>
        <p>1. Open your Dentsply Sirona's "Connect Software".</p>
        <p>2. Navigate to the "Case Submission" section and "Create New Case".</p>
        <p>3. Scan your patient's case (if not already done).</p>
        <p>4. Fill out patient details.</p>
        <p>5. In the "Lab Selection" step, select S K Dental Studio as the lab.</p>
        <p>6. Click "Submit" and await confirmation.</p>
      </div>
    ),
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
          iTero
        </button>
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "Dentsply Sirona"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Dentsply Sirona")}
        >
          Dentsply Sirona
        </button>
      </div>

      {/* Content and Image */}
      <div className="mt-6 flex flex-col sm:flex-row md:items-start md:space-x-8">
        {/* Instructions Section */}
        <div className="flex-1">{instructions[activeTab]}</div>

        {/* Image Section */}
        <div className="mt-4 sm:mt-0 sm:w-1/3">
          <img
            src="/images/digitalcase/itero-261x533.png"
            alt="Digital Case Illustration"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalCase;
