import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        <Link to="/admin" className="hover:bg-gray-700 p-2 rounded">
          Admin Alerts
        </Link>
        <Link to="/agencies" className="hover:bg-gray-700 p-2 rounded">
          Agencies
        </Link>
        <Link to="/about" className="hover:bg-gray-700 p-2 rounded">
          About
        </Link>
        <Link to="/chat" className="hover:bg-gray-700 p-2 rounded">
          Chat
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
