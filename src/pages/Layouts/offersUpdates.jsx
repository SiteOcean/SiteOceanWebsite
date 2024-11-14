import NavBar from "@/Components/NavBar";
import React from "react";

const OffersInfo = () => {
  return (
    <div> <NavBar />
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Real-Time Offers & Product Management</h2>

      {/* Section 1: Instant Updates */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">1. Update Offers Instantly</h3>
        <p className="mt-4 text-gray-700">
          Create time-sensitive offers and discounts with real-time updates. Engage customers with attractive deals and keep your business competitive in the market.
        </p>
      </section>

      {/* Section 2: Product Management */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">2. Seamless Product Edits</h3>
        <p className="mt-4 text-gray-700">
          Easily edit product details such as pricing, descriptions, and stock availability. Ensure your product information is always up-to-date to meet customer expectations.
        </p>
      </section>

      {/* Section 3: Remove Outdated Items */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800">3. Delete Old Listings</h3>
        <p className="mt-4 text-gray-700">
          Remove outdated or unavailable products quickly. Keep your offerings streamlined and relevant, providing customers with a clear and organized selection.
        </p>
      </section>
    </div>
    </div>
  );
};

export default OffersInfo;
