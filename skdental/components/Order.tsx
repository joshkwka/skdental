import { FaDownload } from "react-icons/fa";

const Order = () => {
  return (
    <section id="order" className="mt-24 my-8 py-8 px-6 bg-gray-100 rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6 text-center text-gray-800">
          Order from S K Dental
        </h2>
      </div>
      <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
        <li>Call us at (604) 273-1163 to discuss your needs.</li>
        <li>Confirm the product details and requirements.</li>
        <li>
          Print and complete the{" "}
          <a
            href="/rx-form.pdf"
            download
            className="inline-flex items-center text-blue-500 hover:underline"
          >
            
            <span>Rx Form </span>
            <FaDownload className="mr-2" />
          </a>.
        </li>
        <li>Prepare any additional documentation or details.</li>
        <li>Submit the order through email or in-person delivery.</li>
      </ol>
    </section>
  );
};

export default Order;
