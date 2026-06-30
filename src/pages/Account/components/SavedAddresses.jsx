import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, ArrowLeft } from 'lucide-react';

const initialAddresses = [
  {
    id: 1,
    label: 'Home',
    name: 'John Doe',
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
    name: 'John Doe',
    addressLine1: 'TechPark Tower, 5th Floor',
    addressLine2: 'Hinjewadi Phase 1',
    city: 'Pune',
    state: 'Maharashtra',
    zip: '411057',
    phone: '+91 98765 43210',
    isDefault: false,
  }
];

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    label: 'Home',
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    isDefault: false
  });

  const handleAddNew = () => {
    setFormData({
      label: 'Home',
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      isDefault: false
    });
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingId(address.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setAddresses(prev => prev.map(a => {
        if (a.id === editingId) {
          return { ...formData, id: editingId };
        }
        if (formData.isDefault && a.id !== editingId) {
          return { ...a, isDefault: false };
        }
        return a;
      }));
    } else {
      const newAddress = { ...formData, id: Date.now() };
      setAddresses(prev => {
        if (newAddress.isDefault) {
          return [newAddress, ...prev.map(a => ({ ...a, isDefault: false }))];
        }
        return [...prev, newAddress];
      });
    }
    setIsFormOpen(false);
  };

  if (isFormOpen) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <button 
          onClick={() => setIsFormOpen(false)}
          className="flex items-center gap-2 text-eco-text/70 hover:text-eco-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Addresses
        </button>
        
        <div className="bg-white border border-eco-border rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="font-heading text-2xl text-eco-text mb-6">
            {editingId ? 'Edit Address' : 'Add New Address'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-full">
                <label className="block text-sm font-medium text-eco-text/80 mb-2">Address Label</label>
                <div className="flex gap-3">
                  {['Home', 'Work', 'Other'].map(label => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, label }))}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        formData.label === label 
                          ? 'border-eco-green bg-eco-green/5 text-eco-green' 
                          : 'border-eco-border text-eco-text/70 hover:border-eco-green/50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-eco-text/80 mb-2">Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-eco-text/80 mb-2">Address Line 1</label>
                <input required type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-eco-text/80 mb-2">Address Line 2 (Optional)</label>
                <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-eco-text/80 mb-2">City</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-eco-text/80 mb-2">State</label>
                <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-eco-text/80 mb-2">ZIP Code</label>
                <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-eco-text/80 mb-2">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-eco-border rounded-lg px-4 py-2.5 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors" />
              </div>

              <div className="col-span-full pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="isDefault" checked={formData.isDefault} onChange={handleChange} className="w-4 h-4 text-eco-green border-eco-border rounded focus:ring-eco-green" />
                  <span className="text-sm font-medium text-eco-text">Set as default address</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-[#ff6122] hover:bg-[#e6551b] text-white py-3 rounded-lg font-medium transition-colors">
                {editingId ? 'Update Address' : 'Save Address'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button onClick={handleAddNew} className="bg-[#ff6122] hover:bg-[#e6551b] text-white rounded-xl px-5 py-2.5 flex items-center gap-2 font-medium transition-colors shadow-sm">
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
            className={`bg-white border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative ${
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
              {address.addressLine2 && <p>{address.addressLine2}</p>}
              <p>{address.city}, {address.state} {address.zip}</p>
              <p className="pt-2">Phone: {address.phone}</p>
            </div>

            <div className="flex items-center gap-3 ml-14">
              <button onClick={() => handleEdit(address)} className="text-sm font-medium text-eco-green hover:text-eco-green/70 transition-colors">Edit</button>
              <span className="w-px h-4 bg-eco-border"></span>
              <button onClick={() => handleDelete(address.id)} className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors">Delete</button>
            </div>
          </motion.div>
        ))}
        {addresses.length === 0 && (
          <div className="col-span-full py-12 text-center bg-offwhite rounded-2xl border border-eco-border">
            <p className="text-eco-text/60">No saved addresses found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedAddresses;
