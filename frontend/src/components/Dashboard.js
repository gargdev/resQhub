import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getAgenciesInRange } from '../api';
import ChatComponent from './ChatComponent';

const Dashboard = () => {
  const [position, setPosition] = useState(null);
  const [agencies, setAgencies] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState(null);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Circle center={position} radius={1000} />
        <Circle center={position} radius={2000} />
        <Circle center={position} radius={3000} />
      </Marker>
    );
  };

  useEffect(() => {
    if (position) {
      const fetchAgencies = async () => {
        try {
          const { data } = await getAgenciesInRange(position.lat, position.lng, 3000);
          setAgencies(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchAgencies();
    }
  }, [position]);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
        {agencies.map((agency) => (
          <Marker key={agency._id} position={[agency.latitude, agency.longitude]} />
        ))}
      </MapContainer>
      <div className="flex">
        <div className="w-full p-4">
        <h2 className="text-xl font-bold mb-2">Agencies in Zone</h2>
        <ul>
          {agencies.map((agency) => (
            <li key={agency._id} className="mb-2">
              <span>{agency.name}</span>
              <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                onClick={() => setSelectedAgency(agency)}
              >
                Chat
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedAgency && <ChatComponent agency={selectedAgency} />}
      </div>
    </div>
  );
};

export default Dashboard;
