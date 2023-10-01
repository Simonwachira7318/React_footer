import logo from './logo.svg';
import './App.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gradient-to-r from-teal-700 to-teal-500 rounded-tr-3xl">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h2 className="flex mb-4 text-2xl font-bold text-black">Onlineusa.com</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus.</p>
            <div>
              <div class="p-6 rounded-lg shadow-lg">
                <h2 class="text-xl text-gray-900 font-semibold mb-4">PAYMENT METHODS</h2>
                <div class="flex flex-wrap gap-4">
                  <div class="flex items-center">
                    {/* <img src="mpesa-icon.png" alt="M-pesa" class="w-8 h-8 mr-2"> */}
                    <p>M-pesa</p>
                  </div>
                  <div class="flex items-center">
                    {/* <img src="paypal-icon.png" alt="PayPal" class="w-8 h-8 mr-2"> */}
                    <p>PayPal</p>
                  </div>
                  <div class="flex items-center">
                    {/* <img src="globalpay-icon.png" alt="GlobalPay" class="w-8 h-8 mr-2"> */}
                    <p>GlobalPay</p>
                  </div>
                  <div class="flex items-center">
                    {/* <img src="postcards-icon.png" alt="Postcards" class="w-8 h-8 mr-2"> */}
                    <p>Postcards</p>
                  </div>
                  <div class="flex items-center">
                    {/* <img src="visa-icon.png" alt="Visa" class="w-8 h-8 mr-2"> */}
                    <p>Visa</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="mb-6 cursor-pointer">
            <h2 className="mb-4 text-2xl font-bold text-black"> Quick Links</h2>
            <ul>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Supplements</li>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Health & Beauty</li>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Electronics</li>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Fashion</li>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Medical Devices</li>
              <li className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'>Water Filtration</li>
            </ul>
            <div class="rounded-lg">
              <h2 class="text-lg text-black font-semibold">USEFUL LINKS</h2>
              <ul class="list-disc pl-6">
                <li className='transition duration-300 ease-in-out hover:underline hover:text-blue-700'><a href="#">Track Your Order</a></li>
                <li className='transition duration-300 ease-in-out hover:underline hover:text-blue-700'><a href="#">Shipping and Delivery</a></li>
                <li className='transition duration-300 ease-in-out hover:underline hover:text-blue-700'><a href="#">Return Policy</a></li>
                <li className='transition duration-300 ease-in-out hover:underline hover:text-blue-700'><a href="#">How to Order?</a></li>
              </ul>
            </div>

          </div>
          <div className="mb-6 cursor-pointer">
            <h2 className="mb-4 text-2xl font-bold text-black">Contact Information</h2>
            <p className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'><a class="pr-2 fas fa-envelope"></a>Email: onlineusa@gmail.com</p>
            <p className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'><a class="pr-2 fas fa-phone"></a>Tel: +2547 065 8904</p>
            <p className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'><a class="pr-2 fas fa-map-marker-alt"></a>Location: Mol Avenue Plaza, fX</p>
            <p className='transition duration-300 ease-in-out hover:text-black hover:translate-x-2'><a class="pr-2 fa fa-address-card"></a>Address: 30062-00100 Nairobi</p>
          </div>
          <div className="mb-6 cursor-pointe">
            <h2 className="mb-4 text-2xl font-bold text-black">CONNECT WITH US:</h2>
            <div className="pl-4 space-x-4">
              <a href="#" className="text-white hover:text-blue-600">
                <i className="text-3xl fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                <i className="text-3xl fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                <i className="text-3xl fab fa-instagram"></i>
              </a>
            </div>
            <div class="text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-xl text-gray-800 font-semibold">NEED HELP?</h2>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
            </div>
            <div class="mb-2">
              <p class="text-lg transition duration-300 ease-in-out hover:underline hover:text-blue-700">Chat with us</p>
              <p class="text-lg transition duration-300 ease-in-out hover:underline hover:text-blue-700">Help Center</p>
            </div>
            <div>
              <button class="font-semibold bg-yellow-300 text-blue-900 rounded-lg py-2 px-4 hover:bg-yellow-500 hover:text-blue-800 transition duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>

          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Onlineusa.com</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions of Use</a> | <a href="#">Supply Chains Act</a> | <a href="#">CCPA California Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;