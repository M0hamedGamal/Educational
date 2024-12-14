import Head from "./head.jsx";
import './header.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Header() {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head/>
            <header>
                <nav className='flexsb'>
                    <ul className={click ? 'mobile-nav' : 'flexsb'} onClick={() => {setClick(false)}}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>All Courses</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/journal'>Journal</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">GET CERTIFICATE</div>
                    </div>
                    <button className="toggle" onClick={() => {setClick(!click)}}>
                        {click ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Header;