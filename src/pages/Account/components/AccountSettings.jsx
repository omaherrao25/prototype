import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <div 
      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
        enabled ? 'bg-eco-green' : 'bg-eco-border'
      }`}
      onClick={() => setEnabled(!enabled)}
    >
      <motion.div
        className="bg-white w-4 h-4 rounded-full shadow-sm"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        animate={{ x: enabled ? 20 : 0 }}
      />
    </div>
  );
};

const AccountSettings = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotions, setPromotions] = useState(false);

  return (
    <div className="space-y-10 max-w-3xl">
      {/* Change Password */}
      <section>
        <h3 className="font-heading text-2xl text-eco-text mb-6">Change Password</h3>
        <div className="bg-white border border-eco-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-eco-text/80 mb-2">Current Password</label>
            <input 
              type="password" 
              className="w-full bg-eco-bg border border-eco-border rounded-lg px-4 py-3 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-eco-text/80 mb-2">New Password</label>
            <input 
              type="password" 
              className="w-full bg-eco-bg border border-eco-border rounded-lg px-4 py-3 text-eco-text focus:outline-none focus:border-eco-green/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div className="pt-2">
            <button className="btn-primary rounded-xl px-6 py-2.5">Update Password</button>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section>
        <h3 className="font-heading text-2xl text-eco-text mb-6">Notification Preferences</h3>
        <div className="bg-white border border-eco-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-eco-text">Email Notifications</p>
              <p className="text-sm text-eco-text/70 mt-1">Receive emails about your account activity.</p>
            </div>
            <Toggle enabled={emailNotifs} setEnabled={setEmailNotifs} />
          </div>
          
          <div className="h-px w-full bg-eco-border/50"></div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-eco-text">Order Updates</p>
              <p className="text-sm text-eco-text/70 mt-1">Receive texts or emails when your order status changes.</p>
            </div>
            <Toggle enabled={orderUpdates} setEnabled={setOrderUpdates} />
          </div>

          <div className="h-px w-full bg-eco-border/50"></div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-eco-text">Promotions & News</p>
              <p className="text-sm text-eco-text/70 mt-1">Hear about our new arrivals and exclusive offers.</p>
            </div>
            <Toggle enabled={promotions} setEnabled={setPromotions} />
          </div>
        </div>
      </section>

      {/* Privacy Settings */}
      <section>
        <h3 className="font-heading text-2xl text-eco-text mb-6">Privacy</h3>
        <div className="bg-white border border-eco-border rounded-2xl p-6 sm:p-8">
          <p className="text-sm text-eco-text/80 leading-relaxed mb-6">
            We value your privacy and security. You can download a copy of your personal data or request to delete your account permanently.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-outline border-eco-border rounded-xl px-5 py-2.5">Download Data</button>
            <button className="text-red-500 font-medium px-4 py-2.5 hover:bg-red-50 rounded-xl transition-colors">Delete Account</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;
