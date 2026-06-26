import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MyAccountOverview from './components/MyAccountOverview';
import OrdersList from './components/OrdersList';
import Wishlist from './components/Wishlist';
import SavedAddresses from './components/SavedAddresses';
import AccountSettings from './components/AccountSettings';
import WriteReview from './components/WriteReview';

const Account = () => {
  const location = useLocation();

  // Determine active tab for header
  let activeTabName = 'My Account';
  if (location.pathname.includes('/account/order')) activeTabName = 'Orders';
  else if (location.pathname.includes('/account/wishlist')) activeTabName = 'Wishlist';
  else if (location.pathname.includes('/account/addresses')) activeTabName = 'Addresses';
  else if (location.pathname.includes('/account/settings')) activeTabName = 'Settings';

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 font-body">
      <div className="container-pad max-w-[1400px]">
        {/* Header - Mobile Only */}
        <div className="lg:hidden mb-8">
          <h1 className="font-heading text-3xl text-eco-text">My Account</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Header - Desktop Only */}
            <div className="hidden lg:block mb-10">
              <h1 className="font-heading text-4xl text-eco-text capitalize tracking-wide">
                {activeTabName}
              </h1>
              <div className="h-px w-16 bg-eco-gold/60 mt-4"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<MyAccountOverview />} />
                  <Route path="/order" element={<OrdersList />} />
                  <Route path="/order/:id" element={<OrdersList />} />
                  <Route path="/order/:id/write-review" element={<WriteReview />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/addresses" element={<SavedAddresses />} />
                  <Route path="/settings" element={<AccountSettings />} />
                  <Route path="*" element={<Navigate to="/account" replace />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
