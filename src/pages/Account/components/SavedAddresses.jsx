import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plus } from 'lucide-react';

const SavedAddresses = () => {
  const addresses = [
    {
      id: 1,
      label: 'Home',
      name: 'Priya Sharma',
      addressLine1: '124 Lotus Apartment, Block C',
      addressLine2: 'Koregaon Park',
      city: 'Pune',
      state: 'Maharashtra',
      zip: '411001',
      phone: '+91 98765 43210',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Work',
      name: 'Priya Sharma',
      addressLine1: 'TechPark Tower, 5th Floor',
      addressLine2: 'Hinjewadi Phase 1',
      city: 'Pune',
      state: 'Maharashtra',
      zip: '411057',
      phone: '+91 98765 43210',
      isDefault: false,
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button className="btn-primary rounded-xl px-5 py-2.5 flex items-center gap-2">
          <Plus strokeWidth={2} className="w-4 h-4" />
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={address.id}
            className={`bg-offwhite border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative ${
              address.isDefault ? 'border-eco-green/40 shadow-sm' : 'border-eco-border hover:shadow-sm'
            }`}
          >
            {address.isDefault && (
              <div className="absolute top-0 right-0 bg-eco-green text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl font-medium tracking-wide">
                Default
              </div>
            )}
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-eco-beige/50 flex items-center justify-center text-eco-green flex-shrink-0">
                <MapPin strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-eco-text text-lg flex items-center gap-2">
                  {address.label}
                </h3>
                <p className="text-sm text-eco-text/70">{address.name}</p>
              </div>
            </div>

            <div className="space-y-1 text-eco-text/80 text-sm mb-6 ml-14">
              <p>{address.addressLine1}</p>
              <p>{address.addressLine2}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
              <p className="pt-2">Phone: {address.phone}</p>
            </div>

            <div className="flex items-center gap-3 ml-14">
              <button className="text-sm font-medium text-eco-green hover:text-eco-green/70 transition-colors">Edit</button>
              <span className="w-px h-4 bg-eco-border"></span>
              <button className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors">Delete</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;
