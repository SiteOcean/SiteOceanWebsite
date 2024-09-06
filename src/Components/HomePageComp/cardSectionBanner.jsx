import Link from 'next/link';
import React from 'react';

const CardSection = () => {
  return (
    <section className="bg-[#59d7e7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-50 sm:text-4xl">
            Learn Full Stack Development
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-50">
            Start your journey to becoming Link full stack developer!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 md:h-[230px] "
              src="/frontendDevImg.png" // Replace with your image path
              alt="Full Stack Development"
              priority={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Frontend Development
              </h3>
              <p className="mt-2 text-gray-600">
                Learn to create amazing user interfaces with HTML, CSS, and React.
              </p>
              <Link
                href="/Layouts/frontendDevelopment"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 md:h-[230px]"
              src="/backendDevImg.png" // Replace with your image path
              alt="Backend Development"
              priority={true}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Backend Development
              </h3>
              <p className="mt-2 text-gray-600">
                Master server-side logic, databases, and APIs with Node.js and MongoDB.
              </p>
              <Link
                href="/Layouts/backendDevelopment"
                className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <img
    className="w-full h-48"
    src="/cloudDevImg.png" // Replace with your image path
    alt="Cloud"
    priority={true}
  />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900">Cloud</h3>
    <p className="mt-2 text-gray-600">
      Learn how to deploy, manage, and scale applications in the cloud.
    </p>
    <Link
      href="/Layouts/cloud"
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
