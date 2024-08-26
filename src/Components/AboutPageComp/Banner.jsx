import React from "react";

const Banner = () => {
  return (
    <div className="bg-white min-h-[90vh]">
      <div className="max-w-7xl mx-auto py-7 sm:py-10 px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="text-xl tracking-tight bg-gradient-to-r sm:p-0 from-[#b936ec] to-[#fc0ef0] text-transparent bg-clip-text sm:text-2xl font-bold">
            Learn More About SiteOcean
          </h2>
          <div className="mt-4 text-lg text-gray-500 sm:w-[70%] mx-auto font-serif">
            We're a startup dedicated to developing a local search engine app that empowers users to discover businesses, services, and events in their community. Experience the full potential of your neighborhood with our comprehensive and user-friendly platform.
            <br/><br/>
            Supporting local businesses is vital for building strong communities. That's why we're committed to making it easy for users to find and connect with local businesses and services that meet their needs.
            <span className="text-slate-600">
              Our app is designed to be intuitive and user-friendly, with powerful search capabilities that enable users to find what they're looking for quickly and easily. Users can search by category, location, or keyword and view detailed information on each listing, including reviews, ratings, and photos.
            </span>
          </div>
          <span className="bg-gradient-to-r text-[#b936ec] text-[17px] font-bold  to-[#36045a] inline-block text-transparent bg-clip-text mt-[10px] md:w-[70%]">Experience the innovation of our app, where seamless organization, constant connectivity, and a competitive edge in the business world are at your fingertips, empowering you to stay ahead of the curve.</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-3 px-4 lg:py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl text-[#b936ec] sm:text-4xl font-bold uppercase">Join With Us</h2>
        <div className="md:mt-4 text-lg text-gray-600 sm:w-[70%] mx-auto font-serif">
          Join our innovative startup in the local search engine industry today and be a part of a game-changing project that empowers everyone to create their own appsite. We're seeking passionate individuals who want to make a difference in the world of technology. Come and join us to revolutionize the way people connect with local businesses!
        </div>
      </div>
    </div>
  );
};

export default Banner;
