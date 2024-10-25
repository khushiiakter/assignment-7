
const SelectedPlayers = ({ selectedPlayers,handleDelete, setIsActive }) => {
    

  return (
    <div className="space-y-5">
      {selectedPlayers.map((player, idx) => (
        <div key={idx} className="p-4 border border-solid border-[#1313131A] rounded-2xl ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[80px]  h-[80px]">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src={player.image}
                  alt=""
                />
              </div>

              <div className=" ml-6">
                <h3 className="text-2xl leading-[30px] font-semibold text-[#131313] pb-3">
                  {player.name}
                </h3>
                <div className="flex items-center gap-3 leading-[20px] text-[#13131399]">
                  <p>{player.role}</p>
                  <p>${player.biddingPrice}</p>
                </div>
              </div>
            </div>
            <div onClick={()=>handleDelete(player.playerId, player.biddingPrice, player.name)} className="mr-12 text-2xl">
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>

        </div>
      ))}

        <button  className="p-2  border border-solid border-[#131313] rounded-2xl">
          <button onClick={() => setIsActive(true)} className="py-3 px-5 rounded-xl text-[#131313] font-bold bg-[#E7FE29]">Add More Player</button>
        </button>
    </div>
  );
};

export default SelectedPlayers;
