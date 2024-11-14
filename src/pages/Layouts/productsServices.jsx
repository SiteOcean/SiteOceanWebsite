import NavBar from "@/Components/NavBar";
import React from "react";

const ProductsServicesInfo = () => {
  return (
    <div> <NavBar />
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center">Add Products & Services</h2>

      {/* Section 1: Product Listings */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">1. Display Your Products</h3>
        <p className="mt-4 text-gray-700">
          Add a detailed list of your products with descriptions, prices, and high-quality images. Make it easier for customers to browse and understand your offerings.
        </p>
      </section>

      {/* Section 2: Service Descriptions */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">2. Highlight Your Services</h3>
        <p className="mt-4 text-gray-700">
          Provide a comprehensive overview of the services you offer. Include details such as service type, duration, and pricing, helping customers choose the right service for their needs.
        </p>
      </section>

      {/* Section 3: Easy Management */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800">3. Manage Listings Effortlessly</h3>
        <p className="mt-4 text-gray-700">
          Update or remove listings easily. Keep your product and service offerings fresh and relevant, ensuring customers always have access to the most accurate information.
        </p>
      </section>
    </div>
    </div>
  );
};

export default ProductsServicesInfo;
