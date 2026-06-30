import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MyAccountOverview = () => {
  const [editPersonal, setEditPersonal] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'john.doe@example.com',
    mobile: '+1234567890'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-10 max-w-3xl">
      {/* Personal Information */}
      <div className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 tracking-wide">Personal Information</h2>
          <button 
            onClick={() => setEditPersonal(!editPersonal)}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {editPersonal ? 'Save' : 'Edit'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!editPersonal}
            className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-blue-500 transition-colors disabled:bg-gray-50/50 disabled:text-gray-500"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!editPersonal}
            className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-blue-500 transition-colors disabled:bg-gray-50/50 disabled:text-gray-500"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-gray-700 mb-4">Your Gender</h3>
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                disabled={!editPersonal}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 disabled:opacity-50"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Male</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                disabled={!editPersonal}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 disabled:opacity-50"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Female</span>
            </label>
          </div>
        </div>
      </div>

      {/* Email Address */}
      <div className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 tracking-wide">Email Address</h2>
          <button 
            onClick={() => setEditEmail(!editEmail)}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {editEmail ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="w-full sm:w-1/2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!editEmail}
            className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-blue-500 transition-colors disabled:bg-gray-50/50 disabled:text-gray-500"
            placeholder="Email Address"
          />
        </div>
      </div>

      {/* Mobile Number */}
      <div className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 tracking-wide">Mobile Number</h2>
          <button 
            onClick={() => setEditMobile(!editMobile)}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {editMobile ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="w-full sm:w-1/2">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            disabled={!editMobile}
            className="w-full px-4 py-3 border border-gray-200 rounded bg-white text-gray-600 focus:outline-none focus:border-blue-500 transition-colors disabled:bg-gray-50/50 disabled:text-gray-500"
            placeholder="Mobile Number"
          />
        </div>
      </div>

      {/* Delete Account */}
      <div className="pt-8">
        <button className="text-red-500 font-medium hover:text-red-700 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default MyAccountOverview;
