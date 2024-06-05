import React, { useState } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    equipment: "",
    manpower: 0,
    latitude: 0,
    longitude: 0,
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/login");
    } catch (error) {
      console.error("Failed to register", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4">Register Agency</h2>
        <div className="grid grid-cols-2 gap-4">
          {['name', 'specialty', 'equipment', 'manpower', 'latitude', 'longitude', 'email', 'password'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
