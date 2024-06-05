import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center overflow-y-auto h-full py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About resQhub</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Project Description:</h2>
            <p className="text-lg leading-relaxed">
              resQhub is a platform designed to facilitate efficient collaboration between rescue agencies and users in emergency situations. It allows rescue agencies to register with their specialties, equipment, manpower, and location coordinates. Users can then access the platform to find nearby rescue agencies and request assistance in emergencies. With its user-friendly interface and comprehensive features, [Your Project Name] aims to improve the coordination and effectiveness of rescue operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>User Registration and Authentication</li>
              <li>Rescue Agency Registration</li>
              <li>Interactive Map with Agency Locations</li>
              <li>Request Assistance Functionality</li>
              <li>Real-time Chat between Users and Agencies</li>
              <li>Efficient Agency Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Benefits:</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Quick Access to Rescue Services</li>
              <li>Improved Coordination in Emergency Situations</li>
              <li>Enhanced Communication between Agencies and Users</li>
              <li>Increased Efficiency in Rescue Operations</li>
              <li>Effective Utilization of Resources</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Usage Guide:</h2>
            <ol className="list-decimal pl-6 text-lg">
              <li>User Registration</li>
              <li>Agency Registration</li>
              <li>Browsing Nearby Agencies</li>
              <li>Requesting Assistance</li>
              <li>Initiating Real-time Chat</li>
              <li>Coordinating Rescue Operations</li>
              <li>Providing Feedback and Reviews</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
