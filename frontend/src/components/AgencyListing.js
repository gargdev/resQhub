import React, { useState, useEffect } from 'react';
import { getAllAgencies } from '../api';

const AgencyListing = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const { data } = await getAllAgencies();
        setAgencies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgencies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Agency Listing</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Name</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Specialty</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Equipment</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Manpower</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Latitude</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Longitude</th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-center">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {agencies.map((agency) => (
              <tr key={agency._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4 text-center">{agency.name}</td>
                <td className="py-3 px-4 text-center">{agency.specialty}</td>
                <td className="py-3 px-4 text-center">{agency.equipment}</td>
                <td className="py-3 px-4 text-center">{agency.manpower}</td>
                <td className="py-3 px-4 text-center">{agency.latitude}</td>
                <td className="py-3 px-4 text-center">{agency.longitude}</td>
                <td className="py-3 px-4 text-center">{agency.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgencyListing;
