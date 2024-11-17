import Link from 'next/link';
import React from 'react';

const CardSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#44d0e2] via-[#59d7e7] to-purple-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-50 sm:text-4xl">
            Discover Local Businesses Instantly
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-50">
            Explore nearby products, services, and exclusive offers in real-time with Siteocean.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[300px] md:h-[280px]"
              src="/two.png" // Replace with your image path
              alt="Business Profile Creation"
              priority={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Create Your Business Profile
              </h3>
              <p className="mt-2 text-gray-600">
                Build an online presence by setting up your profile with detailed information about your business.
              </p>
              <Link
                href="/Layouts/profileCreation"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[300px] md:h-[280px]"
              src="/eight.png" // Replace with your image path
              alt="Add Products and Services"
              priority={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Showcase Products & Services
              </h3>
              <p className="mt-2 text-gray-600">
                Add your products and services to attract local customers and increase visibility.
              </p>
              <Link
                href="/Layouts/productsServices"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-[300px] md:h-[280px]"
              src="/nine.png" // Replace with your image path
              alt="Real-Time Offers"
              priority={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">Real-Time Offers & Updates</h3>
              <p className="mt-2 text-gray-600">
                Keep your customers informed with real-time updates on offers and promotions.
              </p>
              <Link
                href="/Layouts/offersUpdates"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
