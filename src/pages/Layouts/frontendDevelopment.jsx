import React from 'react';

export default function FrontendDevPage (){

    return(<div className="bg-[#59d7e7] py-12">
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
          <img
            className="w-full h-[300px] object-fill"
            src="/frontendPageImg.png" // Replace with your image path
            alt="Frontend Development"
            priority={true}
          />
          <div className="p-8">
            <h2 className="text-4xl font-extrabold text-[#2c9aa8]">
              Frontend Development
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Frontend development is the art of crafting intuitive, efficient, and responsive user interfaces for websites and web applications. It involves the use of core web technologies like HTML, CSS, and JavaScript, along with modern frameworks such as React, Vue, and Angular.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              In this course, you will learn how to structure web pages with semantic HTML5, style them effectively using CSS3 (including modern layout techniques like Flexbox and Grid), and bring them to life with JavaScript, focusing on both core functionality and enhanced interactivity.
            </p>
            <h3 className="text-2xl font-bold text-[#2c9aa8] mt-6">Technologies and Tools:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>HTML5 for semantic structure and SEO-friendly markup.</li>
              <li>CSS3 for modern styling, including animations and responsive design.</li>
              <li>JavaScript for DOM manipulation, event handling, and asynchronous programming.</li>
              <li>React.js for building reusable components and dynamic UIs.</li>
              <li>Responsive design principles to ensure your sites look great on all devices.</li>
            </ul>
            <p className="mt-4 text-gray-600 text-lg">
              By the end of this module, you'll have the skills to design and implement professional, polished web interfaces that deliver a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    )

}