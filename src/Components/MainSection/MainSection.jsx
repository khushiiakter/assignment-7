import { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import Players from "../Players/Players";
const MainSection = ({coins, setCoins}) => {
  const [isActive, setIsActive] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayers =(player) =>{
    const isExist = selectedPlayers.find(p => p.playerId == player.playerId);
    if(isExist){
      alert("Already Exist.")
      return;
    }else{
      if(coins >= player.biddingPrice){
        setSelectedPlayers([...selectedPlayers, player]);
        setCoins(coins - player.biddingPrice)
    }else{
      alert('Not enough coins')
    }
    }
        
  }

  const handleDelete = (id, price) =>{
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== id));
    setCoins(coins + price)
  }

  return (
    <div className="px-4 container mx-auto my-8">
      <div className="flex  justify-between items-center mb-8">
        <h3 className="text-3xl  font-bold text-[#131313]">{`${
          isActive ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`
        }`}</h3>

        <div>
          <button
            onClick={() => setIsActive(true)}
            className={`${
              isActive
                ? " font-bold text-[#131313] px-7 border border-[#1313131A] py-3.5  rounded-l-xl bg-[#E7FE29]"
                : "text-[#13131399] font-normal border border-[#1313131A] py-3.5 px-7 rounded-l-xl"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setIsActive(false)}
            className={`${
              isActive
                ? " text-[#13131399] font-normal border border-[#1313131A] py-3.5 px-5 rounded-r-xl "
                : "border border-[#1313131A] py-3.5 px-5 rounded-r-xl font-bold text-[#131313] bg-[#E7FE29]"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        
      </div>
      {/* toggle btn section  */}

        {
          isActive? <Players handleSelectedPlayers={handleSelectedPlayers}></Players> : <SelectedPlayers selectedPlayers={selectedPlayers} handleDelete={handleDelete} ></SelectedPlayers>
        }
    </div>
  );
};

export default MainSection;
