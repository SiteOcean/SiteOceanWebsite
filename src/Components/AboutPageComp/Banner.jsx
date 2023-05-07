import React from "react";
const Banner = () => {
  
    return (
      <div className="bg-white min-h-[90vh]">
        <div className="max-w-7xl mx-auto py-9 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight text-gray-500 sm:text-4xl font-bold">
              Welcome to SiteOcean
            </h2>
            <div className="mt-4 text-lg text-gray-600 sm:w-[70%] mx-auto font-serif">
              We're a dynamic and forward-thinking startup that's passionate about leveraging the power of mobile and web-based technology to make life easier and more convenient for our users. Our team of experts has developed a range of innovative and intuitive apps that help users save time, stay organized, and stay connected.
              <br/><br/>
              Our local search engine app is dedicated to helping people find everything they need, from restaurants and shops to services and events, all within their local community.
              <br/><br/>
              We believe that supporting local businesses is key to building strong and vibrant communities. That's why we've made it our mission to make it easy for users to discover and connect with local businesses and services that meet their needs.
              <span>
                Our app is designed to be user-friendly and intuitive, with powerful search capabilities that enable users to find what they're looking for quickly and easily. People can search by category, location, or keyword and view detailed information on each listing, including reviews, ratings, and photos.
              </span>
            </div>
            <span className="bg-gradient-to-r from-[blue]  to-[#36045a] inline-block text-transparent bg-clip-text mt-[10px]">With our App, you'll be able to stay organized, stay connected, and stay ahead of the business.</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-3 px-4 lg:py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl tracking-tight text-gray-500 sm:text-4xl font-bold">Join With Us</h2>
          <div className="md:mt-4 text-lg text-gray-600 sm:w-[70%] mx-auto font-serif">
          Join our innovative startup of local search engine today and be a part of a game-changing project that empowers everyone to create their own appsite. We're looking for those who are passionate about technology and want to make a difference in the world. Come and join us to revolutionize the way people connect with local businesses!
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  