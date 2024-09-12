import React from 'react';

export default function BackendDev (){

    return(<div className="bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            <img
              className="w-full h-[400px] "
              src="/backendPageImg.png" // Replace with your image path
              alt="Backend Development"
              priority={true}
            />
            <div className="p-3 md:p-8">
              <h2 className="text-4xl font-extrabold text-[#2c9aa8]">
                Backend Development
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Backend development is where the magic behind the scenes happens. It handles the logic, database interactions, authentication, and data management for web applications. In this section, you will dive deep into server-side technologies and learn how to build scalable, secure, and robust backends using Node.js, Express, and MongoDB.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                You’ll start by understanding how to create a RESTful API, handle HTTP requests, manage data through databases, and implement security best practices. Learn how backend services communicate with frontend applications and how you can build flexible, scalable systems.
              </p>
              <h3 className="text-2xl font-bold text-[#2c9aa8] mt-6">Technologies and Tools:</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Node.js for building fast, scalable server-side applications.</li>
                <li>Express.js for creating APIs and handling routing.</li>
                <li>MongoDB for managing databases and storing application data efficiently.</li>
                <li>RESTful API principles for building maintainable and scalable systems.</li>
                <li>Authentication and authorization using JWT, OAuth, and other protocols.</li>
              </ul>
              <p className="mt-4 text-gray-600 text-lg">
                This module will equip you with the knowledge to build powerful server-side applications that integrate seamlessly with the frontend, ensuring the best possible experience for users.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )

}