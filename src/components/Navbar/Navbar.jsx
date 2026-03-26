import React from "react";
import logoImg from "../../assets/logo.png";
import coinImg from "../../assets/Currency.png";

const Navbar = ({balance}) => {
  return (
    <div className="w-11/12 mx-auto mt-5 py-2 flex justify-between items-center shadow-lg">
      <div className="w-16 h-16">
        <img src={logoImg} alt="logo image" className="w-full" />
      </div>
      <div>
        <div className="flex gap-8 items-center">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
          <div className="flex gap-1 ml-4 font-bold items-center">
            <span>{balance}</span>
            <span>Coin</span>
            <img src={coinImg} alt="coin logo" className="w-4 h-4"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
