import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  User, 
  MessageCircle, 
  Copy, 
  Download, 
  ChevronRight, 
  Receipt 
} from 'lucide-react';

const OrdersList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const orders = [
    {
      id: 'OD435091509161977100',
      name: 'Botanical Night Serum (30ml)',
      color: 'Amber',
      seller: 'Ecoveda Naturals',
      price: '₹1,249',
      listingPrice: '₹1,599',
      sellingPrice: '₹1,349',
      totalFees: '₹50',
      discount: '-₹150',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80',
      status: 'Delivered',
      deliveryDate: 'Aug 04, 2025',
      orderConfirmedDate: 'Aug 01, 2025'
    }
  ];

  if (id) {
    const order = orders.find(o => o.id === id) || orders[0];
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6 max-w-6xl mx-auto"
      >
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 flex items-center gap-2 mb-6">
          <button onClick={() => navigate('/account/order')} className="hover:text-blue-600 transition-colors">My Orders</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900">{order.id}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {/* Product & Tracking Card */}
            <div className="bg-white border border-gray-200 rounded p-6">
              {/* Product Info */}
              <div className="flex justify-between pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-lg text-gray-900">{order.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{order.color}</p>
                  <p className="text-sm text-gray-500 mt-2">Seller: {order.seller}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-medium text-gray-900">{order.price}</span>
                    <span className="text-sm text-green-600 font-medium">3 offers</span>
                  </div>
                </div>
                <div className="w-20 h-28 flex-shrink-0">
                  <img src={order.image} alt={order.name} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Tracking */}
              <div className="py-8 border-b border-gray-200 relative px-2">
                <div className="absolute left-[13px] top-10 bottom-10 w-0.5 bg-green-500"></div>
                
                <div className="flex items-center gap-6 mb-12 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white"></div>
                  <div>
                    <p className="font-medium text-gray-900">Order Confirmed, {order.orderConfirmedDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white"></div>
                  <div>
                    <p className="font-medium text-gray-900">Delivered, {order.deliveryDate}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:text-blue-800">
                  See All Updates <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>



            {/* Order ID */}
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
              Order #{order.id} <button className="hover:text-blue-600 transition-colors"><Copy className="w-4 h-4 text-blue-500" /></button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[380px] space-y-4">
            {/* Delivery Details */}
            <div className="bg-white border border-gray-200 rounded p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Delivery details</h3>
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-gray-900 mr-2">Home</span>
                    <span className="text-gray-600">123 Green Street, Eco Valley, Nature City, 456789</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="text-gray-900 font-medium mr-2">John Doe</span>
                    <span className="text-gray-600">1234567890</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="bg-white border border-gray-200 rounded p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Price details</h3>
              <div className="space-y-4 text-sm mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Listing price</span>
                  <span className="line-through">{order.listingPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">Selling price <span className="text-xs text-gray-400 border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center">i</span></span>
                  <span>{order.sellingPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">Total fees <ChevronRight className="w-3 h-3 rotate-90" /></span>
                  <span>{order.totalFees}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">Other discount <ChevronRight className="w-3 h-3 rotate-90" /></span>
                  <span className="text-green-600">{order.discount}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-semibold text-gray-900 py-4 border-t border-b border-dashed border-gray-300 mb-6 mx-2">
                <span>Total amount</span>
                <span>{order.price}</span>
              </div>

              <div className="flex justify-between items-center text-sm mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-gray-600">Paid By</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <Receipt className="w-4 h-4" /> COD
                </span>
              </div>

              <button className="w-full py-2.5 border border-gray-300 rounded flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" /> Download Invoice
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {orders.map((order) => (
        <motion.div
          key={order.id}
          className="bg-white border border-gray-200 rounded p-6 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-8 items-center sm:items-start"
          onClick={() => navigate(`/account/order/${order.id}`)}
          whileHover={{ y: -2 }}
        >
          {/* Image */}
          <div className="w-24 h-32 flex-shrink-0">
            <img src={order.image} alt={order.name} className="w-full h-full object-contain" />
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col sm:flex-row w-full justify-between gap-6">
            <div className="flex-[1.5]">
              <h3 className="text-gray-900 hover:text-blue-600 transition-colors">{order.name}</h3>
              <p className="text-sm text-gray-500 mt-2">Color: {order.color}</p>
            </div>
            
            <div className="flex-1">
              <span className="font-medium text-gray-900">{order.price}</span>
            </div>

            <div className="flex-[1.5] space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900">Delivered on {order.deliveryDate}</span>
              </div>
              <p className="text-xs text-gray-600">Your item has been delivered</p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle rate & review
                }}
                className="flex items-center gap-1 text-blue-600 font-medium text-sm mt-4 hover:text-blue-800 transition-colors"
              >
                <Star className="w-4 h-4 fill-current" /> Rate & Review Product
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OrdersList;
