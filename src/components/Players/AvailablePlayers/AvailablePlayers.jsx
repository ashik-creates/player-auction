import React, { useState } from "react";
import AvailableCard from "../../ui/AvailableCard";

const AvailablePlayers = ({
  players,
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="mt-12 w-11/12 mx-auto grid grid-cols-3 gap-10">
      {players.map((player) => (
        <AvailableCard
          key={player.id}
          player={player}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          balance={balance}
          setBalance={setBalance}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        ></AvailableCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
