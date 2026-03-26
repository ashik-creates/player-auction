import React from "react";
import { TbTrash } from "react-icons/tb";

const SelectedCard = ({ player }) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 shadow-xl border-2 border-gray-200 rounded-lg">
        <div className="flex justify-center items-center gap-2.5">
          <img src={player.playerImg} alt={player.playerName} className="w-20 h-20 rounded-lg" />
          <div>
            <h1 className="text-2xl font-bold">{player.playerName}</h1>
            <p>{player.playerBat}</p>
          </div>
        </div>
        <div>
          <button className="btn">
            <TbTrash></TbTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
