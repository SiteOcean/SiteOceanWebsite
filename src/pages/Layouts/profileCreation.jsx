import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

const ProfileInfo = () => {
  return (
    <div> <NavBar />
    <div className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-lg m-3">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">Business Profile Creation</h2>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">1. Establish Your Online Identity</h3>
        <p className="mt-4 text-gray-700">
          Create a digital presence for your business with a comprehensive profile. Add essential details like business name, contact information, and location to help customers easily find you online.
        </p>
      </section>

      {/* Section 2: Features */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">2. Showcase Your Business Details</h3>
        <p className="mt-4 text-gray-700">
          Highlight key aspects of your business such as a brief description, business hours, and photos. This helps build trust and attract potential customers by showcasing your business offerings.
        </p>
      </section>

      {/* Section 3: Benefits */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800">3. Update Anytime, Anywhere</h3>
        <p className="mt-4 text-gray-700">
          Easily update your profile information to reflect changes in your business. Keep your customers informed with the latest updates, ensuring accurate and timely communication.
        </p>
      </section>
    </div>
    <Footer/>
    </div>

  );
};

export default ProfileInfo;
