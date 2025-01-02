import RxForm from "./helper/RxForm";

const Order = () => {
  return (
    <section id="order" className="mt-24 my-8 py-8 px-6 bg-[var(--product-background)] rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl xs:text-3xl font-bold mb-6 text-center text-gray-800">
          Order from S K Dental
        </h2>
      </div>
      <div className="flex justify-center">
        <ol className="ml-0 lg:ml-20 items-left list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>Call us at (604) 273-1163 to discuss your needs.</li>
          <li>Confirm the product details and requirements.</li>
          <li>
            Print and complete the <RxForm />.
          </li>
          <li>Include the completed form along with your case.</li>
          <li>Prepare any additional documentation or details.</li>
          <li>Submit the order through email or in-person delivery.</li>
        </ol>
      </div>
    </section>
  );
};

export default Order;
