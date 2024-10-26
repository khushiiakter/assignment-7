import { useState } from "react";

const Player = ({player, handleSelectedPlayers}) => {
    const {name,country, image, role, battingType, bowlingType, biddingPrice, playerId}= player;
    const [chosen, setChosen]= useState(false);
  return (
    <div className="p-6 rounded-2xl border border-solid border-[#1313131A]">
      <div className="mb-6 h-[240px] ">
        <img className="object-cover w-full h-full rounded-2xl" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center  gap-4">
          <i className="fa-solid fa-user-large text-lg"></i>
          <h3 className="text-xl font-semibold text-[#131313]">{name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-base flex items-center gap-3 font-normal text-[#131313B3]">
            <i className="fa-solid fa-flag"></i>
            <p>{country}</p>
          </div>
          <p className="bg-[#1313130D] text-sm text-[#131313] rounded-lg py-2 px-4">{role}</p>
        </div>
        <hr />
        <p className="text-base font-bold text-[#131313]">Rating</p>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#131313]">{battingType}</p>
          <p className="text-base font-normal text-[#131313B3]">{bowlingType}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#131313]">Price: ${biddingPrice}</p>
          <button onClick={()=> {handleSelectedPlayers(player), setChosen(!false)}} style={{backgroundColor: chosen ? "#E7FE29" : "white"}} className="border-[#1313131A] border border-solid text-sm text-[#131313] rounded-lg py-2 px-4">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
