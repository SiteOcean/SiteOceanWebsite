import React from 'react';

const NewFlexSection = () => {
  return (
    <div className='text-[19px] text-gray-600 relative bg-white'>
      {/* Section 1: Business Profile Creation */}
      <div className="flex flex-col-reverse sm:flex-row justify-center md:h-[90vh] items-center">
        <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
          <h1 className="text-xl font-bold sm:w-[70%] mb-2 mx-auto">
            Create Your Business Profile with Ease
          </h1>
          <p data-aos="fade-zoom-in" className="font-serif sm:w-[70%] mx-auto mb-4">
            Set up your online business profile effortlessly on Siteocean. Showcase your products, services, and contact details to attract local customers instantly. Ensure your business is always visible and up-to-date.
          </p>
        </div>

        <div data-aos="fade-up" className="w-full lg:w-1/2 px-4 py-4 bg-white">
          <img
            src={"/flexCardOne.png"}
            width={300}
            height={120}
            alt="Business Profile Creation"
            priority={true}
            className="w-full h-[360px] sm:h-[410px] sm:w-[90%] mx-auto my-auto rounded-lg"
          />
        </div>
      </div>

      {/* Section 2: Real-Time Product Updates */}
      <div className="flex flex-col-reverse sm:flex-row-reverse justify-center md:h-[90vh] items-center">
        <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
          <h1 className="text-xl sm:w-[70%] mx-auto font-bold mb-2">
            Real-Time Updates for Offers and Promotions
          </h1>
          <p data-aos="fade-zoom-in" className="font-serif sm:w-[70%] mx-auto mb-4">
            Keep your customers informed with instant updates on special offers, discounts, and new arrivals. Use Siteocean to boost your engagement and attract more local customers with timely notifications.
          </p>
        </div>

        <div data-aos="fade-up" className="w-full lg:w-1/2 px-4 py-4">
          <img
            src={"/flexCardTwo.png"}
            width={300}
            height={120}
            alt="Real-Time Updates"
            priority={true}
            className="w-full h-[360px] sm:h-[410px] sm:w-[90%] mx-auto my-auto rounded-lg"
          />
        </div>
      </div>

      {/* Section 3: Local Search and Instant Visibility */}
      <div className="flex flex-col-reverse sm:flex-row justify-center md:h-[90vh] items-center">
        <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
          <h1 className="text-xl sm:w-[70%] mx-auto font-bold mb-2">
            Enhance Your Local Visibility
          </h1>
          <p data-aos="fade-zoom-in" className="font-serif sm:w-[70%] mx-auto mb-4">
            Maximize your reach with Siteocean's hyper-local search engine. Connect with nearby customers actively looking for your products and services. Achieve instant visibility and drive more foot traffic to your business.
          </p>
        </div>

        <div data-aos="fade-up" className="w-full lg:w-1/2 px-4 py-4">
          <img
            src={"/newFlexThree.png"}
            width={300}
            height={120}
            alt="Local Search Visibility"
            priority={true}
            className="w-full h-[360px] sm:h-[410px] sm:w-[90%] mx-auto my-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewFlexSection;
