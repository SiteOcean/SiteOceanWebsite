import React from "react";

const Banner = () => {
  return (
    <div className="w-[100%] md:w-[90%] mx-auto py-12">
      {/* Introduction Section */}
      <section className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500">About Siteocean Pvt Ltd</h1>
        <p className="text-lg mt-4 text-gray-600">
          At Siteocean Pvt Ltd, we are dedicated to creating innovative digital solutions and empowering the next generation of IT professionals.
        </p>
      </section>
{/* <div className="bg-[#2ab3c5]">fgdgdgg</div> */}
      {/* Mission Statement Section */}
      <section className="bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 p-8 text-white rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4">
          Our mission is to bridge the gap between technology and businesses by developing cutting-edge web and mobile applications, and providing comprehensive training to help freshers and students kickstart their careers in the IT industry.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12 p-2">
  <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center sm:text-left">What We Do</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-blue-600">Web Development</h3>
      <p className="mt-4 text-gray-700">
        We specialize in developing hyper-local business search applications that are responsive and tailored to your business needs. <strong className="text-blue-600">Exciting things are coming! Launching soon!</strong>
      </p>
    </div>
    <div className="p-6 bg-purple-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-purple-600">Mobile App Development</h3>
      <p className="mt-4 text-gray-700">
      Our mobile app solutions focus on creating hyper-local business search platforms with seamless user experiences across all devices. <strong className="text-purple-600">Coming your way soon!</strong>
    </p>

    </div>
    <div className="p-6 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-green-600">IT Training Programs</h3>
      <p className="mt-4 text-gray-700">
        We offer full stack internship trainings in MERN stack, Java full stack, Python full stack, digital marketing, C, and C++ to equip students and freshers with the skills needed in the IT industry.
      </p>
    </div>
  </div>
</section>


      {/* Team Section */}
      <section>
        {/* <h2 className="text-3xl font-bold text-indigo-600 mb-6">Meet Our Team</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/learningNeverEnds.png"
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto "
              priority={true}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4"></h3>
            {/* <p className="text-gray-600">Founder & CEO</p> */}
          </div>
          <div className="text-center">
            <img
              src="/Frontend.png"
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto bg-contain"
              priority={true}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4"></h3>
            {/* <p className="text-gray-600">CTO & Lead Developer</p> */}
          </div>
          <div className="text-center">
            <img
              src="/backendDevImg.png"
              alt="Team Member 3"
              width={200}
              height={200}
              className="rounded-full mx-auto bg-contain"
              priority={true}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4"></h3>
            {/* <p className="text-gray-600">Head of Marketing</p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
