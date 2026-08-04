"use client";
import React, { useState } from 'react';
import image1 from "@/assets/images/image a.png";


const OrderForm = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "MIKEO Fiber XS Prebiotic & Probiotic Supplement",
    price: 1150,
    image: image1.src,
    color: "",
    size: ""
  });

  const [quantity, setQuantity] = useState(1);
  const [shippingCharge, setShippingCharge] = useState(0); 
  const [isSelected, setIsSelected] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryArea: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Calculations
  const subtotal = isSelected ? product.price * quantity : 0;
  const total = subtotal + shippingCharge;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted: ", { formData, product, quantity, total });
    alert("অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 font-sans text-gray-800">
      
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন।
        </h1>
        <p className="text-lg font-medium text-gray-800">
          আমরা কল করে কনফার্ম করবো
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-4 max-w-xl">
          <input 
            type="checkbox" 
            checked={isSelected}
            onChange={(e) => setIsSelected(e.target.checked)}
            className="w-5 h-5 mt-1 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          />
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-12 h-12 object-cover rounded" 
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-sm md:text-base text-gray-900 leading-tight pr-4">
                {product.name}
              </h3>
              <span className="font-bold text-gray-900">৳{product.price.toFixed(2)}</span>
            </div>
            <div className="text-xs text-gray-500 mt-2 space-y-1">
              <p>Color:</p>
              <p>Size:</p>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold border-b pb-2 text-gray-900">বিলিং বিবরণ</h2>
            
           
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                আপনার নাম লিখুন <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                মোবাইল নাম্বার <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                আপনার ঠিকানা <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ডেলিভারি এলাকা <span className="text-red-500">*</span>
              </label>
              <select 
                name="deliveryArea"
                required
                value={formData.deliveryArea}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value === 'inside') setShippingCharge(60);
                  if (e.target.value === 'outside') setShippingCharge(120);
                }}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
              >
                <option value="">নির্বাচন এলাকা</option>
                <option value="inside">ঢাকার ভিতরে (৳৬০)</option>
                <option value="outside">ঢাকার বাইরে (৳১২০)</option>
              </select>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900">আপনার অর্ডার আইটেম</h2>
            
            {isSelected ? (
              <div className="border border-gray-100 p-3 rounded-lg flex items-center justify-between gap-3 bg-gray-50">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt="" className="w-10 h-10 object-cover rounded" />
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 max-w-[180px] truncate md:max-w-none">
                      {product.name}
                    </h4>
                    <div className="flex items-center mt-2 border border-gray-300 rounded w-max bg-white">
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange('decrement')}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 text-xs font-semibold border-x border-gray-300">
                        {quantity}
                      </span>
                      <button 
                        type="button"
                        onClick={() => handleQuantityChange('increment')}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold text-sm text-gray-700">৳{product.price}</span>
                  <button 
                    type="button"
                    onClick={() => setIsSelected(false)}
                    className="bg-[#dc2626] text-white text-[10px] font-bold px-2 py-1 rounded hover:bg-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div> */}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic py-2">কোনো আইটেম সিলেক্ট করা নেই।</p>
            )}

            <div className="pt-2 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Subtotal:</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Shipping Charge:</span>
                <span>৳{shippingCharge.toFixed(2)}</span>
              </div>           
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-xl font-bold text-gray-900">Total:</span>
                <span className="bg-[#0f172a] text-white text-lg font-bold px-4 py-1.5 rounded">
                  ৳{total.toFixed(2)}
                </span>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#dc2626] text-white font-bold py-3.5 rounded-md hover:bg-red-700 transition-colors text-center text-base mt-4 shadow-sm"
            >
              অর্ডার কনফার্ম করুন
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default OrderForm;