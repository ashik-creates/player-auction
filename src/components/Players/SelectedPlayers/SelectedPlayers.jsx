import React from "react";
import EmptyText from "../../EmptyText/EmptyText";
import SelectedCard from "../../ui/SelectedCard";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  const handleDelete = (selectPlayer) => {
    setBalance(balance + selectPlayer.playerPrice);
    const newSelected = selectedPlayers.filter((p) => p.id !== selectPlayer.id);
    setSelectedPlayers(newSelected);
    toast.error("Player is deleted")
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
