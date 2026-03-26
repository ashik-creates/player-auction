import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Player = ({ playerPromise, balance, setBalance }) => {
  const playerData = use(playerPromise);
  const [btnToggle, setBtnToggle] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="mt-12 w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          {btnToggle === "available" ? (
            <h1 className="text-2xl font-bold">Available</h1>
          ) : (
            <h1 className="text-2xl font-bold">
              Selected Player ({selectedPlayers.length}/{playerData.length})
            </h1>
          )}
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
              Selected({selectedPlayers.length})
            </button>
          </div>
        </div>
      </div>
      {btnToggle === "available" ? (
        <AvailablePlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          players={playerData}
          balance={balance}
          setBalance={setBalance}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          balance={balance}
          setBalance={setBalance}
        ></SelectedPlayers>
      )}
    </>
  );
};

export default Player;
