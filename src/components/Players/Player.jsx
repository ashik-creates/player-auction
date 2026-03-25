import React, { useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Player = () => {
  const [btnToggle, setBtnToggle] = useState("available");

  return (
    <>
      <div className="mt-12 w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Available Players</h1>
          <div>
            <button
              onClick={() => setBtnToggle("available")}
              className={`btn ${btnToggle === "available" && "bg-yellow-300"} border-r-0
          border-2 border-gray-300 rounded-l-2xl`}
            >
              Available
            </button>
            <button
              onClick={() => setBtnToggle("selected")}
              className={`btn border-2 border-gray-300 ${btnToggle === "selected" && "bg-yellow-300"} border-l-0 rounded-r-2xl`}
            >
              Selected(0)
            </button>
          </div>
        </div>
      </div>
      {btnToggle === "available" ? (
        <AvailablePlayers></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
};

export default Player;
