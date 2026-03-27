
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const AvailableCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  const isSelected = selectedPlayers.some((p) => p.id === player.id);

  const handleSelectedPlayers = (selectedPlayer) => {
    const newBalance = parseInt(balance - selectedPlayer.playerPrice);

    if (newBalance < 0) {
      toast.warning("not enough balance");
      return;
    }
    setBalance(newBalance);
    setSelectedPlayers([...selectedPlayers, selectedPlayer]);
    toast.success("Player is successfully selected")
  };

  return (
    <div>
      <div className="card bg-base-100 max-w-125 shadow-sm p-5">
        <figure className="rounded-lg">
          <img src={player.playerImg} alt={player.playerName} />
        </figure>
        <div className="mt-3 ">
          <div className="flex items-center gap-2 mb-1.5">
            <FaUser></FaUser>
            <h2 className="text-2xl font-bold">{player.playerName}</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaFlag></FaFlag>
              <p>{player.playerCountry}</p>
            </div>
            <span className="badge">{player.playerType}</span>
          </div>
          <div className="divider"></div>
          <h2 className="mb-1.5 font-bold">Rating({player.playerRating})</h2>
          <div className="flex justify-between items-center mb-1.5">
            <p className="font-bold">{player.playerBat}</p>
            <p>{player.playerBowl}</p>
          </div>
          <div className="card-actions justify-between items-center">
            <p className="font-bold">
              Price: $<span>{player.playerPrice}</span>
            </p>
            <button
              onClick={() => handleSelectedPlayers(player)}
              className="btn rounded-lg"
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
