import React from "react";
import SelectedCard from "../../ui/selectedCard";
import EmptyText from "../../EmptyText/EmptyText";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  const handleDelete = (selectPlayer) => {

    setBalance(balance + selectPlayer.playerPrice);
    const newSelected = selectedPlayers.filter(
      (p) => p.id !== selectPlayer.id,
    );
    setSelectedPlayers(newSelected);
    
  };
  return (
    <div className="w-11/12 mx-auto my-12 space-y-4">
      {selectedPlayers.length === 0 ? (
        <EmptyText></EmptyText>
      ) : (
        selectedPlayers.map((player) => (
          <SelectedCard
            key={player.id}
            player={player}
            handleDelete={handleDelete}
          ></SelectedCard>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
