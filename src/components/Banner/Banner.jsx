import React from "react";
import bgImg from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-9 rounded-xl bg-[#131313]">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="min-h-[60vh] bg-no-repeat bg-cover rounded-xl flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-48 h-48">
            <img src={bannerImg} alt="banner logo" />
          </div>
          <div className="text-white flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-400">Beyond Boundaries Beyond Limit</p>
            <button
              className="btn text-black rounded-xl bg-yellow-300 border-0 btn-ghost
                    outline-1 outline-yellow-300 outline-offset-4
                    "
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
