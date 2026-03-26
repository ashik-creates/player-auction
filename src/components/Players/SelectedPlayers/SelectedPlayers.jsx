import React from 'react';
import SelectedCard from '../../ui/selectedCard';


const SelectedPlayers = ({selectedPlayers}) => {
    return (
        <div className='w-11/12 mx-auto my-12 space-y-4'>
            {selectedPlayers.map(player=> <SelectedCard key={player.id} player={player}></SelectedCard> )}
        </div>
    );
};

export default SelectedPlayers;