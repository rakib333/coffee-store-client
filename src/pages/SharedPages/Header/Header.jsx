import './Header.css';
import logo from '../../../assets/images/more/logo.png';

const Header = () => {
    return (
        <div className="bg-[url('/src/assets/images/more/topBg.jpg')] py-2">
            <div className='flex items-center justify-center'>
                <img src={logo} alt="" className='md:h-[90px] md:w-[75px] pr-3 h-12 w-12' />
                <h1 className='md:text-6xl text-2xl text-white font-normal'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;