import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="">
        
        <div className="px-4 w-10/12 mx-auto relative  -bottom-[205px]">
            <div className="p-8 border-2 border-solid border-white bg-[#FFFFFF26] rounded-3xl">
            <div style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/s39Xy2G/bg-shadow.png)"}}
                className="flex flex-col items-center justify-center bg-cover  bg-white bg-no-repeat  py-20 rounded-xl">
            
                    <h1 className="text-3xl font-bold text-[#131313]">
                    Subscribe to our Newsletter</h1>
                    <p className="mt-4 mb-6 text-[#131313B3] font-medium text-xl">
                    Get the latest updates and news right in your inbox!
                    </p>
                    <fieldset className="w-full flex items-center justify-center gap-4">
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className=" input border border-solid  w-[400px] border-[#13131326] bg-white text-white py-[18px] rounded-xl px-7"
                        />
                        <button
                        style={{
                            backgroundImage:
                            "url(https://i.ibb.co.com/yPnBWVT/Frame-11-1.png)",
                        }}
                        className="text-xl bg-no-repeat bg-cover font-bold text-black   py-[17px] rounded-xl px-7">
                        Subscribe
                        </button>      
                </fieldset>
            </div>
            </div>
        </div>

      <footer className="bg-black pt-60">
        <div className="place-items-center">
          <img src={logoFooter} alt="" />
        </div>
        <div>
          <div className="footer container mx-auto  text-base-content p-8 md:p-10 flex md:flex-row flex-col justify-between items-start ">
            <nav className="text-[#FFFFFFE6]">
              <h3 className="font-semibold text-white text-lg mb-4 leading-7 ">
                About Us
              </h3>

              <p className="w-[291px] text-[#FFFFFF99]">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>
            <nav className="text-[#FFFFFF99]">
              <h6 className=" text-white text-lg font-semibold mb-4">
                Quick Links
              </h6>
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Services</a>
              </li>
              <li>
                <a className="link link-hover">About</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </nav>

            <form>
              <h5 className="font-semibold text-lg text-white mb-4">
                Subscribe
              </h5>
              <p className="text-[#FFFFFF99] w-[291px] mb-5">
                Subscribe to our newsletter for the latest updates.
              </p>
              <fieldset className="w-full flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" input  bg-white text-white py-3 rounded-l-xl px-7"
                />
                <button
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co.com/yPnBWVT/Frame-11-1.png)",
                  }}
                  className="text-xl bg-no-repeat bg-cover font-bold text-black   py-2.5 rounded-r-xl px-7"
                >
                  Subscribe
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="text-center border-t border-t-[#ffffff3b]">
          <p className="text-[#FFFFFF99] py-8">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </footer>
        


     
    </div>
  );
};

export default Footer;
