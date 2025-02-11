import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
const Navbar = ({coins}) => {
    return (
        <div className='flex justify-between items-center px-4 container mx-auto  my-3 sticky   bg-white top-0 z-20'>
            <div> 
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-12 items-center font-normal text-[#131313B3] leading-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                    <li className='flex gap-2 items-center justify-center border border-[#1313131A] py-3 px-5 rounded-xl bg-white'>
                        <p className='text-[#131313] font-semibold'>{coins} Coin</p>
                        <img src={coin} alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;