import React from 'react';

export default function CloudDev (){

    return(<div className="bg-[#59d7e7]  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-md overflow-hidden">
            <img
              className="w-full h-72 object-cover"
              src="/images/cloud.jpg" // Replace with your image path
              alt="Cloud Development"
              priority={true}
            />
            <div className="p-8">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Cloud Development
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Cloud computing is revolutionizing the way applications are developed, deployed, and maintained. In this section, you'll learn how to build and manage applications in cloud environments like AWS, Google Cloud, and Microsoft Azure, ensuring that your systems are scalable, cost-effective, and highly available.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                This course covers the basics of cloud infrastructure, serverless computing, containerization with Docker, and the use of CI/CD pipelines to automate deployments. You’ll also learn how to monitor and scale applications in real-time to meet the demands of your users.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-6">Technologies and Tools:</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>AWS, Google Cloud, and Azure for cloud infrastructure and services.</li>
                <li>Docker for containerization and application deployment.</li>
                <li>Serverless architecture for building scalable, event-driven systems.</li>
                <li>CI/CD pipelines to automate testing and deployment processes.</li>
                <li>Monitoring and scaling with tools like CloudWatch, Prometheus, and Grafana.</li>
              </ul>
              <p className="mt-4 text-gray-600 text-lg">
                By mastering cloud development, you'll be prepared to deploy and manage applications that are resilient, flexible, and ready to grow with user demand.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )

}