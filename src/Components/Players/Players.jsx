import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({handleSelectedPlayers}) => {
    const [players, setPlayers] = useState([]);
    useEffect( () => {
        fetch('players.json')
        .then( res => res.json())
        .then( data => setPlayers(data))
    },[])
    return (
        <div id="mainPlayersSection" className="grid grid-cols-3 gap-6 px-4 container mx-auto">
            {
                players.map(player => <Player key={player.id} player={player} handleSelectedPlayers={handleSelectedPlayers}></Player>)
            }
        </div>
    );
};

export default Players;