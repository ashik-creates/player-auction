import React from "react";
import bgImg from "../../assets/bg-shadow.png";

const FloatingCard = () => {
  return (
    <div className="w-11/12 mx-auto p-5 bg-white/20 rounded-xl outline-1 outline-white">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="flex justify-center items-center p-15 bg-cover bg-no-repeat bg-center rounded-xl bg-white "
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
          <p>Get the latest updates and news right in your inbox</p>
          <div className="flex justify-center items-center gap-4">
            <input className="px-10 py-2 border-2 border-gray-200 rounded-xl" type="email" placeholder="Enter your email" />
            <button className="btn rounded-xl py-5 bg-linear-to-r from-pink-300 to-yellow-300 font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
