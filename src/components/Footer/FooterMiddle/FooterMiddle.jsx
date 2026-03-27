import React from "react";
import footerLogo from "../../../assets/logo-footer.png";
import { BsDot } from "react-icons/bs";
const FooterMiddle = () => {
  return (
    <div className="w-11/12 mx-auto text-white">
      <div className="w-24 h-24 mx-auto">
        <img src={footerLogo} alt="footer logo" className="w-full" />
      </div>
      <div className="py-20 grid grid-cols-3 gap-5">
        <div className="space-y-2.5">
          <h1 className="text-xl font-bold">About Us</h1>
          <p className="max-w-60">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="space-y-2.5">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <ul>
            <li className="flex items-center"><BsDot></BsDot> Home</li>
            <li className="flex items-center"><BsDot></BsDot> Services</li>
            <li className="flex items-center"><BsDot></BsDot> About</li>
            <li className="flex items-center"><BsDot></BsDot> Contact</li>
            
          </ul>
        </div>
        <div className="space-y-2.5">
          <h1 className="text-xl font-bold">Subscribe</h1>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div>
            <div className="flex">
              <input
                className="px-10 py-2 bg-white border-gray-200 border-0 rounded-l-xl text-gray-500"
                type="email"
                placeholder="Enter your email"
              />
              <button className="rounded-r-xl border-0 py-2 px-3 text-black bg-linear-to-r cursor-pointer from-pink-300 to-yellow-300 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
