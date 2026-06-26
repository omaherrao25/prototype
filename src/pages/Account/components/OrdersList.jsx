import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  const orders = [
    {
      id: 'OD435091509161977100',
      name: 'Neem & Tulsi Soap (100g)',
      skinType: 'Oily & Acne-Prone Skin',
      seller: 'Ecoveda Naturals',
      price: '₹249',
      listingPrice: '₹299',
      sellingPrice: '₹249',
      totalFees: '₹20',
      discount: '-₹50',
      image: '/images/Neem Soap without bg.png',
      status: 'Delivered',
      deliveryDate: 'Aug 04, 2025',
      orderConfirmedDate: 'Aug 01, 2025'
    }
  ];

  const downloadInvoice = (order) => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(16);
    doc.text('Bill Invoice', 105, 15, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill of Supply Details', 14, 25);
    
    doc.setFont('helvetica', 'normal');
    doc.text(`Bill of Supply Number : FAADB26001428482`, 14, 30);
    doc.text(`Bill of Supply Date : ${order.orderConfirmedDate}`, 14, 35);
    doc.text(`Order Number : ${order.id}`, 14, 40);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Nature of transaction : INTRA', 120, 25);
    doc.setFont('helvetica', 'normal');
    doc.text('Nature Of Supply : Service', 120, 30);
    
    doc.line(14, 43, 196, 43);
    
    // Addresses
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Billed From', 14, 50);
    doc.text('Billed To', 105, 50);
    
    doc.setFont('helvetica', 'normal');
    doc.text('Ecoveda Naturals', 14, 55);
    doc.text('101 Eco Hub, Green Street', 14, 60);
    doc.text('Mumbai, Maharashtra, India - 400001', 14, 65);
    doc.text('GSTIN : 27AABCF8078M1Z1', 14, 70);
    
    doc.text('John Doe', 105, 55);
    doc.text('123 Green Street, Eco Valley, Nature City', 105, 60);
    doc.text('Maharashtra, IN-MH, India - 456789', 105, 65);
    
    doc.line(14, 73, 196, 73);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Shipped From', 14, 80);
    doc.text('Shipped To', 105, 80);
    
    doc.setFont('helvetica', 'normal');
    doc.text('Ecoveda Warehouse', 14, 85);
    doc.text('Eco Industrial Park, Pune', 14, 90);
    doc.text('Maharashtra, India - 411001', 14, 95);
    
    doc.text('John Doe', 105, 85);
    doc.text('123 Green Street, Eco Valley, Nature City', 105, 90);
    doc.text('Maharashtra, IN-MH, India - 456789', 105, 95);
    
    const formattedPrice = order.price.replace('₹', 'Rs. ');
    const formattedSellingPrice = order.sellingPrice.replace('₹', 'Rs. ');

    // Main Table
    autoTable(doc, {
      startY: 100,
      head: [['Particulars', 'SAC', 'Qty', 'Gross Amount', 'Taxable Value', 'SGST', 'CGST', 'Total']],
      body: [
        ['GT Charges', '996511', '1.0', formattedPrice, formattedPrice, '0.00', '0.00', formattedPrice]
      ],
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0] },
      foot: [['', '', 'Total', formattedPrice, formattedPrice, '0.00', '0.00', formattedPrice]]
    });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('DETAILS OF GOODS TRANSPORTED BY GTA SUPPLIER', 105, doc.lastAutoTable.finalY + 10, { align: 'center' });
    
    // Details of Goods Table
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 15,
      head: [['Description of Goods', 'Qty', 'Gross Weight of Consignment', 'Value of goods']],
      body: [
        [order.name, '1.0', '120.0 grams', formattedSellingPrice]
      ],
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0] }
    });
    
    doc.save(`${order.id}.pdf`);
  };

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
                  <p className="text-sm text-gray-500 mt-2">Skin Type: {order.skinType}</p>
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
                <div className="absolute left-[13px] top-10 bottom-10 w-0.5 bg-gray-200 overflow-hidden">
                  <motion.div 
                    className="w-full bg-green-500 origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ height: '100%' }}
                  />
                </div>
                
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Order Confirmed <span className="text-gray-400 font-normal">Fri, 1st Aug '25</span></p>
                    <AnimatePresence>
                      {showAllUpdates && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-4 text-sm pb-2">
                            <div>
                              <p className="text-gray-800">Your Order has been placed.</p>
                              <p className="text-gray-400">Fri, 1st Aug '25 - 8:23pm</p>
                            </div>
                            <div>
                              <p className="text-gray-800">Seller has processed your order.</p>
                              <p className="text-gray-400">Fri, 1st Aug '25 - 9:19pm</p>
                            </div>
                            <div>
                              <p className="text-gray-800">Your item has been picked up by delivery partner.</p>
                              <p className="text-gray-400">Fri, 1st Aug '25 - 9:19pm</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <AnimatePresence>
                  {showAllUpdates && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-6 mb-8 relative z-10">
                        <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white mt-1.5 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">Shipped <span className="text-gray-400 font-normal">Fri, 1st Aug '25</span></p>
                          <div className="mt-4 space-y-4 text-sm pb-2">
                            <div>
                              <p className="text-gray-900 font-medium">Ekart Logistics - FMPP3227469154</p>
                              <p className="text-gray-800">Your item has been shipped.</p>
                              <p className="text-gray-400">Fri, 1st Aug '25 - 9:56pm</p>
                            </div>
                            <div>
                              <p className="text-gray-800">Your item has been received in the hub nearest to you</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 mb-8 relative z-10">
                        <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white mt-1.5 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">Out For Delivery <span className="text-gray-400 font-normal">Mon, 4th Aug '25</span></p>
                          <div className="mt-4 space-y-4 text-sm pb-2">
                            <div>
                              <p className="text-gray-800">Your item is out for delivery</p>
                              <p className="text-gray-400">Mon, 4th Aug '25 - 9:52am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-white mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Delivered <span className="text-gray-400 font-normal">Mon, 4th Aug '25</span></p>
                    <AnimatePresence>
                      {showAllUpdates && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-4 text-sm pb-2">
                            <div>
                              <p className="text-gray-800">Your item has been delivered</p>
                              <p className="text-gray-400">Mon, 4th Aug '25 - 2:21pm</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => setShowAllUpdates(!showAllUpdates)}
                  className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:text-blue-800"
                >
                  {showAllUpdates ? 'Hide Updates' : 'See All Updates'} 
                  <ChevronRight className={`w-4 h-4 transition-transform ${showAllUpdates ? '-rotate-90' : 'rotate-90'}`} />
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

              <button 
                onClick={() => downloadInvoice(order)}
                className="w-full py-2.5 border border-gray-300 rounded flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
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
          className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-6 items-center"
          onClick={() => navigate(`/account/order/${order.id}`)}
          whileHover={{ y: -2 }}
        >
          {/* Image */}
          <div className="w-16 h-16 flex-shrink-0">
            <img src={order.image} alt={order.name} className="w-full h-full object-contain" />
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col sm:flex-row w-full items-center justify-between gap-6">
            <div className="flex-[2] text-center sm:text-left">
              <h3 className="text-gray-900 hover:text-blue-600 transition-colors text-lg">{order.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Skin Type: {order.skinType}</p>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <span className="font-medium text-gray-900">{order.price}</span>
            </div>

            <div className="flex-[1.5] space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900 text-sm">Delivered on {order.deliveryDate}</span>
              </div>
              <p className="text-xs text-gray-500">Your item has been delivered</p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/account/order/${order.id}/write-review`);
                }}
                className="flex items-center justify-center sm:justify-start gap-1 text-blue-600 font-medium text-sm mt-2 hover:text-blue-800 transition-colors"
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
