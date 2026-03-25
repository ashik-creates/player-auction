import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvailableCard = () => {
  return (
    <div>
      <div className="card bg-base-100 max-w-125 shadow-sm">
        <figure className="rounded-lg">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-3 ">
          <div className="flex items-center gap-2 mb-1.5">
            <FaUser></FaUser>
            <h2 className="text-2xl font-bold">Virat Kohli</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <FaFlag></FaFlag>
                <p>Bangladesh</p>
            </div>
            <span className="badge">
                All-rounder
            </span>
          </div>
          <div className="divider"></div>
          <h2 className="mb-1.5 font-bold">Rating</h2>
          <div className="flex justify-between items-center mb-1.5">
            <p className="font-bold">
                Right-Hand-Bat
            </p>
            <p>
                Right-Hand-bowl
            </p>
          </div>
          <div className="card-actions justify-between items-center">
            <p className="font-bold">
                Price: $<span>0</span>
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
