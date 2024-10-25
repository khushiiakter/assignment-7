import banner from "../../assets/banner-main.png";

const Banner = ({incrementCoins}) => {
  return (
    <div className="px-4 container mx-auto">
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co.com/s39Xy2G/bg-shadow.png)",
        }}
        className="flex flex-col items-center justify-center bg-cover  bg-black bg-no-repeat  py-11 rounded-xl"
      >
        <img className="mb-6" src={banner} alt="" />
        <h1 className="text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="mt-4 mb-6 text-[#FFFFFFB3] font-medium">
          Beyond Boundaries Beyond Limits
        </p>
        <div onClick={incrementCoins} className="p-2 border border-solid border-[#E7FE29] rounded-2xl">
          <button className="py-3 px-5 rounded-xl text-[#131313] font-bold bg-[#E7FE29]">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
