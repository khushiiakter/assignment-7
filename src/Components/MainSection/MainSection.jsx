import { useState } from "react";

const MainSection = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex  justify-between items-center px-4 container mx-auto my-8">
        <h3 className="text-3xl  font-bold text-[#131313]">{`${isActive? "Available Players" :"Selected Player (4/6)"}`}</h3>

      <div>
        <button
          onClick={() => setIsActive(true)}
          className={`${
            isActive
              ? " font-bold text-[#131313] px-7 border border-[#1313131A] py-3.5  rounded-l-xl bg-[#E7FE29]"
              : "text-[#13131399] font-normal border border-[#1313131A] py-3.5 px-7 rounded-l-xl"
          }`}>Available</button>

        <button
          onClick={() => setIsActive(false)}
          className={`${
            isActive
              ? " text-[#13131399] font-normal border border-[#1313131A] py-3.5 px-5 rounded-r-xl "
              : "border border-[#1313131A] py-3.5 px-5 rounded-r-xl font-bold text-[#131313] bg-[#E7FE29]"
          }`}>Selected (0)</button>
      </div>
    </div>
  );
};

export default MainSection;
